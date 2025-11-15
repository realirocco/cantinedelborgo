import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonModal, IonPage, IonRow, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import sponsors from '../data/sponsor'
import { useRef, useState } from 'react';
import { closeOutline } from 'ionicons/icons';
import { Sponsor } from '../util/Sponsor'

function SponsorPage() {
  let modal = useRef<HTMLIonModalElement>(null);

  let [sponsor, setSponsor] = useState<Sponsor>({ id: 0, name: "", colSize: "0", image: "" })
  let [isOpen, setIsOpen] = useState(false)


  function CardSponsor(props: any) {
    return (
      <img
        src={'asset/sposors/' + props.sponsor.image}
        alt={props.sponsor.name}
        style={{ width: "100%", border: "3px solid", color: "#7A1E38" }}
        onClick={(e) => { setSponsor(props.sponsor); setIsOpen(true) }} />
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
          {Array.from(
            sponsors
              // 1️⃣ Ordina per colSize (decrescente)
              .sort((a, b) => Number(b.colSize) - Number(a.colSize))
              // 2️⃣ Raggruppa in una Map che mantiene l’ordine
              .reduce((groups, sponsor) => {
                const key = String(sponsor.colSize)
                if (!groups.has(key)) groups.set(key, [])
                groups.get(key)!.push(sponsor)
                return groups
              }, new Map<string, typeof sponsors>())
          ).map(([colSize, group]) => (
            <IonRow key={colSize} className="ion-align-items-center">
              {group.map(sponsor => (
                <IonCol
                  key={sponsor.id}
                  size={sponsor.colSize}
                  className="ion-text-center">
                  <CardSponsor sponsor={sponsor} />
                </IonCol>
              ))}
            </IonRow>
          ))}

        </IonGrid>
        <IonModal ref={modal} isOpen={isOpen} onDidDismiss={(e) => setIsOpen(false)} initialBreakpoint={0.7} breakpoints={[0.6, 0.9]} >
          <IonHeader >
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}><IonIcon icon={closeOutline} /></IonButton>
              </IonButtons>
              <IonTitle>{sponsor.name}</IonTitle>
            </IonToolbar>
            <img src={'asset/sposors/' + sponsor.image} alt={sponsor.name} style={{width:"100%"}}/>
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
