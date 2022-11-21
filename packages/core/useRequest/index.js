import axios from 'axios';
import { ElMessage } from 'element-plus';
/**
 * 请求封装
 * @auth liukai
 * @param {object} axios 实例
 * @param {function} beforeRequest // 请求拦截
 * @param {function} beforeResponse // 响应拦截
 * @param {function} responseHandler // 响应处理
 * @param {function} errorHandler 报错信息处理
 */
export function useRequest({
  instance = axios, beforeRequest, beforeResponse, responseHandler, errorHandler, errorResponse,
} = {}) {
  let axiosInstance = instance;
  if (!axiosInstance) {
    axiosInstance = axios;
    axiosInstance.defaults.timeout = 10000; // 响应时间
    axiosInstance.defaults.withCredentials = true; // `withCredentails`选项表明了是否是跨域请求
    axiosInstance.defaults.headers = { // 设置默认请求头
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const checkCode = (msg) => {
    if (errorHandler) errorHandler(msg);
    else {
      ElMessage.closeAll();
      ElMessage.error(msg);
    }
  };

  const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
  const cancelToken = axios.CancelToken;
  const removePending = (config) => {
    const resUrl = `${config.url}&${config.method}`;
    // eslint-disable-next-line no-restricted-syntax
    for (const p in pending) {
      if (pending[p].url === resUrl) { // 当当前请求在数组中存在时执行函数体
        pending[p].fn(); // 执行取消操作
        pending.splice(p, 1); // 把这条记录从数组中移除
      }
    }
  };

  // 添加请求拦截器
  axiosInstance.interceptors.request.use(async (config) => {
    const result = beforeRequest ? await beforeRequest(config) : config;
    removePending(result); // 在一个ajax发送前执行一下取消操作
    // eslint-disable-next-line new-cap
    result.cancelToken = new cancelToken((cf) => {
      pending.push({ url: `${result.url}&${result.method}`, fn: cf });
    });
    return result;
  });

  // 添加返回拦截器
  axiosInstance.interceptors.response.use(
    async (response) => {
      removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
      if (beforeResponse) {
        const result = beforeResponse ? await beforeResponse(response) : response;
        return result;
      }
      // 响应处理
      if (responseHandler) {
        const result = await responseHandler(response);
        return result;
      }
      const { data, data: { code }, config } = response || {};
      if ([0, 1001].includes(code)) return data;
      if (data) errorResponse(data, config);
      return checkCode(response.message);
    },
    async (error) => {
      if (error && error.response) {
        const { data, status, config } = error.response;
        if (status && errorResponse) {
          const [errorItem] = data?.errors || [];
          await errorResponse(errorItem ?? data, config);
        }
        if (data.errors && data.errors.length) error.message = data.errors[0].message || data.message;
        else {
          const errorStatus = {
            400: '请求错误', 401: '登录过期，请重新登录', 403: '拒绝访问', 404: '请求失败', 408: '请求超时', 500: '服务器内部错误', 501: '服务未实现', 502: '无法连接服务器', 503: '服务不可用', 504: '连接服务器超时', 505: 'HTTP版本不受支持',
          };
          error.message = errorStatus[status];
        }
        checkCode(error.message);
      }
      if (error.message && error.message.includes('timeout of')) error.message = '网络超时, 请检查网络！';
      // 对返回的错误处理
      if (error.message) return Promise.reject(error);
      return error;
    },
  );

  /**
   * 返参正确处理
   * @param {object} res
   * @param {boolean} isObject  是否返回对象模式
   * @returns object | data
   */
  const setResult = (res, isObject = false) => {
    if (isObject) return res;
    return typeof res.data !== 'undefined' && res.data;
  };

  /**
   * 请求方式处理
   * @param {string} url 请求路径
   * @param {object} params 请求参数
   * @param {string} method 请求类型
   * @param {boolean} isObject 是否返回队形模式
   * @returns
   */
  // eslint-disable-next-line consistent-return
  const requestHandle = async (url, params, method, isObject) => {
    try {
      const res = ['post', 'put'].includes(method)
        ? await axiosInstance({ method, url, data: params })
        : await axiosInstance[method](url, { params });
      return setResult(res, isObject);
    } catch (err) {
      checkCode(err.message);
      if (isObject) return err;
    }
  };

  const $api = {
    get: (url, params) => requestHandle(url, params, 'get'),
    post: (url, params) => requestHandle(url, params, 'post'),
    put: (url, params) => requestHandle(url, params, 'put'),
    delete: (url, params) => requestHandle(url, params, 'delete'),
    all: (url, params) => requestHandle(url, params, 'all'),
  };

  const $http = {
    get: (url, params) => requestHandle(url, params, 'get', true),
    post: (url, params) => requestHandle(url, params, 'post', true),
    put: (url, params) => requestHandle(url, params, 'put', true),
    delete: (url, params) => requestHandle(url, params, 'delete', true),
    all: (url, params) => requestHandle(url, params, 'all', true),
  };

  return {
    $api, $http,
  };
}
