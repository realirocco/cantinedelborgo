import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import Map from '../components/map/Map';
import pois from '../data/pois.json'

const MapPage: React.FC = () => {

  let params = useParams()
  let markers;
  let center;

  if(params.id){
    markers = pois.filter(poi => Number(poi.id) == Number(params.id));
  } else {
    markers = pois;
  }

  if(markers.length == 1){
    center = [markers[0].latitudine, markers[0].longitudine];
  } else {
    center = [41.601378, 13.491210];
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mappa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map center={center} markers={markers}/>
      </IonContent>
    </IonPage>
  );
};

export default MapPage;
