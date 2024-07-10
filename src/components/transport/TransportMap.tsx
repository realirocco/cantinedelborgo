import React, { useState } from 'react';
import L, { DivIcon, LatLng, LatLngExpression } from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './TransportMap.css'
import { Client, Databases, Models } from 'appwrite';
import track from '../../data/track';
import { Poi } from '../../util/Poi';
import { Bus } from './Bus';


function getAveragePosition(positions: LatLng[]):LatLng {
    if (positions.length === 0) {
        return new LatLng(0,0);
    }

    let totalLat = 0;
    let totalLng = 0;

    for (const position of positions) {
        totalLat += position.lat;
        totalLng += position.lng;
    }

    const averageLat = totalLat / positions.length;
    const averageLng = totalLng / positions.length;

    return new LatLng(averageLat,averageLng);
}

function ClickEvent() {
    const map = useMapEvents({ click(){}})
    var path = []
    map.on("click", (event) =>{
        path.push([event.latlng.lat,event.latlng.lng])
        console.log(JSON.stringify(path));
    })
    return("");
  }
  

  function LocalPosition(){
    const [lastPositions] = useState(new Array<LatLng>());
    const [position, setPosition] = useState(new LatLng(0,0));
    const map = useMapEvents({
        locationfound(e) {
            lastPositions.push(e.latlng);
            const averagePosition:LatLng = getAveragePosition(lastPositions);
            setPosition(averagePosition);
            if(lastPositions.length > 10){
                lastPositions.shift();
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
                <ClickEvent/>
                <Buses/>
            </MapContainer>
        );
    }
};


