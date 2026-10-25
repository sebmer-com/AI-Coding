export type Status = 'open' | 'doing' | 'done';

export interface Request {
  id: string;
  title: string;
  description: string;
  status: Status;
  createdAt: string;
}

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export const STATUSES: Status[] = ['open', 'doing', 'done'];
export const MAX_TITLE = 120;
const KEY = 'requests-v1';

export function normalizeStatus(value: unknown): Status {
  return STATUSES.includes(value as Status) ? (value as Status) : 'open';
}

export type TitleError = 'empty' | 'too_long' | null;

export function validateTitle(title: string): TitleError {
  const t = title.trim();
  if (!t) return 'empty';
  if (t.length > MAX_TITLE) return 'too_long';
  return null;
}

export function createRequest(list: Request[], title: string, description = '', now = new Date()): Request[] {
  const error = validateTitle(title);
  if (error) throw new Error(error);
  const item: Request = {
    id: `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    title: title.trim(),
    description: description.trim(),
    status: 'open',
    createdAt: now.toISOString(),
  };
  return [item, ...list];
}

export function updateStatus(list: Request[], id: string, status: Status): Request[] {
  return list.map((r) => (r.id === id ? { ...r, status: normalizeStatus(status) } : r));
}

export type StatusFilter = Status | 'all';
export const FILTERS: StatusFilter[] = ['all', ...STATUSES];

export function filterRequests(list: Request[], filter: StatusFilter): Request[] {
  return filter === 'all' ? list : list.filter((r) => r.status === filter);
}

export function countByStatus(list: Request[]): Record<StatusFilter, number> {
  const counts: Record<StatusFilter, number> = { all: list.length, open: 0, doing: 0, done: 0 };
  for (const r of list) counts[r.status] += 1;
  return counts;
}

export function loadRequests(store: KeyValueStore): Request[] {
  try {
    const raw = JSON.parse(store.getItem(KEY) ?? '[]');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((r) => r && typeof r.title === 'string' && typeof r.id === 'string')
      .map((r) => ({ ...r, description: String(r.description ?? ''), status: normalizeStatus(r.status) }));
  } catch {
    return [];
  }
}

export function saveRequests(list: Request[], store: KeyValueStore): void {
  store.setItem(KEY, JSON.stringify(list));
}
