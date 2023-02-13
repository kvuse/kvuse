import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import AutoCount from '../main.vue';

describe('Virtual-list.vue', () => {
  it('create', async () => {
    const wrapper = mount(AutoCount);
    await nextTick();
    expect(wrapper.find('.auto-counter').exists()).toBeTruthy();
  });
  it('props data', () => {
    const wrapper = mount(AutoCount, {
      props: {
        modelValue: 20,
      },
    });
    expect(wrapper.find('.span-text').text()).toBe('');
  });
});
