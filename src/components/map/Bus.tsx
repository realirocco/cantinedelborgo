import React from "react";
import { BusDoc, client, databases } from '../appwrite/AppWrite'
import { LatLng } from "leaflet";
import MarkerPoi from "./MarkerPoi";

export default class Bus extends React.Component {

    declare props: Readonly<{id: string}>;
    declare state: Readonly<{position:LatLng}>;

    constructor(props: Readonly<{id: string}>){
        super(props);
    }

    async componentDidMount(){
        console.log("Inserito bus 12")
        let busDoc = await databases.getDocument(
            '6682a66d0020df652f44', // databaseId
            '6682a68a001936a925f5', // collectionId
            '12', // documentId
        ) as BusDoc;
        this.setState({position: new LatLng(busDoc.lat,busDoc.lng)});
        client.subscribe('databases.6682a66d0020df652f44.collections.6682a68a001936a925f5.documents.12', response => {
            let busDoc = response.payload as BusDoc;
            this.setState({position: new LatLng(busDoc.lat, busDoc.lng)})
        });
    }
   
    render(){
        return (<MarkerPoi minZoomForFull={1} poi={{
            id:"0",
            iconText: null,
            description: "",
            lat: this.state?.position?.lat ?? 0, 
            lng: this.state?.position?.lng ?? 0,
            icon: "fa-van-shuttle",
            title: "navetta 1"
        }} />
    );
    }
}