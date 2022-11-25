import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import KButton from '../index';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(KButton);
    expect(wrapper.classes()).toContain('van-button');
  });
  it('text', () => {
    const wrapper = mount(KButton, {
      props: {
        type: 'text',
      },
    });
    expect(wrapper.classes()).toContain('van-button--text');
  });
  it('click', async () => {
    const wrapper = mount(KButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });
});
