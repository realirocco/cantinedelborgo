import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TransportMap from '../components/map/TransportMap';
import pois from '../data/pois'
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const TransportPage: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  },[location])

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Navetta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TransportMap center={[41.601378, 13.491210]} markers={pois}/>
      </IonContent>
    </IonPage>
  );
};

export default TransportPage;
