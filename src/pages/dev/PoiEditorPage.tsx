import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IonButton, IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonChip, IonIcon, IonToast } from '@ionic/react';
import { ImageOverlay, MapContainer } from 'react-leaflet';
import { saveOutline, refreshOutline, checkmarkCircleOutline, warningOutline } from 'ionicons/icons';
import type { Poi } from '../../util/Poi';
import poisOriginal from '../../data/pois';
import MarkerPoi from '../../components/map/MarkerPoi';
import { MAP_BOUNDS } from '../../components/map/mapConfig';
import 'leaflet/dist/leaflet.css';
import './PoiEditorPage.css';

interface DirtyState {
    lat: number;
    lng: number;
}

async function savePois(pois: Array<{ id: string; lat: number; lng: number }>) {
    const res = await fetch('/__dev/poi-editor/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pois),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `${res.status} ${res.statusText}` }));
        throw new Error(err?.error ?? 'Errore sconosciuto');
    }
    return res.json();
}

const PoiEditorPage: React.FC = () => {
    const [pois, setPois] = useState<Poi[]>(() =>
        poisOriginal.map(p => ({ ...p, lat: p.lat, lng: p.lng }))
    );
    const [dirty, setDirty] = useState<Record<string, DirtyState>>({});
    const [search, setSearch] = useState('');
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState<{ message: string; color: string } | null>(null);

    // Tiene traccia dell'originale per confrontare
    const originalsRef = useRef<Record<string, { lat: number; lng: number }>>({});
    useEffect(() => {
        const map: Record<string, { lat: number; lng: number }> = {};
        poisOriginal.forEach(p => { map[p.id] = { lat: p.lat, lng: p.lng }; });
        originalsRef.current = map;
    }, []);

    const handleMove = useCallback((id: string, lat: number, lng: number) => {
        setPois(prev => prev.map(p => (p.id === id ? { ...p, lat, lng } : p)));
        const orig = originalsRef.current[id];
        setDirty(prev => {
            if (orig && Math.abs(orig.lat - lat) < 1e-7 && Math.abs(orig.lng - lng) < 1e-7) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: { lat, lng } };
        });
    }, []);

    const handleSave = async () => {
        const updates = Object.entries(dirty).map(([id, coords]) => ({ id, ...coords }));
        if (updates.length === 0) {
            setToast({ message: 'Nessuna modifica da salvare', color: 'medium' });
            return;
        }
        setSaving(true);
        try {
            const res = await savePois(updates);
            setToast({ message: `Salvati ${res.updated.length} POI su file.`, color: 'success' });
            // Resetta lo stato dirty
            setDirty({});
            const newOriginals = { ...originalsRef.current };
            for (const u of updates) {
                newOriginals[u.id] = { lat: u.lat, lng: u.lng };
            }
            originalsRef.current = newOriginals;
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : String(err);
            setToast({ message: `Errore: ${msg}`, color: 'danger' });
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        setPois(poisOriginal.map(p => ({ ...p, lat: p.lat, lng: p.lng })));
        const map: Record<string, { lat: number; lng: number }> = {};
        poisOriginal.forEach(p => { map[p.id] = { lat: p.lat, lng: p.lng }; });
        originalsRef.current = map;
        setDirty({});
    };

    const searchLower = search.toLowerCase();
    const filtered = pois.filter(p => {
        if (!searchLower) return true;
        return p.id.includes(searchLower) || (p.title ?? '').toLowerCase().includes(searchLower);
    });

    const dirtyCount = Object.keys(dirty).length;

    return (
        <IonPage className="poi-editor-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="small">Editor POI (dev)</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="poi-editor-layout">
                    <div className="poi-editor-map">
                        <MapContainer
                            center={[41.601378, 13.491210]}
                            minZoom={18}
                            zoom={19}
                            maxZoom={21}
                            maxBoundsViscosity={1}
                            maxBounds={MAP_BOUNDS}
                        >
                            <ImageOverlay url="/asset/map.png" opacity={1} bounds={MAP_BOUNDS} />
                            {pois.map(poi => (
                                <MarkerPoi
                                    key={poi.id}
                                    poi={poi}
                                    draggable
                                    onMove={handleMove}
                                />
                            ))}
                        </MapContainer>
                    </div>
                    <div className="poi-editor-sidebar">
                        <div className="poi-editor-sidebar-header">
                            <h2>POI {dirtyCount > 0 && <IonChip color="warning">{dirtyCount} modificati</IonChip>}</h2>
                            <IonSearchbar
                                placeholder="Cerca per titolo o id…"
                                value={search}
                                onIonInput={e => setSearch(e.detail.value ?? '')}
                                debounce={150}
                                style={{ padding: 0, minHeight: 36 }}
                            />
                            <div className="poi-editor-actions">
                                <IonButton
                                    size="small"
                                    color="primary"
                                    disabled={dirtyCount === 0 || saving}
                                    onClick={handleSave}
                                >
                                    <IonIcon slot="start" icon={saveOutline} />
                                    Salva
                                </IonButton>
                                <IonButton
                                    size="small"
                                    fill="outline"
                                    color="medium"
                                    onClick={handleReset}
                                >
                                    <IonIcon slot="start" icon={refreshOutline} />
                                    Ripristina
                                </IonButton>
                            </div>
                        </div>
                        <div className="poi-editor-list">
                            {filtered.length === 0 && (
                                <div className="poi-editor-empty">Nessun POI trovato</div>
                            )}
                            {filtered.map(poi => (
                                <div
                                    key={poi.id}
                                    className={`poi-editor-item${dirty[poi.id] ? ' poi-editor-item--dirty' : ''}`}
                                    onClick={() => {
                                        // TODO: vola al marker sulla mappa
                                    }}
                                >
                                    <span className="poi-editor-item-id">{poi.id}</span>
                                    <span className="poi-editor-item-title">{poi.title}</span>
                                    <span className="poi-editor-item-coords">
                                        <span>{poi.lat.toFixed(7)}</span>
                                        <span>{poi.lng.toFixed(7)}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <IonToast
                    isOpen={toast !== null}
                    message={toast?.message ?? ''}
                    color={toast?.color ?? 'medium'}
                    duration={3000}
                    onDidDismiss={() => setToast(null)}
                />
            </IonContent>
        </IonPage>
    );
};

export default PoiEditorPage;