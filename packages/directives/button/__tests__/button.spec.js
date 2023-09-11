import { shallowMount } from '@vue/test-utils';
import {
  describe, it, expect,
} from 'vitest';
import demo from './demo.vue';

describe('vButton', () => {
  it('has input', async () => {
    const wrapper = shallowMount(demo);
    expect(wrapper.find('input')).toBeDefined();
  });
});
