import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Map from '../components/map/Map';
import pois from '../data/pois.json'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const MapPage: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  },[location])

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Mappa dell'evento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Map center={[41.601378, 13.491210]} markers={pois}/>
      </IonContent>
    </IonPage>
  );
};

export default MapPage;
