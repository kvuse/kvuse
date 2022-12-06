import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import KvTable from '../index';

describe('Vant KvTable', () => {
  it('create', () => {
    const wrapper = mount(KvTable);
    expect(wrapper.classes()).toContain('k-table');
  });
  it('props align', async () => {
    const wrapper = mount(KvTable);
    expect(wrapper.find('.body-item').attributes().style).toEqual('text-align: left;');
    await wrapper.setProps({ align: 'center' });
    expect(wrapper.find('.body-item').attributes().style).toEqual('text-align: center;');
  });
  it('props columns', () => {
    const wrapper = mount(KvTable);
    expect(wrapper.findAll('.column-item')).toHaveLength(3);
  });
});
