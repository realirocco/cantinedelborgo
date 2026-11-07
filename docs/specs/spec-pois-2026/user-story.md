# User Story — Aggiornamento POI 2026

## Scopo

Allineare i punti di interesse dell'app alla nuova configurazione dell'edizione 2026 della festa "Le Cantine del Borgo", così che visitatori e organizzatori vedano sulla mappa e nel menù le cantine, i menù e i servizi corretti.

## Ruoli e attori

- **Visitatore**: consulta mappa e menù delle cantine.
- **Organizzatore**: verifica che numeri, nomi e posizioni corrispondano al poster ufficiale.
- **Sviluppatore**: mantiene il file dati e le icone.

## Casi d'uso

### Happy path

1. Il visitatore apre la mappa e vede 35 cantine numerate da 1 a 35 nella posizione corretta.
2. Il visitatore apre il menù e vede l'elenco delle 35 cantine con nome e descrizione aggiornati al 2026.
3. Il visitatore seleziona una cantina e la mappacentra il marker corrispondente.
4. Sulla mappa compaiono anche ingressi, servizi igienici, primo soccorso, spettacoli, mercatino, animazione, scuola, Cantin'Arte e il nuovo Angolo foto ricordo.

### Edge cases

- Una cantina nuova occupa una piazzola già esistente: il numero resta quello della piazzola, cambiano nome e menù.
- Due cantine della stessa azienda agricola occupano piazzole diverse (17 e 29).
- Alcune cantine del 2025 non partecipano più: i loro POI vengono rimossi.
- Il poster contiene grafie dialettali o refusi: il testo viene copiato fedelmente e marcato con `// FIXME` se incerto.

### Scenari d'errore

- Un `id` duplicato o fuori bounds rompe la mappa: il test di validazione fallisce.
- Un'icona non mappata in `MarkerPoi.tsx` non viene renderizzata: il test verifica che tutte le icone siano supportate.
- Una coordinata fuori dai bounds di `map.png` fa sparire il marker: il test la blocca.

## Criteri di accettazione

- [ ] `src/data/pois.ts` contiene esattamente 35 cantine con `id` 1–35.
- [ ] Ogni cantina ha `title` e `description` non vuoti, `iconText` uguale all'`id`, `icon === null`.
- [ ] I nomi e i menù corrispondono al poster 2026 (trascrizione fedele).
- [ ] Le cantine non più presenti nel 2026 sono rimosse.
- [ ] Le coordinate delle cantine restano quelle delle piazzole fisiche 1–35.
- [ ] I servizi sono aggiornati; è presente il POI 801 "Angolo foto ricordo".
- [ ] `fa-camera` è mappata in `MarkerPoi.tsx`.
- [ ] Tutti gli `id` sono univoci e tutte le coordinate sono dentro i bounds.
- [ ] `npm run test.unit`, `npm run lint` e `npm run build` passano.
- [ ] Verifica visiva: i marker sono sulle vie corrette di `map.png`.
