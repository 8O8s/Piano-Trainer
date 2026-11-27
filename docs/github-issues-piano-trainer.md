# GitHub Issues – Piano-Trainer 

So verwendest du diese Datei:
1. Auf GitHub im Repo: **Issues → New issue**.
2. Den **Titel** (Zeile nach «Titel:») ins Titelfeld kopieren.
3. Alles unter «Beschreibung» ins Beschreibungsfeld kopieren.
4. Rechts das **Label** setzen (beim ersten Mal unter «Labels» neu anlegen: `feature`, `setup`).
5. In dieser Reihenfolge anlegen, dann erhalten die Issues die Nummern #1–#8.

Beim Commit dann z. B. `feat: Katalog lädt Songs aus MongoDB (closes #2)` → das Issue wird beim Push automatisch geschlossen.

---

## Issue 1

**Titel:** Layout und Navbar nach Mockup
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r möchte ich auf jeder Seite dieselbe Navigation sehen, damit ich mich in der App jederzeit zurechtfinde.

**Akzeptanzkriterien**
- [ ] Auf jeder Seite ist oben eine Navbar mit Logo, «Katalog» und «Import» sichtbar, gleich wie im Figma-Mockup.
- [ ] Ein Klick auf das Logo führt zur Startseite `/`.
- [ ] Ein Klick auf «Katalog» führt zu `/katalog`, ein Klick auf «Import» zu `/import`.
- [ ] Der aktuell geöffnete Bereich ist in der Navbar hervorgehoben.
- [ ] Für jede Route existiert eine leere Platzhalterseite mit Überschrift.
- [ ] Die Navbar ist eine eigene Komponente in `src/lib/components/`.

**Hinweise**
Referenz: Figma-Mockup (Link im README). Visuelles Design: Serifenschrift, cremefarbene Navbar, Grün für Hauptaktionen.

---

## Issue 2

**Titel:** Katalog zeigt Songs aus MongoDB
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r möchte ich alle meine Songs in einer Liste sehen, damit ich schnell den Song finde, den ich üben will.

**Akzeptanzkriterien**
- [ ] `src/lib/server/db.js` stellt eine Verbindung zur Datenbank `piano-trainer` her (Connection-String aus `DB_URI`) und enthält `getSongs()`.
- [ ] `/katalog` lädt die Songs über `+page.server.js` und zeigt pro Song Titel und Komponist/Interpret.
- [ ] Jeder Eintrag hat einen grünen Button «Üben», der zu `/songs/[id]` führt.
- [ ] Sind keine Songs vorhanden, erscheint der Hinweis «Noch keine Songs – importiere deine erste MIDI-Datei» mit Link zu `/import`.
- [ ] Ist die Datenbank nicht erreichbar, erscheint eine verständliche Fehlermeldung statt eines Absturzes.
- [ ] Ein Test-Song (gemeinfreies Stück) ist in Atlas von Hand angelegt und erscheint in der Liste.

---

## Issue 3

**Titel:** Deployment auf Netlify einrichten
**Label:** `setup`

### Beschreibung

**User Story**
Als Entwickler möchte ich die App früh online bereitstellen, damit ich Deployment-Probleme lange vor der Evaluation in Woche 14 erkenne.

**Akzeptanzkriterien**
- [ ] `@sveltejs/adapter-netlify` ist installiert und in `vite.config.js` konfiguriert (gemäss Tutorial Woche 7).
- [ ] `.netlify` und `/build` stehen in `.gitignore`.
- [ ] Auf Netlify ist die Umgebungsvariable `DB_URI` gesetzt.
- [ ] Die App ist unter einer öffentlichen Netlify-URL erreichbar, und `/katalog` zeigt den Test-Song aus der Datenbank.
- [ ] Jeder Push auf `main` löst automatisch ein neues Deployment aus.
- [ ] Die URL steht im README unter «Aktuelle App».

---

## Issue 4

**Titel:** MIDI-Datei importieren und Etappen erzeugen
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r möchte ich die MIDI-Datei meines Lieblingsstücks hochladen, damit ich genau dieses Stück lernen kann, auch wenn es in keiner Lern-App vorhanden ist.

**Akzeptanzkriterien**
- [ ] Auf `/import` kann eine Datei per Dateiauswahl hochgeladen werden.
- [ ] Nur `.mid`- und `.midi`-Dateien werden akzeptiert; bei anderen Dateien erscheint «Bitte wähle eine MIDI-Datei (.mid oder .midi)».
- [ ] Ist die Datei beschädigt oder enthält sie keine Noten, erscheint eine verständliche Fehlermeldung, und es wird nichts gespeichert.
- [ ] Beim Import werden die Noten ausgelesen und der Song mit Titel (aus dem Dateinamen vorbefüllt), Noten und Erstellungsdatum in MongoDB gespeichert.
- [ ] Der Song wird automatisch in Etappen von je 4 Takten aufgeteilt; jede Etappe hat den Status «offen».
- [ ] Nach erfolgreichem Import erscheint «Song importiert», und man wird zu `/songs/[id]/bearbeiten` weitergeleitet, um Titel und Komponist zu prüfen.
- [ ] Während des Uploads ist eine Ladeanzeige sichtbar, und der Button ist deaktiviert.

