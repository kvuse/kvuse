import axios from 'axios';
import { useMessage } from '../useMessage';

const { message } = useMessage();
const checkCode = (msg) => message.error(msg);

/**
 * 请求封装
 * @auth liukai
 * @param {object} axios 实例
 * @param {function} beforeRequest // 请求拦截
 * @param {function} beforeResponse // 响应处理
 * @param {function} errorHandler 报错信息处理
 */
export function useRequest({
  instance = axios, beforeRequest, beforeResponse, errorHandler = checkCode, errorResponse,
} = {}) {
  if (!instance) {
    instance.defaults = {
      instance: 1000, // 响应时间
      withCredentials: true, // `withCredentails`选项表明了是否是跨域请求
      headers: { // 设置默认请求头
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
  }

  const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
  const cancelToken = instance.CancelToken;
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
  instance.interceptors.request.use(async (config) => {
    const result = beforeRequest ? await beforeRequest(config) : config;
    removePending(result); // 在一个ajax发送前执行一下取消操作
    // eslint-disable-next-line new-cap
    result.cancelToken = new cancelToken((cf) => {
      pending.push({ url: `${result.url}&${result.method}`, fn: cf });
    });
    return result;
  });

  // 添加返回拦截器
  instance.interceptors.response.use(
    async (response) => {
      removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
      if (beforeResponse) {
        const result = beforeResponse ? await beforeResponse(response) : response;
        return result;
      }
      const { data, data: { code } } = response || {};
      if (code === 0) return data;
      if (data) errorResponse(data);
      return errorHandler(response.message);
    },
    async (error) => {
      if (error && error.response) {
        const { data, status } = error.response;
        if (status && errorResponse) await errorResponse(data);
        if (data.errors && data.errors.length) error.message = data.errors[0].message || data.message;
        else {
          const errorStatus = {
            400: '请求错误', 401: '登录过期，请重新登录', 403: '拒绝访问', 404: '请求失败', 408: '请求超时', 500: '服务器内部错误', 501: '服务未实现', 502: '无法连接服务器', 503: '服务不可用', 504: '连接服务器超时', 505: 'HTTP版本不受支持',
          };
          error.message = errorStatus[status];
        }
        errorHandler(error.message);
      }
      if (error.message === 'timeout of 10000ms exceeded') error.message = '网络超时, 请检查网络！';
      // 对返回的错误处理
      if (error.message) return Promise.reject(error);
      return '';
    },
  );

  const $api = {
    async get(url, params) {
      try {
        const res = await axios.get(url, { params });
        return typeof res.data !== 'undefined' && res.data;
      } catch (err) {
        return errorHandler(err.message);
      }
    },
    async post(url, params) {
      try {
        const res = await axios({
          method: 'post',
          url,
          data: params,
        });
        return typeof res.data !== 'undefined' && res.data;
      } catch (err) {
        return errorHandler(err.message);
      }
    },
    async put(url, params) {
      try {
        const res = await axios({
          method: 'put',
          url,
          data: params,
        });
        return typeof res.data !== 'undefined' && res.data;
      } catch (err) {
        return errorHandler(err.message);
      }
    },
    async delete(url, params) {
      try {
        const res = await axios.delete(url, { params });
        return typeof res.data !== 'undefined' && res.data;
      } catch (err) {
        return errorHandler(err.message);
      }
    },
    async all(url, params) {
      try {
        const res = await axios.all(url, { params });
        return typeof res.data !== 'undefined' && res.data;
      } catch (err) {
        return errorHandler(err.message);
      }
    },
  };

  return {
    $api,
  };
}
