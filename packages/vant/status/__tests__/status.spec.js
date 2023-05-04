import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import KvList from '../index';

describe('Vant KvList', () => {
  it('create', () => {
    const wrapper = mount(KvList);
    expect(wrapper.find('.kv-status')).toBeDefined();
  });
  it('props slots', () => {
    const wrapper = mount(KvList, {
      slots: {
        default: '暂无数据',
      },
    });
    expect(wrapper.find('.status-text').text()).toBe('暂无数据');
  });
});
