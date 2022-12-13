import {
  describe, it, expect,
} from 'vitest';
import { mount } from '@vue/test-utils';
import KvTree from '../index';

describe('Vant KvTree', () => {
  it('create', () => {
    const wrapper = mount(KvTree);
    expect(wrapper.classes()).toContain('k-tree');
  });
  it('props modelValue', () => {
    const wrapper = mount(KvTree, {
      props: { modelValue: [{ id: 1, name: 121 }] },
    });
    expect(wrapper.findAll('.tree-item')).toHaveLength(1);
  });
});
