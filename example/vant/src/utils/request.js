/**
 * @file axios请求封装
 * @author liukai
 * @url 详情 https://juejin.cn/user/3438928101651912
 */
import { useRequest } from '@kvuse/core';
import { showToast, closeToast } from 'vant';

const { $api } = useRequest({
  // 请求拦截器
  beforeRequest(config) {
    config.headers.token = '';
    return config;
  },
  // 响应处理
  // errorResponse(error) {
  //   console.log('error: ', error);
  // },
  // 报错提示
  errorHandler(message) {
    console.log('message: ', message);
    // 弹出错误信息
    closeToast();
    showToast({ message, type: 'fail' });
  },
});

export default $api;
