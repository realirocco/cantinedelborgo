# Task 03 — Test di validazione dati

## Obiettivo

Aggiungere un test Vitest che protegga l'integrità del file `pois.ts`.

## File da creare

- `src/data/pois.test.ts`

## Passi tecnici

1. Importare `pois` e i bounds della mappa.
2. Verificare 35 cantine (`id < 200`) con id 1..35.
3. Verificare unicità di tutti gli id.
4. Verificare campi obbligatori e `iconText`/`icon` per categoria.
5. Verificare coordinate dentro i bounds.
6. Verificare la presenza di 801 con `fa-camera`.
7. Verificare l'elenco titoli 2026.

## Casi di test

- `expect(cantine).toHaveLength(35)`.
- `expect(new Set(ids).size).toBe(ids.length)`.
- `expect(cantine.every(p => p.iconText === p.id)).toBe(true)`.
- `expect(cantine.every(p => p.lat >= 41.599477 && p.lat <= 41.6025)).toBe(true)`.
- `expect(pois.find(p => p.id === "801")?.icon).toBe("fa-camera")`.
- `expect(titoli).toEqual([...])`.

## Criteri di accettazione

- [ ] `npm run test.unit` passa.
- [ ] Il test fallisce se viene rimosso un POI o modificato un id.
- [ ] `npm run lint` e `npm run build` passano.
