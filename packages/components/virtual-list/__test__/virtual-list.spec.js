import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import VirtualList from '../main.vue';

describe('Virtual-list.vue', () => {
  it('create', () => {
    const wrapper = mount(VirtualList);
    expect(wrapper.find('.virtual-list').exists()).toBeTruthy();
  });
  it('props data', () => {
    const wrapper = mount(VirtualList, {
      props: {
        data: [1, 2, 3, 4, 5, 6],
      },
    });
    expect(wrapper.findAll('.list-item')).toHaveLength(6);
  });
  it('props rowClassName', () => {
    const wrapper = mount(VirtualList, {
      props: {
        data: [1, 2],
        rowClassName: 'row-class',
      },
    });
    expect(wrapper.findAll('.row-class')).toHaveLength(2);
  });
});
