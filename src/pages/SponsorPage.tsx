import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonModal, IonPage, IonRow, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import sponsors from '../data/sponsor'
import { useRef, useState } from 'react';
import { closeOutline } from 'ionicons/icons';

function SponsorPage(){
  let modal = useRef<HTMLIonModalElement>(null);

  let [sponsor, setSponsor] = useState({})
  let [isOpen, setIsOpen] = useState(false)


  function CardSponsor(props:any){
    return(
      <IonCard className='ion-text-center' onClick={(e) => {setSponsor(props.sponsor); setIsOpen(true)}} >
        <img src={'asset/sposors/'+props.sponsor.image} alt={props.sponsor.name} />
      </IonCard>
    )
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sponsor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid fixed={true}>
          <IonRow class='ioion-align-items-center'>
            {sponsors
              .map( (sponsor) => (
                <IonCol size={sponsor.colSize} key={sponsor.id}>
                  <CardSponsor sponsor={sponsor} />
                </IonCol>
              ))}
          </IonRow>
  
        </IonGrid>
        <IonModal ref={modal} isOpen={isOpen} onDidDismiss={(e) => setIsOpen(false)} initialBreakpoint={0.7} breakpoints={[0.6,0.9]} >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}><IonIcon icon={closeOutline}/></IonButton>
              </IonButtons>
              <IonTitle>{sponsor.name}</IonTitle>
            </IonToolbar>
            <img src={'asset/sposors/'+sponsor.image} alt={sponsor.name} />
            <ul>
              {Object.entries(sponsor?.contacts || {})
                .map((entry, idx) => (<li key={idx}><b>{entry[0]}</b>: {entry[1]}</li>))
              }
            </ul>
          </IonHeader>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default SponsorPage;
