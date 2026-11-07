# Architettura: mappa POI

## Rendering

- `src/components/map/EventMap.tsx` monta una `MapContainer` Leaflet con una `ImageOverlay` statica.
- Immagine: `public/asset/map.png` (1500 × 846 px).
- Bounds dell'overlay:

```ts
maxBounds / bounds = [
  [41.599477, 13.48876476287842], // SW
  [41.6025,   13.49585],          // NE
]
```

- I marker sono renderizzati da `src/components/map/MarkerPoi.tsx`.
- L'icona è scelta dalla mappa `mapIcon` in `MarkerPoi.tsx` a partire dal campo `icon` del POI.

## Conversione coordinate ↔ pixel

L'immagine è allineata nord-up e la proiezione è lineare sui bounds:

```ts
lngMin = 13.48876476287842, lngMax = 13.49585
latMin = 41.599477,         latMax = 41.6025
width  = 1500,              height = 846

x = (lng - lngMin) / (lngMax - lngMin) * width
y = (latMax - lat) / (latMax - latMin) * height

lng = lngMin + x / width  * (lngMax - lngMin)
lat = latMax - y / height * (latMax - latMin)
```

## Strategia coordinate 2026

- Le piazzole fisiche delle 35 cantine sono invariate rispetto al 2025: il poster 2026 è una mappa stilizzata e non in scala, quindi le coordinate GPS 2025 restano il riferimento più accurato.
- La verifica manuale è stata fatta confrontando i numeri rilevati sul poster con i marker presenti su `map.png`.
- Per i servizi spostati in modo evidente (animazione e Cantin'Arte) le coordinate sono state aggiornate.
- Il nuovo "Angolo foto ricordo" è posizionato vicino alla piazzola 24.

## Icone supportate

`fa-wine-glass`, `fa-music`, `fa-ambulance`, `fa-palette`, `fa-restroom`, `fa-store`, `fa-fire`, `fa-person-breastfeeding`, `fa-street-view`, `fa-van-shuttle`, `fa-image`, `fa-camera`.

Aggiungendo un nuovo valore `icon` in `pois.ts` va aggiunto anche il mapping in `MarkerPoi.tsx`, altrimenti il marker non renderizza l'icona.
