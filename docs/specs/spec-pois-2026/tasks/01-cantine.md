# Task 01 — Riscrittura cantine 2026

## Obiettivo

Sostituire le 35 cantine in `src/data/pois.ts` con quelle dell'edizione 2026, mantenendo le piazzole fisiche e trascrivendo fedelmente nomi e menù dal poster.

## File da modificare

- `src/data/pois.ts`

## Passi tecnici

1. Sostituire gli oggetti con `id` 1–35.
2. Mantenere `iconText` uguale all'`id`, `icon: null`, `lat`/`lng` della piazzola.
3. Inserire i commenti `// FIXME` per le grafie incerte (3, 5, 17/29, 28, 30, 31, 35).
4. Rimuovere le cantine non più presenti.
5. Non toccare i POI di servizio in questo task.

## Casi di test

- Input: `pois.filter(p => Number(p.id) < 200)`.
- Output atteso: 35 elementi, id 1..35, titoli della tabella in `spec.md`.
- `pois.find(p => p.id === "17").title === "AZIENDA AGRICOLA LA GINESTRA"`.
- `pois.find(p => p.id === "35").title === "RISTORANTE VILLA STELLA"`.
- Nessun titolo del 2025 rimasto (es. "Pizza G", "Pasticceria Le Rose").

## Criteri di accettazione

- [ ] 35 cantine, id 1–35 univoci.
- [ ] Nomi e descrizioni corrispondono al poster.
- [ ] Coordinate invariate rispetto alle piazzole.
- [ ] Commenti `// FIXME` presenti.
- [ ] `npm run build` passa.
