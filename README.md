# Projektdokumentation - Piano-Trainer

<!--
  ENTWURF – vorbefüllt aus Übung 8, 9 und 10.
  Kommentare wie dieser (<!-- ... -->) werden auf GitHub NICHT angezeigt.
  Sie sind Arbeitshinweise für dich. Vor der Abgabe alle «TODO»-Kommentare abarbeiten und löschen.
  Reihenfolge, Nummerierung und Kapitelnamen NICHT verändern (Vorgabe der Dozierenden).
-->

## Projektübersicht & Zugänge

| Angabe | Inhalt |
|---|---|
| Projekttitel | Piano-Trainer |
| Verfasser/in | Hou Yün Kevin Chiu, _[Klasse]_ <!-- TODO: Klasse eintragen --> |
| GitHub-Repository | _[Link]_ <!-- TODO: Falls privat: mmeisterhans und bkuehnis als Collaborators hinzufügen --> |
| Aktuelle App | _[Netlify-Link]_ |
| Getestete Version | _[Link; Commit/Tag]_ <!-- TODO: Vor der Evaluation in Woche 14 einen Git-Tag setzen (z. B. v1.0-evaluation) und diesen Stand SEPARAT deployen (z. B. zweite Netlify-Site oder Branch-Deploy), damit er nach weiteren Änderungen noch erreichbar ist --> |
| Testzugänge | Nicht erforderlich <!-- TODO: anpassen, falls du ein Login einbaust --> |
| Figma / Referenz-Mockup | [Piano-Trainer-Mockup (Figma)](https://www.figma.com/proto/5hwMjN6AA9EB78zNbcKmln/Piano-Trainer-Mockup?node-id=1-287) <!-- TODO: prüfen, dass der Link ohne Login für alle sichtbar ist --> |
| Weitere Artefakte [Optional] | _[z. B. GitHub-Projektboard, User Journey Map als Bild in `docs/`]_ |

> **Zugriff:** Stellt sicher, dass alle Dozierenden auf das Repository, die App und die verlinkten Artefakte zugreifen können.

> **Testzugänge:** Verwendet eigens eingerichtete Testkonten mit unkritischen Daten. Bei einem öffentlichen Repository gebt ihr hier nur den vereinbarten Bereitstellungsweg an. Persönliche Passwörter, API-Schlüssel und andere Geheimnisse dürfen nicht im Repository stehen.

<!-- Zentrale Projektlinks ausschliesslich in der Projektübersicht pflegen. Spezifische Nachweise wie Codestellen oder Testprotokolle direkt im jeweiligen Fachkapitel verlinken. -->

## Inhaltsverzeichnis

[Projektübersicht & Zugänge](#projektübersicht--zugänge)

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

## 1. Ausgangslage
Viele Menschen möchten Klavier spielen lernen, um ihre eigenen Lieblingsstücke spielen zu können. Wer ohne Lehrperson lernt, stösst dabei auf mehrere Hürden. Der Problemraum liegt in den Bereichen Bildung, Freizeit und Digitalisierung.

- **Problem:**
  - Selbstlernende haben niemanden, der ihnen zeigt, wie und was sie üben sollen.
  - Motivation entsteht vor allem durch Stücke, die man selbst spielen möchte, nicht durch vorgegebene Übungsstücke. Diese Wunschstücke sind für Anfänger:innen aber oft zu schwer.
  - YouTube-Tutorials sind zum Mitschauen gemacht, nicht zum Lernen: Es gibt kein Feedback, kein Tempo pro Abschnitt und keine Noten.
  - Gute Lern-Apps (z. B. Flowkey) kosten 10–20 CHF pro Monat und haben den Wunschsong oft nicht im Katalog. Privatunterricht kostet rund 100 CHF pro Stunde.
- **Ziele:**
  - Selbstlernende können ein selbst gewähltes Stück mithilfe einer MIDI-Datei Schritt für Schritt lernen.
  - Der Lernfortschritt wird sichtbar: Was sitzt schon, was muss noch geübt werden?
  - Die Lösung ist kostenlos und unabhängig von einem fixen Song-Katalog.
- **Primäre Zielgruppe:** Selbstlernende Klavier-Anfänger:innen ohne Lehrperson, die ihre Lieblingsstücke spielen möchten, oft Studierende mit wenig Zeit und Budget.
- **Weitere Stakeholder [Optional]:** Fortgeschrittene Selbstlernende, die ein bestimmtes schweres Stück («Traumstück») erarbeiten wollen.


## 2. Lösungsidee
Der Piano-Trainer ist eine Web-App, mit der man Klavier mit den eigenen Lieblingsstücken lernt. Statt auf einen fixen, oft kostenpflichtigen Song-Katalog angewiesen zu sein, importiert man MIDI-Dateien der Stücke, die man spielen möchte. Die App zeigt dazu die Noten und eine virtuelle Klaviatur an, die die zu spielenden Tasten hervorhebt.

- **Kernfunktionalität:**
  - **Song importieren:** MIDI-Datei per Drag & Drop oder Dateiauswahl hochladen; der Song wird gespeichert und erscheint im Katalog.
  - **Katalog verwalten:** Alle importierten Songs anzeigen, Angaben (Titel, Komponist/Interpret, …) bearbeiten und Songs löschen.
  - **Song üben:** Songpage mit Notenblatt oben und Klaviatur unten.
  - **Weiter lernen:** Zuletzt geübte Songs auf der Startseite, Wiedereinstieg mit einem Klick.
  <!-- TODO: Hauptworkflow festlegen und hier klar benennen (Übung 11 verlangt EINEN klar definierten Hauptworkflow von «Start» bis «erledigt»).
       Vorschlag: «Song importieren → im Katalog öffnen → in Etappen üben → Etappe als gelernt markieren».
       Damit wäre auch dein Alleinstellungsmerkmal aus der Recherche (geführter Lernweg mit sichtbarem Fortschritt) im Prototyp enthalten. -->
- **Annahmen [Optional]:**
  - Selbstlernende bleiben motivierter, wenn sie mit ihrem Wunschstück üben statt mit vorgegebenen Übungsstücken.
  - Ein schweres Stück wird machbarer, wenn es in kleine Lernetappen zerlegt wird.
  - Sichtbarer Fortschritt ersetzt teilweise das fehlende Feedback einer Lehrperson.
- **Abgrenzung [Optional]:** _[z. B. keine Bewertung der Spieltechnik, keine Audio-Erkennung über Mikrofon, kein Benutzerkonto]_ <!-- TODO: an deinen tatsächlichen Umfang anpassen -->

## 3. Vorgehen & Artefakte
Die Durchführung erfolgt phasenbasiert in Anlehnung an einen Design Sprint (Understand & Define, Sketch, Decide, Prototype, Validate).
<!-- TODO: Alle Artefakte (Fotos, PDFs, Exporte) im Ordner docs/ ablegen und hier als Bild oder Link einbinden, z. B. ![Proto-Persona Billy](docs/01-understand/persona-billy.png) -->

### 3.1 Understand & Define
- **Zielgruppenverständnis:**
  - **Problemraumanalyse (Übung 8):** Drei Nutzergruppen mit Bedürfnissen und Herausforderungen:

    | Nutzer:innen | Bedürfnisse | Kontext / Herausforderungen |
    |---|---|---|
    | Selbstlernende Klavier-Anfänger:innen ohne Lehrperson | Eigenen Lieblingssong lernen, motivierend, in kleinen Schritten | Wunschsong fehlt in Lern-Apps; YouTube-Tutorials sind zum Mitschauen gemacht (kein Feedback, kein Tempo pro Abschnitt, keine Noten) |
    | Studierende mit wenig Zeit und Budget | Gratis lernen, kurze Übungseinheiten | Abos kosten 10–20 CHF/Monat, Privatunterricht ca. 100 CHF/Std.; Übezeit knapp und unregelmässig |
    | Fortgeschrittene Selbstlernende mit einem Traumstück | Ein schweres Stück schrittweise lernen | Stück zu schwer, kein Feedback, unklar wo die Schwierigkeiten liegen, Motivation sinkt |

  - **How Might We:**
    - Wie könnten wir Klavierspieler:innen, die sich das Spielen selbst beibringen, ihr Lieblingsstück Schritt für Schritt lernen lassen?
    - Wie könnten wir ein zu schweres Stück aus einer MIDI-Datei automatisch in kleine, machbare Lernetappen zerlegen?
    - Wie könnten wir Lernenden ohne Lehrperson sichtbar machen, welche Stellen sie schon können und welche sie noch üben müssen?
  - **Recherche:** Bestehende Lösungen wurden verglichen: Synthesia und PianoBooster (eigener MIDI-Import möglich) sowie kataloggebundene Apps wie Flowkey.
    <!-- TODO (Pluspunkte bei «Vorgehen»): kurze Vergleichstabelle der Lösungen ergänzen (MIDI-Import / geführter Lernweg / Fortschritt / Kosten) -->
  - **Proto-Personas (Übung 9):**
    - **Billy Flowers, 21**, Klavier-Anfänger ohne Lehrperson. *Umfeld:* kleines Budget, keine Lehrperson, keine Musikerfahrung. *Ziele:* Lieblingssongs und Klavier spielen können. *Aufgaben:* regelmässig üben, korrekte Technik, Musiktheorie lernen. *Frustpunkte:* Wunschsong fehlt in Lern-Apps, YouTube-Tutorials helfen nicht beim Lernen.
    - **Emilia Galloti, 29**, fortgeschrittene Pianistin. *Umfeld:* beherrscht Musiktheorie, hat bereits eine gute Technik, übt regelmässig. *Ziele:* ein Traumstück spielen, ein Stück schrittweise meistern. *Aufgaben:* regelmässig üben, Klavierstück lernen. *Frustpunkte:* Notenblätter sind nicht interaktiv, kein direktes Feedback, sinkende Motivation.
    <!-- TODO: Bilder der Personas einbinden. Übung 9 verlangt 2–3 Personas; optional eine dritte für die Gruppe «Studierende mit wenig Zeit/Budget» ergänzen.
         Ebenfalls notieren: Wo bestehen noch Unsicherheiten? Welche Annahmen werden in der Evaluation geprüft? -->
- **Wesentliche Erkenntnisse:**
  - Eigene MIDI-Dateien laden können bereits einige Programme (Synthesia, PianoBooster). Die Lücke ist also nicht der Import.
  - Keines dieser Programme macht aus der Datei einen geführten Lernweg mit Etappen und sichtbarem Fortschritt.
  - Kataloggebundene Apps wie Flowkey haben diesen Lernweg, aber nicht den gewünschten Song.
  - → Der Mehrwert des Piano-Trainers liegt in der Kombination: **eigener Song + geführter Lernweg**.

### 3.2 Sketch
- **Variantenüberblick:** Mit der Methode Crazy 8s wurden acht Varianten _[des Features / der Schritte im Flow «…»]_ skizziert. <!-- TODO: Welches Feature/welchen Flow hast du skizziert? Die acht Varianten in je einem Satz und ihre wesentlichen Unterschiede beschreiben. -->
- **Skizzen:**
  - _[Foto der Crazy 8s inkl. Dots und Kommentare]_ <!-- TODO: ![Crazy 8s](docs/02-sketch/crazy8s.jpg) -->
  - _[Foto der ausgearbeiteten Skizze (Happy Path)]_ <!-- TODO: ![Ausgearbeitete Skizze](docs/02-sketch/skizze.jpg) -->
  - **Feedback aus dem Peer-Dot-Voting:**
    - Das Drag-&-Drop-Feld soll auf die Startseite.
    - Auf der Übungsseite soll die Klaviatur ein- und ausgeblendet werden können (Toggle).
    - Die Song-Komponenten auf der Startseite seien überflüssig.

### 3.3 Decide
- **Gewählte Variante & Begründung:**
  - Gewählt wurde Variante _[Nr./Name]_, weil _[…]_. <!-- TODO -->
  - Umgang mit dem Feedback: Das Drag-&-Drop-Feld wurde auf die Startseite verschoben, und auf der Übungsseite wurde ein Toggle für die Klaviatur vorgesehen. Die Song-Kacheln auf der Startseite wurden **trotz** Feedback beibehalten, weil das Weiterüben eines angefangenen Songs die häufigste Aufgabe ist und die Kacheln den Wiedereinstieg mit einem Klick ermöglichen.
  - **Entscheidkriterien:** _[z. B. Anzahl Dots, Abdeckung des Hauptworkflows, Klicks bis zum Ziel, Umsetzbarkeit mit SvelteKit]_
  <!-- TODO (wichtig für die 15 Punkte «Vorgehen»): Kriterien explizit nennen. Ideal: kleine Bewertungstabelle (Varianten × Kriterien) bzw. Nutzwertanalyse. -->
- **End-to-End-Ablauf:** User Journey Map (SOLL) «Song importieren und spielen»:

  | | 1) MIDI-Datei herunterladen | 2) MIDI-Datei einfügen | 3) Song im Katalog anklicken | 4) Spielen |
  |---|---|---|---|---|
  | **Ziel** | MIDI-Datei des gewünschten Songs herunterladen | Per Drag & Drop oder Dateiauswahl importieren | Den importierten Song in der Liste anklicken | Übersichtliche Lernumgebung für den Song |
  | **Aktionen** | MIDI-Datei herunterladen → Anwendung öffnen | Datei einfügen → warten, bis sie hochgeladen ist | Katalog → Song anklicken | Gewünschte Einstellungen vornehmen |
  | **Touchpoints** | Internet, Browser | Import-Page | Katalog-Page | Übungs-Page |
  | **Emotion** | Glücklich | «Das ist einfach» | Klarheit | Glücklich |
  | **Risiko** | Keine MIDI-Datei gefunden | Datei kann nicht importiert werden | Falscher Song angeklickt | Falsche Einstellungen |
  | **Mitigation** | Hinweis, wo man MIDI-Dateien findet | MIDI-Format verlangen, klare Fehlermeldung | Klare Übersicht der Songs | Nutzerfreundliches UI |

  <!-- TODO: Bild der Original-Map einbinden. Falls Etappen/Fortschritt Teil des Hauptworkflows werden: Journey um einen Schritt «Etappe abschliessen» ergänzen. -->
