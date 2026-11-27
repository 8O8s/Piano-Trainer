# KI-Einsatz – Laufendes Log

Grundlage für Kapitel 6 «KI-Deklaration» der README.

| Datum | Tool / Modell | Aufgabe | Ergebnis & eigene Prüfung |
|---|---|---|---|
| 25.11.2026 | Claude (claude.ai) | Anforderungen und Übungsblätter analysiert; README-Vorlage mit Inhalten aus Übung 8–10 vorbefüllt | Inhalte stammen aus meinen eigenen Übungsabgaben; Struktur mit der Moodle-Vorlage abgeglichen; TODOs selbst abzuarbeiten |

| 25.11.2026 | GitHub Copilot (Agent-Modus) | `/init` → Instruktionsdatei erzeugt; danach Verschieben nach AGENTS.md inkl. Link-Anpassung | Erster Versuch (`git mv`) schlug fehl, da Datei untracked; Agent korrigierte selbst mit `mv` und prüfte die Links. Abschnitte Product/Stack/Rules von Hand ergänzt. |

| 25.11.2026 | Claude (claude.ai) | Abschnitte Product / Planned stack / Rules für AGENTS.md vorgeschlagen | Von mir durchgelesen, angepasst (…) und übernommen |
| 27.11.2026 | Claude | Issue-Texte #1–#8 (User Stories, Akzeptanzkriterien, Hinweise) für GitHub vorgeschlagen (`github-issues-piano-trainer.md`) | Von mir durchgelesen, mit Mockup und Projektzielen abgeglichen und als GitHub-Issues übernommen |
| 27.11.2026 | Claude Code (Opus 5.5, VS Code) | Issue #1 umgesetzt: Navbar-Komponente, Layout und Platzhalterseiten `/`, `/katalog`, `/import` nach Figma-Mockup | Zuerst Plan angefordert; Plan korrigiert: Optimierung für iPads/Tablets ergänzt (Touch-Ziele ≥ 44 px, Safe-Area, kein Hover-Zwang). Darstellung im Browser selbst mit Mockup verglichen: keine Fehler gefunden |
| 27.11.2026 | Claude Code (Opus 5.5, VS Code) | Feature-Branch `feat/navbar` für Issue #1 erstellt, gepusht und Pull Request #9 eröffnet (via GitHub CLI) | PR vor dem Merge von mir geprüft (Änderungen durchgesehen) und lokal getestet |
| 27.11.2026 | Claude Code (Opus 5.5, VS Code) | Issue #2 umgesetzt (Skill issue-umsetzen): Katalog lädt Songs über `src/lib/server/db.js` aus MongoDB und zeigt sie mit «Üben»-Button, Leer- und Fehlerzustand | Agent: Start zunächst blockiert, da `git status` nicht sauber war (eigene Änderungen an SKILL.md/KI-Log) → auf eigenen Branch/PR #12 ausgelagert. Erster Testlauf scheiterte an falschem Log-Pfad, zweiter Lauf ok; Akzentgrün wegen zu geringem Kontrast abgedunkelt. Test-Song in Atlas muss von Hand angelegt werden. Eigene Prüfung: _[vom Menschen auszufüllen]_ |
