import React, { useRef, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonButtons, IonButton, IonIcon, IonSearchbar } from '@ionic/react';
import pois from '../data/pois.json'
import Map from '../components/map/Map';
import { closeOutline } from 'ionicons/icons';
import { useLocation } from 'react-router';

function filterPoi(poi:any, filter:String){
  let nome = poi.nome.toLowerCase()
  let descrizione = poi.descrizione.toLowerCase()
  return nome.indexOf(filter) > -1 || descrizione.indexOf(filter) > -1
}

function highlight(text:string|undefined, search:string){
  var highlight = text || "";
  if(search && text){
    var searchString = search.replace(/[^a-zA-Z0-9]/,search);
    var searchRegExp = new RegExp('(' + searchString + ')', "gi");
    highlight = text.replace(searchRegExp, "<strong>$1</strong>");
  }
  return <span dangerouslySetInnerHTML={{__html:highlight}}/>
}

function ListPage(props:any){

  let modal = useRef<HTMLIonModalElement>(null);
  let searchbar = useRef<HTMLIonSearchbarElement>(null);

  let [poi, setPoi] = useState({})
  let [isOpen, setIsOpen] = useState(false)
  let [searchValue, setSearchValue] = useState("")

  let location = useLocation();

  React.useEffect(() => {
    setIsOpen(false)
  }, [location]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Menù delle cantine</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar ref={searchbar} placeholder="Cerca il menù o la cantina" onIonInput={(e) => setSearchValue(e.detail.value?.toLowerCase())} />
          </IonToolbar>
        </IonHeader>
          {pois
            .filter(poi => poi.tipo === "cantina")
            .filter(poi => filterPoi(poi, searchValue))              
            .map(poi => (
              <IonCard key={poi.id} onClick={(e) => {setPoi(poi); setIsOpen(true)}}>
                <IonCardHeader>
                  <IonCardSubtitle>Cantina numero {poi.numero}</IonCardSubtitle>
                  <IonCardTitle>{highlight(poi.nome,searchValue)}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{highlight(poi.descrizione,searchValue)}</p>
                </IonCardContent>
              </IonCard>
            ))};
      </IonContent>
      <IonModal ref={modal} isOpen={isOpen} onDidDismiss={(e) => setIsOpen(false)} initialBreakpoint={0.80} >
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