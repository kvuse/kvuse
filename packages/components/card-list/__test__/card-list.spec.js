import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ElScrollbar } from 'element-plus';
import CardList from '../main.vue';

describe('CardList.vue', () => {
  it('create', () => {
    const wrapper = mount(CardList, {
      global: {
        components: { ElScrollbar },
      },
    });
    expect(wrapper.attributes('data-test')).toBe('card-list');
  });
  it('props data', () => {
    const wrapper = mount(CardList, {
      props: {
        data: [1, 2, 3, 4],
      },
      global: {
        components: { ElScrollbar },
      },
    });
    expect(wrapper.findAll('.card-row')).toHaveLength(4);
  });
  it('event click', async () => {
    const wrapper = mount(CardList, {
      props: {
        data: [
          { name: 1, id: 1 },
          { name: 2, id: 2 },
          { name: 3, id: 3 },
          { name: 4, id: 4 },
        ],
        highlight: true,
      },
      global: {
        components: { ElScrollbar },
      },
    });
    await wrapper.find('.card-row').trigger('click');
    expect(wrapper.find('.select-style').exists()).toBe(true);
  });
});
