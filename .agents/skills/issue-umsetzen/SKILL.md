---
name: issue-umsetzen
description: Setzt ein GitHub-Issue des Piano-Trainers um – vom Lesen des Issues über einen eigenen Branch bis zum Pull Request mit Entwurf für das KI-Log. Verwenden, wenn ein Issue umgesetzt, ein Feature gebaut oder ein Bug aus einem Issue behoben werden soll (z. B. «Setze Issue #2 um»).
---

# Issue umsetzen

Ablauf: **Issue → Branch → Plan → Umsetzung → Selbstprüfung → PR → KI-Log-Entwurf → Stopp.**
Prüfen und Mergen macht immer der Mensch. Halte dich zusätzlich an alle Regeln in `AGENTS.md`.

## 1. Issue verstehen
- Issue lesen: `gh issue view <nr>`.
- Sind Ziel, Akzeptanzkriterien oder Umfang unklar: höchstens drei Rückfragen stellen und auf Antwort warten.
- Ist das Issue bereits geschlossen oder gibt es schon einen offenen PR dazu (`gh pr list`): melden und nicht weitermachen.

## 2. Sauber starten
- `git status` muss sauber sein. Gibt es uncommittete Änderungen: melden und warten, nichts verwerfen.
- `git checkout main && git pull`
- Branch anlegen: `git checkout -b <typ>/<nr>-<kurzname>`
  - `<typ>`: `feat` (Funktion), `fix` (Fehler), `docs` (Dokumentation), `chore` (Einrichtung)
  - Beispiel: `feat/2-katalog-mongodb`

## 3. Plan zeigen und auf Freigabe warten
Vor jeder Code-Änderung einen kurzen Plan zeigen:
- welche Dateien neu entstehen oder geändert werden,
- wie jedes Akzeptanzkriterium erfüllt wird,
- welche Annahmen getroffen werden,
- ob neue Pakete nötig sind (mit Name, Zweck und Lizenz).

**Nicht mit der Umsetzung beginnen, bevor der Plan bestätigt ist.**

## 4. Umsetzen
- In kleinen Schritten arbeiten; nur ändern, was zum Issue gehört.
- Nach jedem funktionierenden Schritt committen (Conventional Commits mit Issue-Nummer), z. B.
  `feat: Katalog lädt Songs aus MongoDB (#2)`
- Läuft etwas in die falsche Richtung oder ist ein Kriterium so nicht umsetzbar: anhalten und nachfragen statt improvisieren.

## 5. Selbst prüfen
- `npm run build` muss ohne Fehler durchlaufen. Falls vorhanden, zusätzlich `npm run check` und `npm run test`.
- Für **jedes** Akzeptanzkriterium festhalten: erfüllt / nicht erfüllt und wie geprüft.
- Eine kurze Liste erstellen, was der Mensch im Browser von Hand testen soll (konkrete Schritte, inkl. Randfälle wie leere Liste, falsche Eingabe, ungültige ID).

## 6. Pull Request erstellen
- `git push -u origin <branch>`
- `gh pr create --base main --title "<Issue-Titel>" --body-file <datei>` mit diesem Aufbau:

```markdown
Closes #<nr>

## Was wurde gemacht
- …

## Akzeptanzkriterien
- [x] … (wie geprüft)
- [ ] … (nicht erfüllt / offen – Grund)

## Bitte von Hand testen
1. …

## Hinweise
Neue Pakete, Abweichungen vom Mockup, offene Fragen – oder «Keine».
```

## 7. Entwurf für das KI-Log
Einen Zeilenentwurf für `docs/ki-einsatz.md` **im Chat zeigen, nicht selbst eintragen**:

```markdown
| <Datum> | <Tool / Modell> | Issue #<nr> umgesetzt (Skill issue-umsetzen): <1 Satz> | Agent: <was gut lief / welche Fehler auftraten und wie korrigiert>. Eigene Prüfung: _[vom Menschen auszufüllen]_ |
```

Ehrlich festhalten, wenn etwas nicht funktioniert hat oder Rückfragen nötig waren.

## 8. Stopp
- Den PR-Link nennen und kurz zusammenfassen, was zu prüfen ist.
- **Niemals** selbst mergen, `git push --force` verwenden, Issues manuell schliessen oder `main` direkt ändern.
- Nächste Schritte des Menschen: PR prüfen → lokal testen → `gh pr merge <nr> --squash --delete-branch` → `git checkout main && git pull` → KI-Log-Eintrag ergänzen.
