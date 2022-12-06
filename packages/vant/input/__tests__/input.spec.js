import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import KvInput from '../index';

describe('Vant KvInput', () => {
  it('create', () => {
    const wrapper = mount(KvInput);
    expect(wrapper.find('input')).toBeDefined();
  });
  it('modelValue', async () => {
    const wrapper = mount(KvInput, {
      props: { modelValue: 2 },
    });
    expect(wrapper.find('input').element.value).toBe('2');
    await wrapper.setProps({ modelValue: 23 });
    expect(wrapper.find('input').element.value).toBe('23');
  });
  it('point', async () => {
    const wrapper = mount(KvInput, {
      props: { modelValue: 2.56868, point: 3 },
    });
    expect(wrapper.find('input').element.value).toBe('2.568');
  });
  it('type', async () => {
    const wrapper = mount(KvInput, {
      props: { modelValue: '阿斯蒂芬232' },
    });
    expect(wrapper.find('input').element.value).toBe('232');
    await wrapper.setProps({ type: 'text', modelValue: '阿斯蒂芬23sdff' });
    expect(wrapper.find('input').element.value).toBe('阿斯蒂芬23sdff');
  });
  it('prefix and suffix', async () => {
    const wrapper = mount(KvInput, {
      props: { modelValue: 12, prefix: '￥', suffix: '元' },
    });
    expect(wrapper.text()).toBe('￥元');
  });
});
