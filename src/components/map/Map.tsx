import React, { useState } from 'react';
import L, { DivIcon, LatLng } from "leaflet";
import { ImageOverlay, MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Map.css'


function LocalPosition(){
    const [position, setPosition] = useState(new LatLng(0,0));
    const map = useMapEvents({
        locationfound(e) {
            if(e.latlng.distanceTo(position) > 10){
                setPosition(e.latlng)
            }
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
            <MapContainer center={this.props.center} minZoom={18} zoom={18} maxZoom={21} maxBoundsViscosity={1}
                 maxBounds={[[41.6025,13.48876476287842],[41.599477,13.49585]]} >
                <ImageOverlay
                    url={'/asset/map.png'}
                    opacity={1}
                    bounds={[[41.6025,13.48876476287842],[41.599477,13.49585]]} />
                    
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


