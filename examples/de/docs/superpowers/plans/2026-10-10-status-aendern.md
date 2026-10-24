# Plan: Status ändern (Beispiel eines Superpowers-Plans)

> So sieht ein Umsetzungsplan aus, den der Skill `writing-plans` aus der Spec erzeugt: kleine Schritte von wenigen Minuten, jeweils mit Datei, Test und Prüfung.

## Aufgabe 1: Typ und Normalisierung

- Datei: `src/lib/requests.ts`
- Test zuerst: `normalizeStatus("archiviert")` ergibt `"offen"`.
- Prüfen: `npm test -- requests` ist grün.
- Commit: `feat: Status normalisieren`

## Aufgabe 2: updateStatus

- Datei: `src/lib/requests.ts`
- Test zuerst: nach `updateStatus(id, "in Arbeit")` liefert `loadRequests()` den neuen Status.
- Prüfen: `npm test -- requests` ist grün.
- Commit: `feat: Status speichern`

## Aufgabe 3: Auswahlfeld in der Liste

- Datei: `src/components/StatusSelect.tsx`, `src/App.tsx`
- Test zuerst: `tests/status.spec.ts` setzt Status, lädt neu, prüft Text.
- Prüfen: `npm run test:e2e` ist grün, Browser-Check mit Agent.
- Commit: `feat: Status in der Liste ändern`
