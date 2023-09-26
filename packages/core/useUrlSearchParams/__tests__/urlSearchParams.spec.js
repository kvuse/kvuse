import { describe, it, expect } from 'vitest';
import { useUrlSearchParams } from '../index';

describe('useUrlSearchParams', () => {
  it('useUrlSearchParams', () => {
    expect(useUrlSearchParams()).toEqual({});
    expect(useUrlSearchParams('https://www.example.com/?param1=value1&param2=value2&param3=value3')).toEqual({
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    });
  });
});
