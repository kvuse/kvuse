import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import KvButton from '../index';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(KvButton);
    expect(wrapper.classes()).toContain('van-button');
  });
  it('text', () => {
    const wrapper = mount(KvButton, {
      props: {
        type: 'text',
      },
    });
    expect(wrapper.classes()).toContain('van-button--text');
  });
  it('is-link', () => {
    const wrapper = mount(KvButton, {
      props: {
        link: true,
      },
    });
    expect(wrapper.classes()).toContain('is-link');
  });
  it('click', async () => {
    const wrapper = mount(KvButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });
});
