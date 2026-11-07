import React from "react";
import { ImageOverlay, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.css'
import { Poi } from '../../util/Poi';
import LocalPosition from '../localposition/LocalPosition'
import MarkerPoi from "./MarkerPoi";
import { MAP_BOUNDS } from "./mapConfig";


export default class EventMap extends React.Component {
    
    declare props: Readonly<{center?: [number, number], markers: Array<Poi>}>;
    
    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }
    render() {
        return (
            <MapContainer center={this.props.center ?? [41.601378, 13.491210]} minZoom={18} zoom={19} maxZoom={21} maxBoundsViscosity={1}
                          maxBounds={MAP_BOUNDS} >
                <ImageOverlay url={'/asset/map.png'}
                              opacity={1}
                              bounds={MAP_BOUNDS} />
                <LocalPosition/>
                {this.props.markers.map(poi => (
                    <MarkerPoi key={poi.id} poi={poi}/>
                ))}
            </MapContainer>
        );
    }
};


