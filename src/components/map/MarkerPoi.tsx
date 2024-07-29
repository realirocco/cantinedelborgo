import React, { useState } from "react";
import ReactDOMServer  from "react-dom/server";
import L, { DivIcon, Point } from "leaflet";
import { useMapEvents, ZoomControl } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import { Poi } from '../../util/Poi'
import './MarkerPoi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlass, faMusic, faAmbulance, faPalette, IconDefinition, faRestroom, faStore, faFire, faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons";

export default function  MarkerPoi(props: Readonly<{ poi: Poi}>) {
    
    const mapIcon:{ [id: string]: IconDefinition; } = {
        "fa-wine-glass": faWineGlass,
        "fa-music": faMusic,
        "fa-ambulance": faAmbulance,
        "fa-palette": faPalette,
        "fa-restroom": faRestroom,
        "fa-store": faStore,
        "fa-fire":faFire,
        "fa-person-breastfeeding": faPersonBreastfeeding
    }
    
    var [style, setStyle] = useState("full");
    
    var map = useMapEvents({
        zoomend(e) {
            console.log(e.target._zoom)
            if (e.target._zoom <= 18){
                setStyle("mini");
            }else{
                setStyle("full");
            }
        }
    })
    
    function markerElement(poi: Poi){
        return(
            <span className={`map-marker map-marker-${style}`}>
                <span>{poi.iconText}</span>
                {poi.icon != null ? (<FontAwesomeIcon className="map-marker-icon" icon={mapIcon[poi.icon ?? ""]} /> ) : (<i></i>)} 
            </span>
        );
    }
    
    
    function customIcon(poi: Poi, style?: "mini"): DivIcon {
        return L.divIcon({
            iconSize: L.point(0,0),
            html: ReactDOMServer.renderToString(markerElement(poi))
        });
    }
    
    return (
        <Marker
        icon={customIcon(props.poi)}
        position={[props.poi.lat, props.poi.lng]}>
        <Popup>
        <h5>{props.poi.title}</h5>
        <p>{props.poi.description}</p>
        </Popup>
        </Marker>
    )
}

