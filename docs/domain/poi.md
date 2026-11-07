# Dominio: Punti di Interesse (POI)

Fonte di verità per la scheda `Poi` usata dalla mappa dell'evento e dal menù delle cantine.

## Schema

```ts
interface Poi {
  id: string;          // identificativo univoco, numerico in stringa
  title: string | null;
  iconText: string | null;
  description: string | null;
  icon: string | null; // nome icona FontAwesome, es. "fa-wine-glass"
  lat: number;
  lng: number;
}
```

File dati: `src/data/pois.ts` (export default di `Array<Poi>`).
Tipo: `src/util/Poi.ts`.

## Convenzioni ID

| Fascia | Categoria | Visibile in "Menù delle cantine" |
|---|---|---|
| `1`–`99` | Cantine / stand enogastronomici | Sì (`id < 200`) |
| `101`–`199` | Ingressi e distribuzione bicchieri | No |
| `201`–`299` | Mercatino artigianato | No |
| `301`–`399` | Spettacoli musicali | No |
| `401`–`499` | Artisti di strada | No |
| `501`–`599` | Animazione, scuola, esposizioni | No |
| `601`–`699` | Servizi igienici | No |
| `701`–`799` | Primo soccorso | No |
| `801`–`899` | Altri servizi (es. angolo foto ricordo) | No |

## Invarianti

1. Gli `id` sono univoci in tutto l'array.
2. Le cantine hanno `id` numerico 1–35, `iconText` uguale all'`id` e `icon === null`.
3. I POI di servizio hanno `icon` valorizzata e `iconText === null`.
4. `lat`/`lng` devono ricadere nei bounds della mappa (vedi `docs/architecture/mappa-poi.md`).
5. I titoli e le descrizioni delle cantine sono trascritti fedelmente dal materiale ufficiale (poster 2026), inclusi i termini dialettali ciociari.
6. Le incertezze su grafie o denominazioni sono marcate con un commento `// FIXME` sopra il POI interessato.

## Edizione 2026

- 35 cantine (id 1–35).
- 17 servizi (id 101–801), incluso il nuovo "Angolo foto ricordo" (id 801).
- Il servizio navetta non è un POI: è gestito dalla pagina `ShuttlesPage`.
