import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import AutoCount from '../main.vue';

describe('Virtual-list.vue', () => {
  it('create', async () => {
    const wrapper = mount(AutoCount);
    await nextTick();
    await nextTick();
    expect(wrapper.find('.auto-counter').exists()).toBeTruthy();
  });
  it('props start', () => {
    const wrapper = mount(AutoCount, {
      props: {
        start: 20,
      },
    });
    expect(wrapper.find('.span-text').text()).toBe('20');
  });
  it('props prefix', () => {
    const wrapper = mount(AutoCount, {
      props: {
        prefix: '￥',
        start: 20,
      },
    });
    expect(wrapper.find('.auto-counter').text()).toBe('￥20');
  });
  it('props decimals', () => {
    const wrapper = mount(AutoCount, {
      props: {
        decimals: 2,
        start: 20,
      },
    });
    expect(wrapper.find('.span-text').text()).toBe('20.00');
  });
});
