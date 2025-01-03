import React from 'react';
import Shuttle from './Shuttle'
import LocalPosition from '../localposition/LocalPosition';
import { MapLibreTileLayer } from './MapLibreTileLayer';
import { LatLngExpression } from "leaflet";
import { MapContainer, Polyline } from 'react-leaflet';
import { Poi } from '../../util/Poi';
import {track2, track1} from '../../data/track';
import './Map.css'
import 'leaflet/dist/leaflet.css'

export default class TransportMap extends React.Component {
    
    declare props: Readonly<{center: LatLngExpression, markers: Array<Poi>}>;

    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }
    
    render() {
        return (
            <MapContainer center={this.props.center} minZoom={14} zoom={18} maxZoom={18} maxBoundsViscosity={1} >
                <MapLibreTileLayer url="https://api.maptiler.com/maps/c25fe359-74e8-45c6-8d2d-bf5da6a2b36b/style.json?key=SwF3JvuRnEwDx2MufjH5" attribution='' />
                <Polyline positions={track2} color="#70243A" weight={8} />
                <Polyline positions={track1} color="#FF0000" weight={8} />
                <LocalPosition />
                <Shuttle />
            </MapContainer>
        );
    }
};


