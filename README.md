# Thu-Pham-Projekt

## Übersicht
Dies ist eine kleine, als Projekt entwickelte React-E-Commerce-Anwendung, die wichtige React-Konzepte wie Komponenten, Statusverwaltung, Routing, Styling und lokalen Speicher demonstriert.

## Funktionen
- **Produktliste:** Durchsuchen Sie eine Liste mit Beispielprodukten.
- **Produktdetailseite:** Detaillierte Informationen zu jedem Produkt anzeigen.
- **Warenkorb:** Produkte in den Warenkorb legen, Mengen aktualisieren und Artikel entfernen.
- **Integration des lokalen Speichers:** Warenkorbdaten werden über „localStorage“ gespeichert.
- **Dynamische Formularfelder:** (Beispiel im Warenkorb)
- **Responsive Design:** Passt sich verschiedenen Bildschirmgrößen an.
- **Komponentenstruktur:** Organisiert in wiederverwendbare Komponenten und einzelne Seiten.
- **Routing:** Navigation zwischen Startseite, Produktdetailseite und Warenkorb über „react-router-dom“.

## Verwendete Technologien
- React.js
- React Router DOM
- CSS (für Styling)

## Lokale Ausführung
1. **Repository klonen:**
```bash
git clone <URL_IHRE_GITLAB_REPO>
cd ecommerce-project
```
2. **Abhängigkeiten installieren:**
```bash
npm install
# oder yarn install
```
3. **Entwicklungsserver starten:**
```bash
npm start
# oder yarn start
```
Die Anwendung wird in Ihrem Browser unter `http://localhost:3000` geöffnet.

## Projektstruktur
```
    ecommerce-project/
    ├── public/        # Bilder, Symbole usw.
    ├── src/
    │ ├── components/  # Wiederverwendbare UI-Komponenten (Header, Footer, Produktkarte)
    │ ├── pages/       # Hauptanwendungsseiten (Startseite, Warenkorbseite, Produktdetailseite)
    │ ├── assets/      # Logo
    │ ├── styles/      # Globales CSS
    │ ├── App.js       # Root-Komponente und Router-Setup
    │ ├── index.js     # Einstiegspunkt
    │ └── ...
    ├── .gitignore
    ├── package.json
    ├── README.md      # Diese Datei
    └── ...
```

## Zukünftige Verbesserungen
– Benutzerauthentifizierung und -autorisierung.
– Integration mit einer Backend-API für echte Produktdaten und Bestellungen.
– Zahlungsgateway-Integration.
– Wunschlistenfunktion.
– Such- und Filteroptionen.