import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CollapseButton from '../main.vue';

describe('collapse-button.vue', () => {
  it('create', () => {
    const wrapper = mount(CollapseButton);
    expect(wrapper.find('.collapse-button').exists()).toBeTruthy();
  });
  it('get parentNode', () => {
    document.body.innerHTML = `
    <div id="app" class="collapse-parent">
    <div>测试</div>
    </div>
    `;
    const wrapper = mount(CollapseButton, {
      attachTo: document.getElementById('app'),
    });
    expect(wrapper.find('.collapse-button').element.parentNode).toBeTruthy();
  });
  it('set slot', () => {
    const wrapper = mount(CollapseButton, {
      slots: {
        default: '12345',
      },
    });
    expect(wrapper.find('.collapse-button').text()).toBe('12345');
  });
});
