import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import KvDatePicker from '../index';

describe('DatePicker.vue', () => {
  it('create', () => {
    const wrapper = mount(KvDatePicker);
    expect(wrapper.classes()).toContain('k-date-picker');
  });
});
