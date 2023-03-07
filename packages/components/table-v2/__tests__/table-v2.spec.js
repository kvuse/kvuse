import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TableV2 from '../main.vue';

describe('table-v2.vue', () => {
  it('creat tableV2', () => {
    const wrapper = mount(TableV2);
    expect(wrapper.find('.table-v2').exists()).toBeTruthy();
  });
  it('header column', () => {
    const wrapper = mount(TableV2, {
      props: {
        tableColumn: [
          { label: '商品名称', prop: 'name' },
          { label: '等级', prop: 'level' },
        ],
      },
    });
    expect(wrapper.findAll('.header-column')).toHaveLength('2');
  });
  it('header style', () => {
    const wrapper = mount(TableV2, {
      props: {
        headerCellStyle: { background: '#f5f7fa', color: '#909399' },
      },
    });
    expect(wrapper.find('.table-header').element.style.background).toBeTruthy();
  });
  it('table text algin', () => {
    const wrapper = mount(TableV2, {
      props: {
        tableColumn: [
          { label: '商品名称', prop: 'name', align: 'left' },
          { label: '等级', prop: 'level' },
        ],
      },
    });
    expect(wrapper.find('.header-column').classes()).toContain('text-center');
  });
});
