import 'kucss/src/index.css';
import KvButton from './button';
import KvInput from './input';
import KvTable from './table';
import KvTree from './tree';
import KvList from './list';
import KvStatus from './status';
import KvDatePicker from './date-picker';

const KVant = {
  KvButton,
  KvInput,
  KvTable,
  KvTree,
  KvList,
  KvStatus,
  KvDatePicker,
  install: () => {},
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

KVant.install = function (app) {
  Object.keys(KVant).forEach((key) => {
    if (startsWith(key, 'K')) {
      const Component = KVant[key];
      app.component(Component.name, Component);
    }
  });
  // 自定义指令
  // Object.keys(directives).forEach((key) => {
  //   app.directive(key, directives[key]);
  // });
};

// export default KVant;

export {
  KvButton, KvInput, KvTree, KVant, KvList, KvStatus, KvTable, KvDatePicker,
};
