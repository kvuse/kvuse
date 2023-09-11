import { shallowMount } from '@vue/test-utils';
import {
  describe, expect, it,
} from 'vitest';
import demo from './demo.vue';

describe('VParams', () => {
  it('test default value', async () => {
    const wrapper = shallowMount(demo);
    expect(wrapper.get('.text').text()).toBe('-');
    await wrapper.find('.btn').trigger('click');
    expect(wrapper.get('.text').text()).toBe('updated');
  });
  it('test number params', async () => {
    const wrapper = shallowMount(demo);
    expect(wrapper.get('.number').text()).toBe('0');
    await wrapper.find('.btn').trigger('click');
    expect(wrapper.get('.number').text()).toBe('2');
  });
  it('test money params', async () => {
    const wrapper = shallowMount(demo);
    expect(wrapper.get('.money').text()).toBe('￥0.00');
    await wrapper.find('.btn').trigger('click');
    expect(wrapper.get('.money').text()).toBe('￥123.45');
  });
});
