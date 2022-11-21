import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { ElIcon, ElInput } from 'element-plus';
import { nextTick } from 'vue';
import KInputNumber from '../main.vue';

describe('KInputNumber.vue', () => {
  const wrapper = mount(KInputNumber, {
    props: {
      modelValue: 2,
    },
    global: {
      components: { ElIcon, ElInput },
    },
  });
  it('create', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
  it('modelvalue', async () => {
    expect(wrapper.find('input').element.value).toBe('2');
    await wrapper.setProps({ modelValue: 20 });
    expect(wrapper.find('input').element.value).toBe('20');
  });
  it('add reduce number', async () => {
    await wrapper.setProps({ modelValue: 2 });
    const increase = wrapper.find('.el-input-number__increase');
    await increase.trigger('click');
    await nextTick();
    expect(wrapper.find('input').element.value).toBe('3');
    const decrease = wrapper.find('.el-input-number__decrease');
    await decrease.trigger('click');
    await decrease.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.find('input').element.value).toBe('1');
  });
  it('set max and min value', async () => {
    await wrapper.setProps({ modelValue: 10000000 });
    await wrapper.find('input').trigger('change');
    await nextTick();
    expect(wrapper.find('input').element.value).toBe('999999');
    await wrapper.setProps({ modelValue: 0 });
    await wrapper.find('input').trigger('change');
    expect(wrapper.find('input').element.value).toBe('1');
  });
});
