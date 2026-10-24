import { describe, expect, it } from 'vitest';
import { createRequest, loadRequests, normalizeStatus, saveRequests, updateStatus, validateTitle } from './requests';

function memoryStore() {
  const data = new Map<string, string>();
  return { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => void data.set(k, v) };
}

describe('validateTitle', () => {
  it('rejects empty and whitespace-only titles', () => {
    expect(validateTitle('')).toBe('empty');
    expect(validateTitle('   ')).toBe('empty');
  });
  it('rejects titles longer than 120 characters', () => {
    expect(validateTitle('x'.repeat(121))).toBe('too_long');
    expect(validateTitle('x'.repeat(120))).toBeNull();
  });
});

describe('createRequest', () => {
  it('puts a new request with status open at the top', () => {
    const first = createRequest([], 'A');
    const list = createRequest(first, '  B  ');
    expect(list).toHaveLength(2);
    expect(list[0].title).toBe('B');
    expect(list[0].status).toBe('open');
  });
  it('throws on an invalid title', () => {
    expect(() => createRequest([], ' ')).toThrow('empty');
  });
});

describe('status', () => {
  it('normalizes unknown values to open', () => {
    expect(normalizeStatus('archived')).toBe('open');
    expect(normalizeStatus('done')).toBe('done');
  });
  it('persists a changed status', () => {
    const store = memoryStore();
    const list = createRequest([], 'A');
    saveRequests(updateStatus(list, list[0].id, 'doing'), store);
    expect(loadRequests(store)[0].status).toBe('doing');
  });
  it('survives broken storage', () => {
    const store = memoryStore();
    store.setItem('requests-v1', '{not json');
    expect(loadRequests(store)).toEqual([]);
  });
});