- **Mockup:** Link siehe «Figma / Referenz-Mockup» in der [Projektübersicht](#projektübersicht--zugänge). Das Mockup wurde in Figma ohne KI-Funktionen erstellt und ist klickbar (Navbar, Song-Kacheln und «Üben»-Buttons sind verlinkt).

  | Page | Inhalt / Zweck |
  |---|---|
  | Landing Page | Bereich «Weiter lernen» mit den zuletzt geübten Songs als Kacheln, Drag-&-Drop-Feld für den MIDI-Import |
  | Katalog | Liste aller importierten Songs (Titel – Interpret/Komponist) mit grünem «Üben»-Button |
  | Import | Eigene Seite mit grossem Upload-Feld |
  | Songpage | Songtitel, Notenblatt (oben) und virtuelle Klaviatur (unten) |

  _[Screenshots der vier Pages mit je einer kurzen Beschreibung]_ <!-- TODO: ![Landing Page](docs/03-decide/mockup-landing.png) usw. -->

  **Designentscheide (Übung 10):**
  - *Desktop statt Mobile:* Die App wird am Klavier auf Laptop oder Tablet genutzt. Ein Smartphone ist zu klein, um Notenblatt und Klaviatur gleichzeitig lesbar anzuzeigen. Zudem ist der Anschluss eines Pianos per USB-MIDI geplant.
  - *Einfache horizontale Navbar:* Wenige Hauptbereiche, flache Hierarchie, auf allen Pages identisch; das Logo führt zur Startseite.
  - *Landing Page für den schnellen Wiedereinstieg:* Die häufigste Aufgabe ist das Weiterüben; die zuletzt geübten Songs stehen darum ganz oben.
  - *Katalog als Liste:* Bei vielen Songs übersichtlicher als Kacheln; der grüne «Üben»-Button ist die einzige farbige Aktion (klarer Call-to-Action).
  - *Import über MIDI:* MIDI enthält die Noten als Daten (Tonhöhe, Dauer, Spur/Hand), daraus lassen sich Notenblatt und Tasten-Hervorhebung erzeugen.
  - *Songpage: Noten oben, Klaviatur unten:* entspricht der realen Situation am Klavier.
  - *Visuelles Design:* schlicht, viel Weissraum, Serifenschrift und cremefarbene Navbar als Anspielung auf Notenpapier.

  **Workflows (Übung 10):**
  1. *Song über den Katalog üben:* Landing Page → «Katalog» → Song suchen → «Üben» → Songpage.
  2. *Zuletzt geübten Song fortsetzen:* Landing Page → Kachel unter «Weiter lernen» → Songpage.
  3. *Neuen Song importieren:* MIDI-Datei auf der Landing Page oder der Import-Page hochladen → Song erscheint im Katalog → «Üben» → Songpage.

  <!-- TODO: Übung 10 verlangt die Workflows «in geeigneter Form (z. B. Flowchart oder Activity-Diagramm)». Ein Flowchart (draw.io, Mermaid oder Figma) ergänzen und hier einbinden. -->

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Beschreibt die Gestaltung und Interaktion.
> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.
- **Informationsarchitektur:** _[Pages und Navigation der fertigen App; Abweichungen zum Mockup begründen]_
- **User Interface Design:** _[Screenshots der wichtigsten Screens der FERTIGEN App mit kurzen Erläuterungen]_
  <!-- TODO: Für die 15 Punkte «Nutzerzentrierung» zeigen, dass das Mockup verwendet wurde: Mockup-Screen und App-Screen nebeneinander stellen. -->
- **Designentscheidungen:** _[zentrale Entscheidungen und Begründungen, z. B. Feedback-Meldungen beim Import, Bestätigung vor dem Löschen, Ladeanzeige]_

#### 3.4.2. Umsetzung (Technik)
Fasst die technische Realisierung zusammen.
- **Technologie-Stack:** SvelteKit 3 (verbindliche Vorgabe), MongoDB (Persistenz), Netlify (Deployment). _[Verwendete Bibliotheken ergänzen, z. B. für das Einlesen der MIDI-Dateien und die Notendarstellung]_
- **Tooling:** Visual Studio Code, Git & GitHub, Figma. _[weitere Tools]_
- **Vorgehen bei der Implementierung:** _[Grundgerüst mit `npx sv create`, AGENTS.md angelegt, Routen und Komponenten geplant, Hauptworkflow Schritt für Schritt umgesetzt, danach Validierung/Fehlermeldungen, zum Schluss UI-Feinschliff. Für Details zum KI-Einsatz siehe Kap. 6.]_
- **Struktur & Komponenten:** _[Routen (z. B. `/`, `/katalog`, `/import`, `/songs/[id]`), wichtige Komponenten (z. B. Navbar, SongCard, UploadDropzone, Notenblatt, Klaviatur)]_
- **Daten & Schnittstellen:** _[MongoDB-Collections und Felder (z. B. `songs`: Titel, Komponist, Notendaten, importiert am; Fortschritt pro Song), Laden über `+page.server.js`, Erfassen/Bearbeiten über Form Actions]_
- **Deployment:** Link siehe «Aktuelle App» in der [Projektübersicht](#projektübersicht--zugänge).
- **Besondere Entscheidungen:** _[z. B. MIDI-Dateien vor dem Speichern in Noten-JSON umwandeln; Web MIDI API nur in Chromium-Browsern → Bedienung auch ohne Klavier möglich]_

### 3.5 Validate

> **Hinweis:** Die Evaluation muss nachvollziehbar dokumentiert sein. Belegt die beschriebenen Beobachtungen und Resultate durch geeignete Nachweise und verlinkt diese im Feld «Nachweise». Die Materialien können im Repository abgelegt oder im Anhang aufgeführt werden. Personenbezogene Angaben sind zu anonymisieren.

- **Getestete Version:** Separat deployt; Link und Commit/Tag siehe «Getestete Version» in der [Projektübersicht](#projektübersicht--zugänge).
- **Ziele der Prüfung:** _[z. B. Finden Nutzer:innen den Import ohne Hilfe? Ist der Hauptworkflow verständlich? Werden die Annahmen aus Kap. 2 bestätigt?]_
- **Vorgehen:** _[moderiert/unmoderiert; remote/on-site]_
- **Stichprobe:** _[Profil der Testpersonen, anonymisiert (z. B. P1–P5); Anzahl]_
- **Aufgaben/Szenarien:** _[ausformulierte Testaufgaben, z. B. «Du hast die MIDI-Datei von Satie – Gymnopédie Nr. 1 heruntergeladen. Importiere sie und beginne zu üben.»]_
- **Kennzahlen & Beobachtungen:** _[Erfolgsquote pro Aufgabe, Zeitbedarf, Fehler, qualitative Findings]_
- **Nachweise:** _[Links auf anonymisierte Testprotokolle und die Auswertungstabelle, z. B. `docs/05-validate/`]_
- **Zusammenfassung der Resultate:** _[2–4 Sätze]_
- **Abgeleitete Verbesserungen:** _[priorisiert und begründet; am besten je ein GitHub-Issue verlinken; umgesetzte Verbesserungen mit Vorher/Nachher]_

## 4. Erweiterungen [Optional]
Dokumentiert hier Erweiterungen über den Mindestumfang hinaus. Ordnet jede Erweiterung einem der beiden Unterkapitel zu und beschreibt sie einzeln.

> **Hinweis zur Bewertung:** Nur dokumentierte Erweiterungen werden bewertet. Für nicht dokumentierte Erweiterungen oder Erweiterungen, deren Beschreibung bzw. Nachweise die folgenden Vorgaben nicht erfüllen, werden keine Punkte vergeben.

> **Verbindliche Struktur:** Jede Erweiterung muss vollständig und exakt nach dem Schema des jeweiligen Unterkapitels beschrieben werden. Alle Felder sind mit unveränderten Bezeichnungen und in der vorgegebenen Reihenfolge auszufüllen. Wiederholt das Schema für jede weitere Erweiterung und nummeriert die Einträge fortlaufend (4.1.2, 4.1.3 bzw. 4.2.2, 4.2.3). Zusätzliche Erläuterungen innerhalb der Felder sind möglich.

> **Erforderliche Nachweise:** Fügt zu jeder Erweiterung nach Möglichkeit mindestens einen aussagekräftigen Screenshot mit kurzer Erläuterung ein. Falls ein Screenshot nicht sinnvoll möglich ist, begründet dies kurz im Feld «Nachweise» und gebt einen anderen geeigneten Nachweis an. Bei Erweiterungen mit Code sind zusätzlich die relevanten Codestellen zu referenzieren, beispielsweise durch Links auf Dateien und die betreffenden Funktionen oder Zeilenbereiche.

<!-- TODO: Nur Erweiterungen eintragen, die du WIRKLICH umgesetzt hast. Mögliche Kandidaten:
     4.1 Software: Hände einzeln üben; Tempo-Regler / Loop; Lernetappen mit Fortschritt (falls nicht schon Hauptworkflow);
         Warte-Modus mit USB-MIDI (Web MIDI API); Fortschrittsstatistik (Chart); Filter/Suche im Katalog; komplexe Validierung des Imports.
     4.2 Weitere: Konkurrenzanalyse; Nutzwertanalyse (Decide); User Stories mit Akzeptanzkriterien + MoSCoW;
         SUS-Fragebogen; Skills oder MCP im Agenten-Workflow; Issue-Management mit Projektboard; Tests (Vitest/Playwright). -->

### 4.1 Software-Erweiterungen
Hierzu gehören zusätzliche Funktionen und technische Verbesserungen am Prototyp.

#### 4.1.1 [Titel der Erweiterung]
- **Beschreibung & Nutzen:** _[Was wurde erweitert und welchen Mehrwert bietet es?]_
- **Abgrenzung zum Mindestumfang:** _[Was geht konkret über die verbindlichen Anforderungen hinaus?]_
- **Umsetzung:** _[Wie und wo wurde die Erweiterung umgesetzt?]_
- **Nachweise:** _[Screenshot(s) mit Erläuterung; Referenzen auf die relevanten Codestellen; gegebenenfalls weitere Belege]_
- **Bezug zur Evaluation:** _[Wurde die Erweiterung aus der Evaluation abgeleitet? Falls ja: auf die betreffende Beobachtung bzw. das Issue verweisen. Andernfalls: «Nein».]_

### 4.2 Weitere Erweiterungen
Hierzu gehören beispielsweise zusätzliche Methoden, Planungs- und Analyseartefakte, Verbesserungen der Projektorganisation oder Anpassungen eines KI-Agenten-Workflows.

#### 4.2.1 [Titel der Erweiterung]
- **Beschreibung & Nutzen:** _[Was wurde zusätzlich erarbeitet oder verbessert und welchen Mehrwert bietet es?]_
- **Abgrenzung zum Mindestumfang:** _[Was geht konkret über die verbindlichen Anforderungen hinaus?]_
- **Umsetzung:** _[Wie wurde vorgegangen und was ist das Ergebnis?]_
- **Nachweise:** _[Screenshot(s) mit Erläuterung; Links auf Artefakte, Konfigurationen oder andere Ergebnisse; bei Code zusätzlich Referenzen auf die relevanten Codestellen]_
- **Bezug zur Evaluation:** _[Wurde die Erweiterung aus der Evaluation abgeleitet? Falls ja: auf die betreffende Beobachtung bzw. das Issue verweisen. Andernfalls: «Nein».]_

## 5. Projektorganisation [Optional]

> **Hinweis:** Verbesserungen der Projektorganisation, für die Erweiterungspunkte beansprucht werden, müssen nach dem Schema in Kap. 4.2 dokumentiert werden. Verweist dort bei Bedarf auf die Beschreibung in diesem Kapitel, um Wiederholungen zu vermeiden.

- **Repository & Struktur:** Repository-Link siehe [Projektübersicht](#projektübersicht--zugänge).
  ```
  src/routes/   Pages (Routen)
  src/lib/      Komponenten und Logik
  docs/         Artefakte je Phase (01-understand … 05-validate), KI-Log
  AGENTS.md     Anweisungen für den Coding-Agent
  ```
- **Issue-Management:** _[z. B. jede Funktion als Issue mit User Story und Akzeptanzkriterien, GitHub-Projektboard Backlog → In Arbeit → Erledigt]_
- **Commit-Praxis:** _[z. B. Conventional Commits mit Issue-Referenz: `feat: MIDI-Import auf Startseite (closes #4)`]_

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

> **Hinweis:** Dokumentiert den KI-Einsatz im gesamten Projekt, einschliesslich der Implementierung und eines allfälligen Einsatzes von KI-Agenten (Agentic Coding). Beschreibt die tatsächlich praktizierte Arbeitsweise. Falls keine KI eingesetzt wurde, gebt dies ausdrücklich an; die Unterkapitel 6.1–6.3 können dann entfallen.

<!-- TODO: Ab sofort laufend in docs/ki-einsatz.md festhalten (Datum, Tool/Modell, Aufgabe, was übernommen/geändert/verworfen wurde).
     Die Dozierenden wollen konkrete Situationen: eine, in der KI gut funktioniert hat, und eine, in der sie versagt hat, und wie du reagiert hast.
     Auch KI-Unterstützung bei der Dokumentation (z. B. dieser Entwurf mit Claude) gehört hierher. -->

### 6.1 KI-Tools
- **Eingesetzte Tools**: _[z. B. GitHub Copilot (Copilot Student, automatische Modellwahl), Claude; Version/Variante wenn bekannt]_
- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass; welche Teile stammen ganz/teilweise aus KI-Unterstützung?]_
- **Eigene Leistung (Abgrenzung):** _[z. B. Problemanalyse, Personas, Crazy 8s, Skizzen und Figma-Mockup ohne KI erstellt; …]_

### 6.2 Vorgehen mit KI
- **Arbeitsablauf & Aufgabenverteilung:** _[Welche Aufgaben selbst, welche an KI übertragen? Welche Handlungsspielräume hatte der Agent, wann wurde eingegriffen?]_
- **Prompt-Vorgehen & Kontext:** _[z. B. Issues mit Akzeptanzkriterien als Auftrag, Plan-Modus vor grösseren Schritten, AGENTS.md als Kontext]_
- **Konfiguration & Werkzeuge:** _[AGENTS.md im Repo-Root verlinken; weitere Skills/MCP, sonst «Keine»]_
- **Prüfung & Überarbeitung:** _[Diffs reviewt, im Browser getestet, Tests, Lizenzen von Bibliotheken und Inhalten geprüft]_

### 6.3 Reflexion
_[Nutzen, Grenzen, Risiken/Qualitätssicherung; konkret statt allgemein, inkl. Fehlschläge]_

## 7. Anhang [Optional]

> **Hinweis zu Quellen und Urheberrecht:** Bei Verwendung fremder Inhalte (z. B. Code, Texte, Bilder, Icons, Vorlagen oder Modelle) sind die Quellen und die geltenden Lizenzen bzw. Nutzungsbedingungen anzugeben und einzuhalten. Diese Angaben sind verpflichtend, auch wenn der Anhang weggelassen wird. Sie können alternativ an den betreffenden Stellen der Dokumentation oder in einer verlinkten Quellenübersicht im Repository stehen. Erforderliche Hinweise direkt im Code oder bei verwendeten Inhalten bleiben zusätzlich bestehen.

- **Quellen:**

  | Inhalt | Quelle / Link | Lizenz bzw. Nutzungsbedingungen |
  |---|---|---|
  | _[MIDI-Datei, z. B. Liszt – Liebestraum Nr. 3]_ | _[Link]_ | _[z. B. Public Domain / CC BY]_ |
  | _[Bibliothek, z. B. MIDI-Parser]_ | _[npm-/GitHub-Link]_ | _[z. B. MIT]_ |
  | _[Bilder der Song-Kacheln, Icons, Schriften]_ | _[Link]_ | _[Lizenz]_ |

  <!-- TODO: In der App und im Repo nur MIDI-Dateien mit klarer Lizenz verwenden (gemeinfreie Werke, z. B. Mutopia Project) oder selbst eingespielte.
       Keine Dateien aktueller Songs (z. B. Kanye West aus dem Mockup) ins Repo oder in die Online-App. -->
- **Testskript & Materialien:** _[Link/Datei]_
- **Rohdaten/Auswertung:** _[Link/Datei]_
