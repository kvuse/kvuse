import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';
import {
  describe, expect, beforeEach, it,
} from 'vitest';

import { vOnClickActive } from '../onClickActive';

const App = defineComponent({
  template:
  `<template>
        <div class="class-item"
        v-on-click-active="{ activeName:'active-item' }"
        >
          测试
        </div>
    </template>
  `,
});

describe('onClickActive', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        directives: {
          'on-click-active': vOnClickActive,
        },
      },
    });
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
});
