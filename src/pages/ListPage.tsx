import React, { useRef, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonButtons, IonButton, IonIcon } from '@ionic/react';
import pois from '../data/pois.json'
import Map from '../components/map/Map';
import { closeOutline } from 'ionicons/icons';

function ListPage(props:any){

  let modal = useRef<HTMLIonModalElement>(null);

  let [poi, setPoi] = useState({})
  let [isOpen, setIsOpen] = useState(false)

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Menù delle cantine</IonTitle>
          </IonToolbar>
        </IonHeader>
          {pois
            .filter(poi => poi.tipo === "cantina")
            .map(poi => (
              <IonCard key={poi.id} onClick={(e) => {setPoi(poi); setIsOpen(true)}}>
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
      <IonModal ref={modal} isOpen={isOpen} onDidDismiss={(e) => setIsOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}><IonIcon icon={closeOutline}/></IonButton>
            </IonButtons>
            <IonTitle size="large">{poi.nome}</IonTitle>
            <IonTitle size='small'>Cantina n.{poi.numero}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size='small'>{poi.descrizione}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Map center={[poi.latitudine, poi.longitudine]} markers={[poi]}/>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}
export default ListPage;