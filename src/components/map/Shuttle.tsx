import React from "react";
import { ShuttleDoc, client, databases } from '../appwrite/AppWrite'
import MarkerPoi from "./MarkerPoi";

export default class Shuttles extends React.Component {

    declare state: Readonly<{shuttles: Map<String,ShuttleDoc>}>;

    async componentDidMount(){
        this.setState({shuttles: new Map<String,ShuttleDoc>()})
        let busDoc = await databases.listDocuments(
            '6682a66d0020df652f44', // databaseId
            '6682a68a001936a925f5', // collectionId
        );
        let shuttleDocList = busDoc.documents as ShuttleDoc[];
        shuttleDocList.forEach( shuttleDoc => this.setState({shuttles: this.state.shuttles.set(shuttleDoc.$id,shuttleDoc)}))
        client.subscribe(shuttleDocList.map(shuttleDoc => `databases.6682a66d0020df652f44.collections.6682a68a001936a925f5.documents.${shuttleDoc.$id}`), response => {
            let shuttleDoc = response.payload as ShuttleDoc;
            this.setState({shuttles: this.state.shuttles.set(shuttleDoc.$id,shuttleDoc)})
        });
    }
   
    render(){
        return (
            <div>
                {Array.from(this.state?.shuttles?.values() ?? []).map( shuttle => (
                    <MarkerPoi 
                        key={shuttle.$id}
                        minZoomForFull={1} 
                        poi={{
                            id: shuttle.$id,
                            iconText: null,
                            description: "",
                            lat: shuttle.lat ?? 0, 
                            lng: shuttle.lng ?? 0,
                            icon: "fa-van-shuttle",
                            title: shuttle.name ?? ""
                        }} />)
                )}
            </div>);
    }
}