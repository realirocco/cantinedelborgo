import { useState } from 'react';
import { LatLng } from "leaflet";
import { useMapEvents } from 'react-leaflet';
import MarkerPoi from '../map/MarkerPoi';


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

export default function LocalPosition(){
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
            console.log(e.latlng)
        }
    });
    map.locate({
        watch: true,
        timeout: 1000,
        enableHighAccuracy: true
    })
    return(
        <MarkerPoi minZoomForFull={1} poi={{
            id: "0",
            lat: position?.lat ?? 0, 
            lng: position?.lng ?? 0,
            icon: "fa-street-view",
            iconText: "",
            title: "tu sei qui",
            description: ""
        }}/>
    );
}