import { describe, it, expect } from 'vitest';
import { useUtils } from '../index';

describe('useUtils', () => {
  it('getFormatParams', () => {
    const { getFormatParams } = useUtils();
    expect(getFormatParams(null)).toBe(0);
    expect(getFormatParams(null, '-')).toBe('-');
    expect(getFormatParams(20)).toBe(20);
  });
  it('formatRadixPoint', () => {
    const { formatRadixPoint } = useUtils();
    expect(formatRadixPoint('20')).toBe('20');
    expect(formatRadixPoint('20.26555')).toBe('20.26');
    expect(formatRadixPoint('20.26555', 3)).toBe('20.265');
  });
  it('setUrlParams', () => {
    const { setUrlParams } = useUtils();
    expect(setUrlParams()).toBe('');
    expect(setUrlParams({ foo: 'bar' })).toBe('?foo=bar');
    expect(setUrlParams({ foo: 'bar', bar: 'foo' })).toBe('?foo=bar&bar=foo');
  });
});
