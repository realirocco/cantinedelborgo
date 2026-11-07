import React from "react";
import {
    type LayerProps,
    createElementObject,
    createTileLayerComponent,
    withPane,
} from '@react-leaflet/core'
import L from 'leaflet'
import type { Map as MaplibreMap } from 'maplibre-gl'
import '@maplibre/maplibre-gl-leaflet'

export interface MapLibreTileLayerProps extends L.LeafletMaplibreGLOptions, LayerProps {
    url: string,
    attribution: string,
}

export const MapLibreTileLayer = createTileLayerComponent<
    L.MaplibreGL,
    MapLibreTileLayerProps
>(
    function createTileLayer({ url, attribution, ...options }, context) {
        const layer = L.maplibreGL({ style: url, attribution: attribution, ...withPane(options, context) })
        return createElementObject(layer, context)
    },
    function updateTileLayer(layer, props, prevProps) {
        const { url, attribution } = props
        if (url != null && url !== prevProps.url) {
            // getMaplibreMap() è tipizzato (erroneamente) come Map di Leaflet dall'augmentation
            // di @maplibre/maplibre-gl-leaflet, quindi serve un cast alla Map di maplibre-gl
            ;(layer.getMaplibreMap() as unknown as MaplibreMap).setStyle(url)
        }

        if (attribution != null && attribution !== prevProps.attribution) {
            layer.options.attribution = attribution
        }
    },
)
