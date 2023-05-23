import { describe, it, expect } from 'vitest';
import { useExport } from '../index';

describe('useUtils', () => {
  it('isExportEmpty', () => {
    const { isExportEmpty } = useExport();
    expect(isExportEmpty()).toBe(false);
  });
});
