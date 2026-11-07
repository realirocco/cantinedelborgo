export interface PoiCoordinates {
    id: string;
    lat: number;
    lng: number;
}

export interface PoiSourceUpdateResult {
    source: string;
    updated: Array<{ id: string; oldLat: number; oldLng: number; lat: number; lng: number }>;
    missing: string[];
    invalid: string[];
}

const LAT_REGEX = /("lat"\s*:\s*)(-?\d+(?:\.\d+)?)/;
const LNG_REGEX = /("lng"\s*:\s*)(-?\d+(?:\.\d+)?)/;

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Aggiorna i campi "lat" e "lng" dei POI indicati nel sorgente di pois.ts,
 * preservando commenti, ordine e formattazione del resto del file.
 */
export function updatePoiSource(source: string, updates: PoiCoordinates[]): PoiSourceUpdateResult {
    let result = source;
    const updated: PoiSourceUpdateResult['updated'] = [];
    const missing: string[] = [];
    const invalid: string[] = [];

    const seen = new Set<string>();

    for (const update of updates) {
        if (seen.has(update.id)) {
            continue;
        }
        seen.add(update.id);

        if (!Number.isFinite(update.lat) || !Number.isFinite(update.lng)) {
            invalid.push(update.id);
            continue;
        }

        const idRegex = new RegExp(`"id"\\s*:\\s*"${escapeRegExp(update.id)}"`);
        const idMatch = idRegex.exec(result);

        if (!idMatch) {
            missing.push(update.id);
            continue;
        }

        // Limita la ricerca all'oggetto corrente: dal campo id fino alla chiusura.
        const objectStart = idMatch.index;
        const objectEnd = result.indexOf('}', objectStart);
        const searchEnd = objectEnd === -1 ? result.length : objectEnd;
        const objectSource = result.slice(objectStart, searchEnd);

        const latMatch = LAT_REGEX.exec(objectSource);
        const lngMatch = LNG_REGEX.exec(objectSource);

        if (!latMatch || !lngMatch) {
            missing.push(update.id);
            continue;
        }

        const oldLat = Number.parseFloat(latMatch[2]);
        const oldLng = Number.parseFloat(lngMatch[2]);
        const lat = Number(update.lat.toFixed(7));
        const lng = Number(update.lng.toFixed(7));

        let patchedObject = objectSource
            .replace(LAT_REGEX, `$1${lat}`)
            .replace(LNG_REGEX, `$1${lng}`);

        result = result.slice(0, objectStart) + patchedObject + result.slice(searchEnd);
        updated.push({ id: update.id, oldLat, oldLng, lat, lng });
    }

    return { source: result, updated, missing, invalid };
}
