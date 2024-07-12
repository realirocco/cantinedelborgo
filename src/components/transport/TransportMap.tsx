import React, { useState } from 'react';
import L, { DivIcon, LatLng, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './TransportMap.css'
import { Client, Databases, Models } from 'appwrite';
import track from '../../data/track';
import { Poi } from '../../util/Poi';
import LocalPosition from '../localposition/LocalPosition';

function Buses(){
    let client = new Client()           
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6682a48a000d4713ad45');
    let databases = new Databases(client);
    const [buses, setBuses] = useState(new Array<Models.Document>);

    let promise = databases.listDocuments(
        '6682a66d0020df652f44',
        '6682a68a001936a925f5'
    )
    promise.then( (response) => {
        setBuses(response.documents)
        console.log("query")
    }, function (error) {
        console.log(error);
    });     
    return(
        buses.map( (bus) => (
            <Marker position={new LatLng(bus.lat, bus.lng)} icon={customIcon(0, "qui")} >
                <Popup>Navetta</Popup>
            </Marker>
        ))
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
                <Buses/>
            </MapContainer>
        );
    }
};


