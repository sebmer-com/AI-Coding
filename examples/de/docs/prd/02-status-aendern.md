# PRD 02: Status ändern

**Ziel:** Wer eine Anfrage übernimmt oder erledigt, ändert den Status mit einem Klick.

**Verhalten:** Jede Zeile zeigt den Status als Text und Farbe. Ein Auswahlfeld wechselt zwischen „offen“, „in Arbeit“ und „erledigt“. Die Änderung bleibt nach Neuladen erhalten.

**Nicht-Ziele:** Verlauf der Statusänderungen, Kommentare.

## Akzeptanzkriterien

- [ ] **Normalfall:** Status von „offen“ auf „in Arbeit“ setzen; nach Neuladen steht weiterhin „in Arbeit“.
- [ ] **Fehler:** Ein unbekannter Status aus dem Speicher (z. B. `"archiviert"`) wird als „offen“ angezeigt, nicht als Absturz.
- [ ] **Grenzfall:** Bei 200 Anfragen bleibt die Liste bedienbar (unter 1 Sekunde bis zur Anzeige).
