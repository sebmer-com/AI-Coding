import { useEffect, useState, type FormEvent } from 'react';
import { createRequest, loadRequests, saveRequests, updateStatus, validateTitle, STATUSES, type Request, type Status } from './lib/requests';
import { t } from './labels';

export default function App() {
  const [items, setItems] = useState<Request[]>(() => loadRequests(window.localStorage));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => saveRequests(items, window.localStorage), [items]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const problem = validateTitle(title);
    if (problem) {
      setError(problem === 'empty' ? t.errEmpty : t.errLong);
      return;
    }
    setItems((list) => createRequest(list, title, description));
    setTitle('');
    setDescription('');
    setError(null);
  }

  return (
    <main>
      <h1>{t.appTitle}</h1>
      <form className="card" onSubmit={onSubmit} noValidate>
        <h2>{t.newTitle}</h2>
        <label htmlFor="title">{t.title} *</label>
        <input id="title" value={title} placeholder={t.titlePh} onChange={(e) => setTitle(e.target.value)} aria-invalid={!!error} aria-describedby="title-error" />
        {error && <p id="title-error" role="alert" className="error">{error}</p>}
        <label htmlFor="description">{t.description}</label>
        <textarea id="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">{t.save}</button>
      </form>
      <section className="card" aria-labelledby="list-title">
        <h2 id="list-title">{t.listTitle}</h2>
        {items.length === 0 ? (
          <p className="empty">{t.empty}</p>
        ) : (
          <ul data-testid="request-list">
            {items.map((r) => (
              <li key={r.id} className={`row ${r.status}`}>
                <span className="title">{r.title}</span>
                <select aria-label={`${t.statusLabel} ${r.title}`} value={r.status} onChange={(e) => setItems((list) => updateStatus(list, r.id, e.target.value as Status))}>
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{t.status[s]}</option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
