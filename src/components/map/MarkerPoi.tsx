import React from "react";
import L, { DivIcon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Poi } from '../../util/Poi'
import './MarkerPoi.css'


export default class MarkerPoi extends React.Component {

    declare props: Readonly<{ poi: Poi }>;

    customIcon(text: string | null, type: string): DivIcon {
        return new DivIcon({
            iconSize: L.point([30, 30]),
            className: `map-icon ${type}`,
            html: text ?? ""
        });
    }

    render() {
        return (
            <Marker
                icon={this.customIcon(this.props.poi.iconText, this.props.poi.icon)}
                position={[this.props.poi.lat, this.props.poi.lng]}>
                <Popup>
                    <h5>{this.props.poi.title}</h5>
                    <p>{this.props.poi.description}</p>
                </Popup>
            </Marker>
        )
    }
}

