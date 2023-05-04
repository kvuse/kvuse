import {
  describe, it, expect,
} from 'vitest';
import { mount } from '@vue/test-utils';
import KvTable from '../index';

const columns = [
  { label: '姓名', prop: 'name' },
  { label: '提成占比', prop: 'rate' },
  { label: '提成金额', prop: 'money' },
];
const data = [
  { name: '123', rate: 10, money: 20 },
  { name: '456', rate: 20, money: 40 },
];

describe('Vant KvTable', () => {
  it('create', () => {
    const wrapper = mount(KvTable);
    expect(wrapper.classes()).toContain('k-table');
  });
  it('props align', async () => {
    const wrapper = mount(KvTable, {
      props: { columns, data },
    });
    expect(wrapper.find('.column-item').attributes().style).toEqual('text-align: left;');
    await wrapper.setProps({ align: 'center' });
    expect(wrapper.find('.column-item').attributes().style).toEqual('text-align: center;');
  });
  it('props columns', () => {
    const wrapper = mount(KvTable, {
      props: { columns, data },
    });
    expect(wrapper.findAll('.column-item')).toHaveLength(2);
  });
});
