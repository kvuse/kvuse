import $api from '@/utils/request';

export const storeApi = {
  /**  店铺列表 */
  storeList: (params) => $api.get('/admin/retail', params), // 店铺列表
};
