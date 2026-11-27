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
| 27.11.2026 | Claude (claude.ai) | Entwurf eines Agent-Skills `issue-umsetzen`, der den Ablauf Issue → Branch → Plan → Umsetzung → PR → KI-Log-Entwurf festlegt | Vorgabe von mir: Prüfen und Mergen bleiben beim Menschen, der Agent schreibt nur einen Entwurf fürs KI-Log. Entwurf geprüft und selbst angepasst: [z. B. Branch-Namen geändert, Schritt X ergänzt, Regel Y gestrichen, weil …]. |
| 27.11.2026 | Claude Code (Opus 5.5, VS Code) | Skill im Repo eingerichtet: `.agents/skills/issue-umsetzen/`, Symlink für `.claude/skills/`, Verweis in AGENTS.md; Branch + PR #11 | Plan vor der Umsetzung geprüft und freigegeben. PR unter «Files changed» kontrolliert und selbst gemergt. |
