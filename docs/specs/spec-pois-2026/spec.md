# Feature Spec — POI 2026

## Impatto

Modifica data-only più una piccola estensione del renderer icone:

| File | Modifica |
|---|---|
| `src/data/pois.ts` | 35 cantine + 17 servizi |
| `src/components/map/MarkerPoi.tsx` | mapping `fa-camera` |
| `src/data/pois.test.ts` | nuovo test di validazione |
| `docs/**` | documentazione SDD |

Nessuna modifica a `EventMap.tsx`, `ListPage.tsx`, `map.png` o alle rotte.

## Schema dati

Invariato: `Poi` in `src/util/Poi.ts`. Nessuna migrazione.

## Contenuto cantine 2026

| # | Titolo | Descrizione |
|---|---|---|
| 1 | PANÇÒ | Pangoccioli - Crumble cookies - Caffè |
| 2 | MAGNA CHE TE PASSA | Pizza masardona - Spiedino di angus |
| 3 | L' S'NNANB'L' | Sagn' i faciuor' - Ricco tagliere |
| 4 | GL' UAGLIUN' | Crepes alla nutella - Caffè |
| 5 | L' SCIORN' | P'zzell' d' Natal' semplici, con uva passa, con baccalà |
| 6 | CHISS' M'NZU' | Vin brulé - Sangria - Ciambelline al vino |
| 7 | LA CASTAGNACCIA | Caldarroste |
| 8 | ZIO PIE' | Tris di bombette con patate country - Bun con pulled pork |
| 9 | LA PATATA SFIZIOSA | Patate a spirale - Chips - Patate stick - Patate capellini |
| 10 | TRATTORISTI NEL SANGUE | Rigatoni all'amatriciana |
| 11 | DOLCI E DOLCEZZE | Dolci forno a legna - Semifreddi - Caffè |
| 12 | C' ULEM' PRUA' | Bruschette di caciocavallo impiccato con prosciutto, guanciale, alici, salsa tartufata |
| 13 | AGL' CUCUZZAR' | Gnocchi di zucca con speck e noci |
| 14 | ESS' CHISS' | Polenta con spuntature e salsicce - Focaccia ripiena con cicoria e patate/mortadella e stracciata |
| 15 | PRO LOCO STRANGOLAGALLI | Spezzatino di coratella - Cannelloni |
| 16 | LA CONTADINA | Fettuccine al ragù - Stesa monticiana in padellina con mortadella, prosciutto crudo o broccoletti |
| 17 | AZIENDA AGRICOLA LA GINESTRA | Barchetta di formaggi con verdure grigliate - Spezzatino di cinghiale in casseruola |
| 18 | GL' MAGNUN' | Gnocchi cozze, guanciale e pecorino - Gnocchi alla norcina |
| 19 | CHISS' BULICCHIE | Lasagna con zucca e salsiccia (variante senza lattosio) - Pecora al sugo |
| 20 | SPACCANAPOLI | Pasta patate e provola - Trippetta al sugo |
| 21 | DA FABRIZIO | Panini con salsiccia - wurstel - porchetta - prosciutto crudo |
| 22 | SAVERIO'S BURGER | Hamburger gourmet - Kebab di pollo e tacchino |
| 23 | PEPPINO E ROSETTA | Stesa fritta strangolagallese semplice o farcita - Panzerotti |
| 24 | ARTE PATATA | Patate alla griglia farcite |
| 25 | GL' ZAPP' | Arrosticini di pecora |
| 26 | DA CICCIO E PAOLETTA FAI PURE LA SCARPETTA | Code de soreca con funghi e salsiccia - Cuoppo di banditos e patatine |
| 27 | LA CANTINA DI GIGI | M'nestra c' l' pan'sott' - Baccalà con patate |
| 28 | LE BONTA' SICILIANE | Arancine - Cuoppo siculo - Cannoli siciliani - caffè |
| 29 | AZIENDA AGRICOLA LE GINESTRE | Kebab di bufala - Arrosticini di bufala - Cuzzutiello di bufala |
| 30 | LA RADICOLA | Grigliata mista |
| 31 | IL CINGHIALE CON LE CIOCE | Pappardelle al cinghiale - Fini fini al pomodoro e basilico |
| 32 | LA FRASCHETTA DEL PIRATA | Gnocchetti alla crema di scampi - Torciarelli alla crema di patate, salsiccia e tartufo |
| 33 | GLI AMICI DELLA FREGNA | Fregne fritte dolci per tutti i gusti |
| 34 | PIZZA DA DAMIANO | Pizze tonde - Calzoni ripieni - Patatine fritte - Supplì |
| 35 | RISTORANTE VILLA STELLA | Frittura mista di pesce |

## Servizi

| id | Titolo | Icona | Variazione |
|---|---|---|---|
| 101 | Ingresso | fa-wine-glass | invariato |
| 102 | Ingresso | fa-wine-glass | invariato |
| 201 | Mercatino | fa-store | invariato |
| 301–304 | Spettacolo musicale | fa-music | invariati |
| 401 | Artisti di strada | fa-fire | invariato |
| 501 | Una finestra sui sogni | fa-person-breastfeeding | coordinate aggiornate (casa grande NE) |
| 502 | Cantin'Arte | fa-palette | coordinate aggiornate (centro-nord) |
| 503 | Scuola e cantina | fa-image | invariato |
| 601–603 | Servizi Igienici | fa-restroom | invariati |
| 701–702 | Punto primo soccorso | fa-ambulance | invariati |
| 801 | Angolo foto ricordo | fa-camera | nuovo, vicino alla piazzola 24 |

## Coordinate

- Cantine: coordinate 2025 invariate (piazzole fisiche 1–35).
- 501: circa `41.60160, 13.49180`.
- 502: circa `41.60154, 13.49100`.
- 801: circa `41.60095, 13.49095`.
- Tutte le coordinate devono ricadere nei bounds di `map.png`.

## Gestione errori e idempotenza

- Il file è statico e idempotente.
- I test bloccano id duplicati, campi mancanti, coordinate fuori bounds e icone non mappate.

## Testing

- Nuovo `src/data/pois.test.ts` con Vitest.
- Verifica conteggi, unicità, campi, coordinate, icone, presenza 801, elenco titoli 2026.
- Verifica visiva con `npm run dev` e screenshot della mappa.
