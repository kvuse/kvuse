import { describe, expect, it } from 'vitest';
import { useFormatParams } from '..';

const initObj = {
  index: 1,
  page: 10,
  search: '',
};

describe('useFormatParams', () => {
  it('test params', () => {
    expect(useFormatParams(initObj)).toStrictEqual({ index: 1, page: 10 });
  });
  it('test params zero', () => {
    const initZero = {
      index: 1, page: 10, search: '0', type: 0,
    };
    expect(useFormatParams(initZero)).toStrictEqual({
      index: 1, page: 10, search: '0', type: 0,
    });
  });
  it('test excludeList', () => {
    expect(useFormatParams(initObj, ['page'])).toStrictEqual({ index: 1 });
  });
});
