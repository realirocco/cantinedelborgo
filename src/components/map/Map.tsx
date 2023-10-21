import React, { useState } from 'react';
import { MapLibreTileLayer } from './MapLibreTileLayer'
import L, { DivIcon, LatLng } from "leaflet";
import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.css'


function LocalPosition(){
    const [position, setPosition] = useState(new LatLng(0,0));
    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
        }
    });
    map.locate({
        watch: true,
        timeout: 1000,
        enableHighAccuracy: true
    })
    
    return(
        <Marker position={position} icon={customIcon(0, "qui")} >
            <Popup>Sei qui!</Popup>
        </Marker>
    )
}

function iconContent(text:number, type:string){
    return "<i class="+type+">"+text+"</i>";
}

function customIcon(text:number, type:string){
    return new DivIcon({
        iconSize: L.point([30,30]),
        className: "map-icon",
        html: iconContent(text, type),
    });
}


export default class Map extends React.Component {
    
    declare props: Readonly<{}>;
    
    componentDidMount(){
        window.dispatchEvent(new Event('resize')); 
    }
    render() {
        return (
            <MapContainer center={this.props.center} minZoom={18} zoom={19} maxZoom={21} maxBoundsViscosity={0.7}
                maxBounds={[[41.599058725192066,13.494269388870377],[41.60354185670721,13.488181539478814]]}>
                <MapLibreTileLayer
                    attribution='&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/c25fe359-74e8-45c6-8d2d-bf5da6a2b36b/style.json?key=SwF3JvuRnEwDx2MufjH5"
                />
                {this.props.markers.map(poi => (
                    <Marker
                        key={poi.id}
                        icon={customIcon(poi.numero, poi.tipo)}
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
                <LocalPosition/>
            </MapContainer>
        );
    }
};


