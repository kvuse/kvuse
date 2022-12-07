import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NumberKeyboard from '../main.vue';

describe('NumberKeyboard.vue', () => {
  it('create', () => {
    const wrapper = mount(NumberKeyboard);
    expect(wrapper.classes()).toContain('number-keyboard');
  });
  it('modelValue', async () => {
    const wrapper = mount(NumberKeyboard, {
      props: { modelValue: 10 },
    });
    expect(wrapper.vm.numberVal).toBe(10);
    await wrapper.setProps({ modelValue: 0.236, precision: 3 });
    expect(wrapper.vm.numberVal).toBe(0.236);
  });
  it('width', () => {
    const wrapper = mount(NumberKeyboard, {
      props: { width: 100 },
    });
    expect(wrapper.vm.gridwidth).toBe('100px');
  });
  it('decimalPoint', async () => {
    const wrapper = mount(NumberKeyboard, {
      props: { decimalPoint: false },
    });
    const obj = {
      list: wrapper.vm.keyboardList,
    };
    expect(obj).toEqual({
      list: expect.not.arrayContaining([{ name: '.' }]),
    });
    await wrapper.setProps({ decimalPoint: true });
    const currentObj = {
      list: wrapper.vm.keyboardList,
    };
    expect(currentObj).toEqual({
      list: expect.arrayContaining([{ name: '.' }]),
    });
  });
  it('startZero', async () => {
    const wrapper = mount(NumberKeyboard, {
      props: { startZero: true, modelValue: '010' },
    });
    expect(wrapper.vm.numberVal).toBe('010');
  });
});
