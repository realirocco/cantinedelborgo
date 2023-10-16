import React from 'react';
import {MapLibreTileLayer} from './MapLibreTileLayer'
import { DivIcon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import pois from './pois.json'
import './Map.css'



export default class Map extends React.Component {

    iconContent(text:number, type:string){
         return "<i class="+type+">"+text+"</i>";
    }

    customIcon(text:number, type:string){
        return new DivIcon({
            iconSize: L.point([30,30]),
            className: "map-icon",
            html: this.iconContent(text, type),
        });
    }

    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }

    render() {
            
        return (
            <MapContainer center={[41.601378, 13.491210]} maxNativeZoom={18} minZoom={18} zoom={18} maxZoom={20} >
                <MapLibreTileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/c25fe359-74e8-45c6-8d2d-bf5da6a2b36b/style.json?key=SwF3JvuRnEwDx2MufjH5"
                />
                {pois.map(poi => (
                    <Marker
                        key={poi.id}
                        icon={this.customIcon(poi.numero, poi.tipo)}
                        position={[
                            poi.latitudine,
                            poi.longitudine
                        ]}>
                        <Popup>
                            <h5>{poi.nome}</h5>
                            <p>{poi.descrizione}</p>
                        </Popup>
                    </Marker>
                 ))}
            </MapContainer>
        );
    }
};


