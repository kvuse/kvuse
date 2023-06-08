import { ref } from 'vue';

export function useTableV2(props) {
  const headerColmn = ref(null);
  const headerClass = (row) => {
    let classStyles = {};
    const {
      align, width, fixed, minWidth,
    } = row;
    if (align) classStyles['text-center'] = `${align}`;
    if (minWidth) classStyles['min-width'] = `${minWidth}`;
    if (width) {
      classStyles = {
        ...classStyles, width: `${width}`, flex: 'inherit', 'flex-shrink': 0,
      };
    }
    if (fixed) {
      const rowIndex = props.tableColumn.findIndex((item) => item.prop === row.prop);
      const tableLength = props.tableColumn.length;
      classStyles = {
        ...classStyles, position: 'sticky', 'z-index': 50,
      };
      if (fixed === 'left') {
        const leftNum = props.tableColumn.filter((item) => item.fixed === 'left')?.length;

        let left = 0;
        if (rowIndex > 0 && rowIndex < tableLength - 1 && leftNum > 1) left = headerColmn.value?.at(rowIndex - 1).clientWidth;
        classStyles.left = `${left}px`;
        let fixedEndIndex = 0;
        props.tableColumn.forEach((item, index) => {
          if (item.fixed === 'left') fixedEndIndex = index;
        });
        // const fixedEndIndex = props.tableColumn?.findIndex((item) => item.fixed === 'left');
        if (fixedEndIndex === rowIndex) classStyles['box-shadow'] = '3px 0px 4px #b0a8a836';
      } else {
        const rightNum = props.tableColumn.filter((item) => item.fixed && item.fixed !== 'left')?.length;
        let right = 0;
        if (rowIndex < tableLength - 1 && rightNum > 1) {
          right = headerColmn.value?.at(rowIndex + 1).clientWidth;
        }
        const fixedStartIndex = props.tableColumn.findIndex((item) => item.fixed && item.fixed !== 'left');
        if (fixedStartIndex === rowIndex) classStyles['box-shadow'] = '-3px 0 4px #b0a8a836';
        classStyles.right = `${right}px`;
      }
    }
    if (props.isFooter) classStyles.color = '#606266';
    return classStyles;
  };

  const tableHeader = ref(null);

  // summary
  const computeSummary = (row) => {
    const sum = props.tableData.reduce((total, pre) => total + Number(pre[row.prop]), 0);
    return Number.isNaN(sum) ? 'N/A' : sum.toFixed(2);
  };

  const getSummaries = (row, index) => {
    if (props.summaryMethod) return props.summaryMethod({ row, index });
    if (!index) return props.sumText;
    return computeSummary(row);
  };

  return {
    headerColmn, headerClass, tableHeader, getSummaries,
  };
}
