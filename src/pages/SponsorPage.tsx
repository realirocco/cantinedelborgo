import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import sponsors from '../data/sponsor.json'
const SponsorPage: React.FC = () => {
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
              .filter((s) => s.value > 100)
              .map( (sponsor) => (
                <IonCol size="12">
                  <img src={'asset/sposors/'+sponsor.image} alt={sponsor.name} />
                  <p>{sponsor.name}</p>
                </IonCol>
              ))}
          </IonRow>
          <IonRow class='ioion-align-items-center'>
            {sponsors
              .filter((s) => s.value <= 100 && s.value > 50)
              .map( (sponsor) => (
                <IonCol size="6">
                  <img src={'asset/sposors/'+sponsor.image} alt={sponsor.name} />
                  <p>{sponsor.name}</p>
                </IonCol>
              ))}
          </IonRow>
          <IonRow class='ioion-align-items-center'>
            {sponsors
              .filter((s) => s.value <= 50)
              .map( (sponsor) => (
                <IonCol size="4">
                  <img src={'asset/sposors/'+sponsor.image} alt={sponsor.name} />
                  <p>{sponsor.name}</p>
                </IonCol>
              ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SponsorPage;
