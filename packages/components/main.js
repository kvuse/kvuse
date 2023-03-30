import './styles/normalize.css';
import './styles/common.scss';
import directives from './directives';
import KButton from './button';
import KInput from './input';
import KInputNumber from './input-number';
import KTable from './table';
import KTableV2 from './table-v2';
import KPage from './pagination';
import KBatchTable from './batch-table';
import KDialog from './dialog';
import KBreadcrumb from './breadcrumb';
import KTabs from './tabs';
import KPicker from './picker';
import KTooltip from './tooltip';
import KDatePicker from './date-picker';
import KNumberKeyboard from './number-keyboard';
import KVirtualList from './virtual-list';
import KAutoCounter from './auto-counter';
import KCollapseButton from './collapse-button';
import KCardList from './card-list';

const KUI = {
  KButton,
  KInput,
  KInputNumber,
  KTable,
  KTableV2,
  KPage,
  KBatchTable,
  KDialog,
  KBreadcrumb,
  KTabs,
  KPicker,
  KTooltip,
  KDatePicker,
  KNumberKeyboard,
  KVirtualList,
  KAutoCounter,
  KCollapseButton,
  KCardList,
  install: () => {},
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

KUI.install = function (app) {
  Object.keys(KUI).forEach((key) => {
    if (startsWith(key, 'K')) {
      const Component = KUI[key];
      app.component(Component.name, Component);
    }
  });
  // 自定义指令
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
  });
};

// export default KUI;

export {
  directives, KButton, KInput, KInputNumber, KTable, KTableV2, KPage, KBatchTable, KDialog, KBreadcrumb, KTabs, KPicker, KTooltip, KDatePicker, KNumberKeyboard, KVirtualList, KAutoCounter, KCollapseButton, KCardList, KUI,
};
