import React from "react";
import L, { DivIcon, LatLngExpression } from "leaflet";
import { ImageOverlay, MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { Poi } from '../../util/Poi';
import LocalPosition from '../localposition/LocalPosition'
import MarkerPoi from "./MarkerPoi";


export default class EventMap extends React.Component {
    
    declare props: Readonly<{center: LatLngExpression, markers: Array<Poi>}>;
    
    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }
    render() {
        return (
            <MapContainer center={this.props.center} minZoom={18} zoom={18} maxZoom={21} maxBoundsViscosity={1}
                          maxBounds={[[41.6025,13.48876476287842],[41.599477,13.49585]]} >
                <ImageOverlay url={'/asset/map.png'}
                              opacity={1}
                              bounds={[[41.6025,13.48876476287842],[41.599477,13.49585]]} />
                <LocalPosition/>
                {this.props.markers.map(poi => (
                    <MarkerPoi key={poi.id} poi={poi}/>
                ))}
            </MapContainer>
        );
    }
};


