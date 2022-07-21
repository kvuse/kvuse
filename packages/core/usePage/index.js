import { ref } from 'vue';

export function usePage() {
  const totalPage = ref(1);
  const totalRecord = ref(1);
  const currentPage = ref(1);
  const listData = ref([]);
  const loading = ref(true);
  const isNullData = ref(false);

  /**
   * 删除判断是否跳转上一页
   * @param {array} delList 删除的商品列表(批量删除)
   * @param {array} list // 当前商品列表
   * @returns currentPage
   */
  const getNowPage = (delList = [], list = listData.value) => {
    const isLastPage = currentPage.value > 1 && (list.length === 1 || list.length === delList.length);
    if (isLastPage) currentPage.value--;
    return currentPage.value;
  };

  const setListAndPage = (result) => {
    const {
      records = [], totalPage: totalPages = 1, pageNo = 1, totalRecord: totalElements = 1,
    } = result || {};
    listData.value = records;
    loading.value = false;
    totalPage.value = totalPages;
    totalRecord.value = totalElements;
    currentPage.value = pageNo;
    isNullData.value = !records.length;
  };

  return {
    totalPage, totalRecord, currentPage, listData, tableData: listData, loading, getNowPage, setListAndPage, isNullData,
  };
}