**Hinweise**
Bibliothek zum Einlesen: `@tonejs/midi` (MIT). Vor dem Installieren bestätigen (Regel in AGENTS.md).

---

## Issue 5

**Titel:** Song bearbeiten und löschen
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r möchte ich Titel, Komponist und Quelle eines Songs ändern oder einen Song löschen, damit mein Katalog korrekt und übersichtlich bleibt.

**Akzeptanzkriterien**
- [ ] `/songs/[id]/bearbeiten` zeigt ein Formular mit den aktuellen Werten für Titel, Komponist/Interpret, Quelle (URL) und Lizenz.
- [ ] Der Titel ist ein Pflichtfeld; bleibt er leer, erscheint direkt beim Feld eine Fehlermeldung, und nichts wird gespeichert.
- [ ] Nach dem Speichern erscheint «Änderungen gespeichert», und die neuen Werte sind im Katalog sichtbar.
- [ ] «Song löschen» fragt zuerst nach einer Bestätigung («Diesen Song wirklich löschen? Der Lernfortschritt geht verloren.»).
- [ ] Nach dem Löschen wird man zum Katalog weitergeleitet, und der Song ist nicht mehr in der Liste.
- [ ] Im Katalog führt ein Button «Bearbeiten» pro Song zu dieser Seite.
- [ ] Eine ungültige oder nicht existierende ID führt zu einer «Song nicht gefunden»-Seite.

---

## Issue 6

**Titel:** Übungsseite mit Piano-Roll und Klaviatur
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r ohne sichere Notenkenntnisse möchte ich sehen, welche Tasten ich in einer Etappe spielen muss, damit ich das Stück Abschnitt für Abschnitt lernen kann.

**Akzeptanzkriterien**
- [ ] `/songs/[id]` zeigt den Songtitel und die Liste der Etappen (z. B. «Etappe 3 · Takt 9–12») mit ihrem Status.
- [ ] Beim Klick auf eine Etappe werden nur deren Noten in einer Piano-Roll-Ansicht angezeigt (Balken pro Note, Länge = Notendauer).
- [ ] Unter der Piano-Roll ist eine virtuelle Klaviatur; mit «Abspielen» laufen die Noten ab, und die gespielten Tasten werden hervorgehoben.
- [ ] Die Klaviatur kann mit einem Toggle ein- und ausgeblendet werden (Feedback aus dem Crazy-8s-Voting).
- [ ] Beim Öffnen der Seite wird `lastPracticedAt` des Songs aktualisiert.
- [ ] Piano-Roll und Klaviatur sind eigene Komponenten in `src/lib/components/`.

**Hinweise**
Bewusste Abweichung vom Mockup (Piano-Roll statt Notenblatt): Begründung in README Kap. 3.4.1 festhalten.

---

## Issue 7

**Titel:** Etappen-Status setzen und Fortschritt anzeigen
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r ohne Lehrperson möchte ich markieren, welche Etappen ich schon kann, damit ich sehe, wo ich stehe und was ich noch üben muss.

**Akzeptanzkriterien**
- [ ] Auf der Übungsseite kann der Status jeder Etappe auf «offen», «am Üben» oder «kann ich» gesetzt werden; die Änderung wird in MongoDB gespeichert.
- [ ] Die drei Status sind farblich unterscheidbar und zusätzlich mit Text beschriftet (nicht nur über die Farbe).
- [ ] Nach dem Setzen auf «kann ich» wird automatisch die nächste offene Etappe ausgewählt.
- [ ] Sind alle Etappen auf «kann ich», erscheint die Meldung «Geschafft! Du kannst den ganzen Song.»
- [ ] Im Katalog zeigt jeder Song einen Fortschrittsbalken mit «x von y Etappen».
- [ ] Nach einem Neuladen der Seite ist der Status unverändert.

---

## Issue 8

**Titel:** Startseite «Weiter lernen» mit Drag-&-Drop-Import
**Label:** `feature`

### Beschreibung

**User Story**
Als Lernende:r möchte ich beim Öffnen der App direkt meine zuletzt geübten Songs sehen, damit ich mit einem Klick weiterüben kann.

**Akzeptanzkriterien**
- [ ] Die Startseite zeigt unter «Weiter lernen» die bis zu 3 zuletzt geübten Songs als Kacheln (sortiert nach `lastPracticedAt`).
- [ ] Jede Kachel zeigt Titel, Komponist und Fortschritt und führt per Klick zu `/songs/[id]`.
- [ ] Wurde noch kein Song geübt, erscheint ein einladender Hinweis statt leerer Kacheln.
- [ ] Unter den Kacheln gibt es ein Feld, in das eine MIDI-Datei hineingezogen werden kann; es nutzt denselben Import wie `/import` (inkl. Prüfung und Fehlermeldungen).
- [ ] Beim Darüberziehen einer Datei verändert sich das Feld sichtbar (z. B. Rahmenfarbe).
