import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import KvList from '../index';

describe('Vant KvList', () => {
  it('create', () => {
    const wrapper = mount(KvList);
    expect(wrapper.find('.k-pull')).toBeDefined();
  });
});
