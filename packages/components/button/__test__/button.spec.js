import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ElButton } from 'element-plus';
import Button from '../main.vue';

describe('Button.vue', () => {
  it('slots', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: '测试',
      },
      global: {
        components: { ElButton },
      },
    });
    expect(wrapper.html()).toContain('测试');
  });
  it('border button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        border: true,
      },
      slots: {
        default: '测试',
      },
      global: {
        components: { ElButton },
      },
    });
    const btnComponent = wrapper.getComponent(Button);
    expect(btnComponent.props('border')).toBe(true);
  });
  it('button click', async () => {
    const wrapper = mount(Button, {
      global: {
        components: { ElButton },
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });
});
