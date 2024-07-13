import React from 'react';
import L, { LatLngExpression } from "leaflet";
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import track from '../../data/track';
import { Poi } from '../../util/Poi';
import LocalPosition from '../localposition/LocalPosition';
import Bus from './Bus'
import './Map.css'

export default class TransportMap extends React.Component {
    
    declare props: Readonly<{center: LatLngExpression, markers: Array<Poi>}>;

    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }
    
    render() {
        return (
            <MapContainer center={this.props.center} minZoom={14} zoom={18} maxZoom={18} maxBoundsViscosity={1} >
                <TileLayer           
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={track} weight={10}/>
                <LocalPosition/>
                <Bus id="12"/>
            </MapContainer>
        );
    }
};


