# Task 02 — Servizi 2026 e Angolo foto ricordo

## Obiettivo

Aggiornare i POI di servizio in base al poster 2026 e aggiungere l'Angolo foto ricordo.

## File da modificare

- `src/data/pois.ts`
- `src/components/map/MarkerPoi.tsx`

## Passi tecnici

1. Mantenere 101, 102, 201, 301–304, 401, 503, 601–603, 701–702 con le coordinate verificate.
2. Aggiornare 501 a circa `41.60160, 13.49180` (casa grande NE).
3. Aggiornare 502 a circa `41.60154, 13.49100` (centro-nord).
4. Aggiungere 801 "Angolo foto ricordo", `icon: "fa-camera"`, `iconText: null`, coordinate `41.60095, 13.49095`.
5. In `MarkerPoi.tsx`: importare `faCamera` e aggiungere `"fa-camera": faCamera` alla mappa `mapIcon`.

## Casi di test

- `pois.find(p => p.id === "801")` esiste e ha `icon === "fa-camera"`.
- `mapIcon["fa-camera"]` è definita (verifica indiretta: il build TypeScript passa e il marker renderizza).
- I servizi non compaiono nel menù (`id >= 200`).

## Criteri di accettazione

- [ ] 801 presente con icona fa-camera.
- [ ] `fa-camera` mappata in `MarkerPoi.tsx`.
- [ ] Nessuna regressione sui servizi esistenti.
- [ ] `npm run build` passa.
