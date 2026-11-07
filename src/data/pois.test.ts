import { describe, expect, it } from 'vitest';
import pois from './pois';
import { Poi } from '../util/Poi';

const MAP_BOUNDS = {
    minLat: 41.599477,
    maxLat: 41.6025,
    minLng: 13.48876476287842,
    maxLng: 13.49585,
};

const SUPPORTED_ICONS = [
    'fa-wine-glass',
    'fa-music',
    'fa-ambulance',
    'fa-palette',
    'fa-restroom',
    'fa-store',
    'fa-fire',
    'fa-person-breastfeeding',
    'fa-street-view',
    'fa-van-shuttle',
    'fa-image',
    'fa-camera',
];

const TITOLI_CANTINE_2026 = [
    'PANÇÒ',
    'MAGNA CHE TE PASSA',
    "L' S'NNANB'L'",
    "GL' UAGLIUN'",
    "L' SCIORN'",
    "CHISS' M'NZU'",
    'LA CASTAGNACCIA',
    "ZIO PIE'",
    'LA PATATA SFIZIOSA',
    'TRATTORISTI NEL SANGUE',
    'DOLCI E DOLCEZZE',
    "C' ULEM' PRUA'",
    "AGL' CUCUZZAR'",
    "ESS' CHISS'",
    'PRO LOCO STRANGOLAGALLI',
    'LA CONTADINA',
    'AZIENDA AGRICOLA LA GINESTRA',
    "GL' MAGNUN'",
    "CHISS' BULICCHIE",
    'SPACCANAPOLI',
    'DA FABRIZIO',
    "SAVERIO'S BURGER",
    'PEPPINO E ROSETTA',
    'ARTE PATATA',
    "GL' ZAPP'",
    'DA CICCIO E PAOLETTA FAI PURE LA SCARPETTA',
    'LA CANTINA DI GIGI',
    "LE BONTA' SICILIANE",
    'AZIENDA AGRICOLA LE GINESTRE',
    'LA RADICOLA',
    'IL CINGHIALE CON LE CIOCE',
    'LA FRASCHETTA DEL PIRATA',
    'GLI AMICI DELLA FREGNA',
    'PIZZA DA DAMIANO',
    'RISTORANTE VILLA STELLA',
];

function isCantina(poi: Poi) {
    const id = Number.parseInt(poi.id, 10);
    return id >= 1 && id <= 35;
}

describe('pois.ts', () => {
    const cantine = pois.filter(isCantina);
    const servizi = pois.filter((poi) => !isCantina(poi));

    it('contiene 35 cantine con id 1..35', () => {
        expect(cantine).toHaveLength(35);
        expect(cantine.map((poi) => Number.parseInt(poi.id, 10)).sort((a, b) => a - b))
            .toEqual(Array.from({ length: 35 }, (_, i) => i + 1));
    });

    it('ha id univoci per tutti i POI', () => {
        const ids = pois.map((poi) => poi.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('ha cantine complete e coerenti', () => {
        for (const poi of cantine) {
            expect(poi.title?.trim(), `titolo cantina ${poi.id}`).toBeTruthy();
            expect(poi.description?.trim(), `descrizione cantina ${poi.id}`).toBeTruthy();
            expect(poi.iconText, `iconText cantina ${poi.id}`).toBe(poi.id);
            expect(poi.icon, `icon cantina ${poi.id}`).toBeNull();
        }
    });

    it('ha servizi con icona supportata', () => {
        for (const poi of servizi) {
            expect(poi.icon, `icona servizio ${poi.id}`).toBeTruthy();
            expect(SUPPORTED_ICONS, `icona non mappata per ${poi.id}`).toContain(poi.icon);
            expect(poi.iconText, `iconText servizio ${poi.id}`).toBeNull();
        }
    });

    it('ha coordinate dentro i bounds della mappa', () => {
        for (const poi of pois) {
            expect(poi.lat, `lat ${poi.id}`).toBeGreaterThanOrEqual(MAP_BOUNDS.minLat);
            expect(poi.lat, `lat ${poi.id}`).toBeLessThanOrEqual(MAP_BOUNDS.maxLat);
            expect(poi.lng, `lng ${poi.id}`).toBeGreaterThanOrEqual(MAP_BOUNDS.minLng);
            expect(poi.lng, `lng ${poi.id}`).toBeLessThanOrEqual(MAP_BOUNDS.maxLng);
        }
    });

    it('contiene il nuovo Angolo foto ricordo', () => {
        const foto = pois.find((poi) => poi.id === '801');
        expect(foto).toBeDefined();
        expect(foto?.icon).toBe('fa-camera');
        expect(foto?.title).toBe('Angolo foto ricordo');
    });

    it('ha i titoli delle cantine 2026 nell’ordine del poster', () => {
        expect(cantine.map((poi) => poi.title)).toEqual(TITOLI_CANTINE_2026);
    });

    it('non contiene più le cantine rimosse nel 2026', () => {
        const titoli = cantine.map((poi) => poi.title);
        ['Pizza G', 'Prendi, mordi, via', "Gl' cagl'nar'", 'Pasticceria Le Rose', 'Wine Ripi cantina diffusa', 'La taverna del cuzzutiello', 'Dalla padella alla brace']
            .forEach((titolo) => expect(titoli).not.toContain(titolo));
    });
});
