import React, { useState } from 'react';
import L, { DivIcon, LatLng } from "leaflet";
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { locate } from 'ionicons/icons';

var LocalPositionIcon = new DivIcon({
    iconSize: L.point([30,30]),
    className: "map-icon",
    html: '<i class="qui">Sei qui</i>',
});

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
        }
    });
    map.locate({
        watch: true,
        timeout: 1000,
        enableHighAccuracy: true
    })
    return(
        <Marker position={position} icon={LocalPositionIcon}>
            <Popup>Sei qui!</Popup>
        </Marker>
    )
}