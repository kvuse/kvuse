import { ref } from 'vue';

export function usePage() {
  const totalPage = ref(1);
  const totalRecord = ref(1);
  const currentPage = ref(1);
  const listData = ref([]);
  const loading = ref(true);
  const isNullData = ref(false);

  // 删除判断是否跳转上一页
  const getNowPage = (list = listData.value) => {
    const isLastPage = currentPage.value > 1 && list.length === 1;
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
