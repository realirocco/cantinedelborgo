import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import pois from '../data/pois.json'

const ListPage: React.FC = () => {
  return (
    <IonPage>
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>Menù</IonTitle>
      </IonToolbar>
    </IonHeader> */}
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Mappa</IonTitle>
        </IonToolbar>
      </IonHeader>
    {pois
      .filter(poi => poi.tipo === "cantina")
      .map(poi => (
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{poi.nome}</IonCardTitle>
          <IonCardSubtitle>Cantina numero {poi.numero}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <p>{poi.descrizione}</p>
        </IonCardContent>
      </IonCard>
  ))};
  </IonContent>
  </IonPage>
)}
export default ListPage;