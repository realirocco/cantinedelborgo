import React, { useRef, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonButtons, IonButton, IonIcon, IonSearchbar } from '@ionic/react';
import pois from '../data/pois'
import Map from '../components/map/EventMap';
import { closeOutline } from 'ionicons/icons';
import { useLocation } from 'react-router';
import { Poi } from '../util/Poi';
import './ListPage.css'

function filterPoi(poi:Poi, filter:string, type: string){
  let title = poi.title?.toLowerCase() ?? ""
  let description = poi.description?.toLowerCase() ?? ""
  let icon = poi.icon;
  return icon==type && (title.indexOf(filter) > -1 || description.indexOf(filter) > -1)
}

function highlight(text:string|undefined|null, search:string){
  var highlight = text || "";
  if(search && text){
    var searchString = search.replace(/[^a-zA-Z0-9]/,search);
    var searchRegExp = new RegExp('(' + searchString + ')', "gi");
    highlight = text.replace(searchRegExp, "<b>$1</b>");
  }
  return <span dangerouslySetInnerHTML={{__html:highlight}}/>
}

function ListPage(props:any){

  let modal = useRef<HTMLIonModalElement>(null);
  let searchbar = useRef<HTMLIonSearchbarElement>(null);

  let voidPoi:Poi = {id:"0", title:"", icon:"", iconText:"", lat:0, lng:0, description:""};
  let [poi, setPoi] = useState(voidPoi)
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
            .filter(poi => filterPoi(poi, searchValue, "cantina"))              
            .map(poi => (
              <IonCard key={poi.id} onClick={(e) => {setPoi(poi); setIsOpen(true)}}>
                <IonCardHeader>
                  <IonCardSubtitle>Cantina numero {poi.iconText}</IonCardSubtitle>
                  <IonCardTitle className='highlight'>{highlight(poi.title,searchValue)}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p  className='highlight'>{highlight(poi.description,searchValue)}</p>
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
            <IonTitle size='small'>Cantina {poi.iconText}</IonTitle>
            <IonTitle size="large">{poi.title}</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonTitle size='small'>{poi.description}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Map center={[poi.lat, poi.lng]} markers={[poi]}/>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}
export default ListPage;