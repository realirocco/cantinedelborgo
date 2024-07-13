import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bus, heart, list, map, square } from 'ionicons/icons';
import EventMapPage from './pages/EventMapPage';
import TransportPage from './pages/TransportPage';
import ListPage from './pages/ListPage';
import SponsorPage from './pages/SponsorPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/map">
            <EventMapPage />
          </Route>
          <Route exact path="/list">
            <ListPage />
          </Route>
          <Route exact path="/transport">
            <TransportPage />
          </Route>   
          <Route path="/sponsor">
            <SponsorPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/map" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="map" href="/map">
            <IonIcon aria-hidden="true" icon={map} />
            <IonLabel>Mappa</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list" href="/list">
            <IonIcon aria-hidden="true" icon={list} />
            <IonLabel>Menù</IonLabel>
          </IonTabButton>
          <IonTabButton tab="transport" href="/transport">
            <IonIcon aria-hidden="true" icon={bus} />
            <IonLabel>Navetta</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sponsor" href="/sponsor">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Sponsor</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
