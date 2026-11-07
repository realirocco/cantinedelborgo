import { describe, expect, it } from 'vitest';
import { updatePoiSource } from './poiFile';

const SAMPLE = `import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": "1",
        "title": "PANÇÒ",
        "iconText": "1",
        "description": "Pangoccioli - Crumble cookies - Caffè",
        "icon": null,
        "lat": 41.600948604907316,
        "lng": 13.491760790348055
    },
    {
        "id": "2",
        "title": "MAGNA CHE TE PASSA",
        "iconText": "2",
        "description": "Pizza masardona - Spiedino di angus",
        "icon": null,
        "lat": 41.60096665639647,
        "lng": 13.49163740873337
    },
];`;

describe('updatePoiSource', () => {
    it('aggiorna lat e lng di un singolo POI', () => {
        const result = updatePoiSource(SAMPLE, [{ id: '1', lat: 41.5, lng: 13.4 }]);
        expect(result.source).toContain('"lat": 41.5');
        expect(result.source).toContain('"lng": 13.4');
        expect(result.source).toContain('"id": "2"');
        expect(result.source).toContain('41.60096665639647');
        expect(result.updated).toHaveLength(1);
        expect(result.updated[0]).toEqual({
            id: '1',
            oldLat: 41.600948604907316,
            oldLng: 13.491760790348055,
            lat: 41.5,
            lng: 13.4,
        });
        expect(result.missing).toEqual([]);
        expect(result.invalid).toEqual([]);
    });

    it('aggiorna più POI', () => {
        const result = updatePoiSource(SAMPLE, [
            { id: '1', lat: 41.5, lng: 13.4 },
            { id: '2', lat: 42.0, lng: 12.9 },
        ]);
        expect(result.source).toContain('"lat": 41.5');
        expect(result.source).toContain('"lat": 42');
        expect(result.updated).toHaveLength(2);
    });

    it('segnala id mancante', () => {
        const result = updatePoiSource(SAMPLE, [{ id: '99', lat: 1, lng: 2 }]);
        expect(result.source).toBe(SAMPLE);
        expect(result.missing).toEqual(['99']);
        expect(result.updated).toEqual([]);
    });

    it('segnala coordinate non finite', () => {
        const result = updatePoiSource(SAMPLE, [
            { id: '1', lat: Number.NaN, lng: 2 },
            { id: '2', lat: 1, lng: Number.POSITIVE_INFINITY },
        ]);
        expect(result.invalid).toEqual(['1', '2']);
        expect(result.updated).toEqual([]);
    });

    it('arrotonda a 7 decimali', () => {
        const result = updatePoiSource(SAMPLE, [{ id: '1', lat: 41.123456789, lng: 13.987654321 }]);
        expect(result.source).toContain('"lat": 41.1234568');
        expect(result.source).toContain('"lng": 13.9876543');
    });

    it('preserva commenti e struttura', () => {
        const source = `[
    {
        // commento
        "id": "42",
        "lat": 1.0,
        "lng": 2.0
    }
];`;
        const result = updatePoiSource(source, [{ id: '42', lat: 3.0, lng: 4.0 }]);
        expect(result.source).toContain('// commento');
        expect(result.source).toContain('"lat": 3');
        expect(result.source).toContain('"lng": 4');
    });
});