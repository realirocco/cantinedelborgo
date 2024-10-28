import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": "1",
        "title": "L'S'nnamb'l'",
        "iconText": "1",
        "description": "Sagn’ i faciuor’, stinco di maiale arrosto",
        "icon": null,
        "lat": 41.60096665639647,
        "lng": 13.49175810813904
    },
    {
        "id": "2",
        "title": "Piùbbuono Gluten free backery",
        "iconText": "2",
        "description": "Menù per celiaci, vegani e vegetariani",
        "icon": null,
        "lat": 41.600885,
        "lng":  13.491951
    },
    {
        "id": "3",
        "title": "La Castagnaccia",
        "iconText": "3",
        "description": "Castagne",
        "icon": null,
        "lat": 41.601055910907455,
        "lng": 13.491413444280626
    },
    {
        "id": "4",
        "title": "Dolci e dolcezze",
        "iconText": "4",
        "description": "Dolci forno a legna, caffè e prosecchino",
        "icon": null,
        "lat": 41.60109401953744,
        "lng": 13.49157974123955
    },
    {
        "id": "5",
        "title": "La patata sfiziosa",
        "iconText": "5",
        "description": "Patate a spirale, chips, patate stick, patate capellini",
        "icon": null,
        "lat": 41.60118126815826,
        "lng": 13.49163204431534
    },
    
    {
        "id": "6",
        "title": "I compari",
        "iconText": "6",
        "description": "Pappardelle al cinghiale parmigiana e melanzane",
        "icon": null,
        "lat": 41.60130963373073,
        "lng": 13.491528779268265
    },
    {
        "id": "7",
        "title": "C'ulem' prua'",
        "iconText": "7",
        "description": "Caciocavallo impiccato",
        "icon": null,
        "lat": 41.60127854521707,
        "lng": 13.491377234458925
    },
    {
        "id": "8",
        "title": "Agl' cucuzzar",
        "iconText": "8",
        "description": "Gnocchi di zucca con speck e noci",
        "icon": null,
        "lat": 41.6014008934746,
        "lng": 13.491412103176119
    },
    {
        "id": "9",
        "title": "L' sciorn'",
        "iconText": "9",
        "description": "P’zzell’ d’ Natal’ semplici, con uva passa e con baccalà",
        "icon": null,
        "lat": 41.60137181071309,
        "lng": 13.49132761359215
    },
    {
        "id": "10",
        "title": "Ess' Chiss'",
        "iconText": "10",
        "description": "Polenta con spuntature e salsicce, focaccia ripiena (mozzarella e ricotta / cicoria e patate)",
        "icon": null,
        "lat": 41.60118527958626,
        "lng": 13.491328954696657
    },
    {
        "id": "11",
        "title": "Gl’ uerr’ ‘nguastit’",
        "iconText": "11",
        "description": "Tagliolini fatti a mano con guanciale e tartufo",
        "icon": null,
        "lat": 41.601112, 
        "lng": 13.491120
    },
    {
        "id": "12",
        "title": "Te'... Azz'ppat' i buat'",
        "iconText": "12",
        "description": "Vin brulè con ciambelline al vino",
        "icon": null,
        "lat": 41.601181, 
        "lng": 13.490996
    },
    {
        "id": "13",
        "title": "Pasticceria Le Rose",
        "iconText": "13",
        "description": "Maritozzi, bombe, ciambele, pasticceria assortita, caffè",
        "icon": null,
        "lat": 41.601233173699724,
        "lng": 13.490936885910036
    },
    {
        "id": "14",
        "title": "Gl' cagl'nar'",
        "iconText": "14",
        "description": "Crepes in brodo, frittate in vari gusti",
        "icon": null,
        "lat": 41.601323673699724,
        "lng": 13.490856885910036
    },
    {
        "id": "15",
        "title": "Pro loco Strangolagalli",
        "iconText": "15",
        "description": "Trippetta al sugo, coratella",
        "icon": null,
        "lat": 41.60162051804348,
        "lng": 13.491192162036898
    },
    {
        "id": "16",
        "title": "La contadina",
        "iconText": "16",
        "description": "Fettuccine al ragù, mortadella alla piastra",
        "icon": null,
        "lat": 41.60167667763058,
        "lng": 13.491125106811525
    },
    {
        "id": "17",
        "title": "Gl' uagliun'",
        "iconText": "17",
        "description": "Crepes alla nutella, caffè",
        "icon": null,
        "lat": 41.60159494535815,
        "lng": 13.491023853421211
    },
    {
        "id": "18",
        "title": "Gl' magnun'",
        "iconText": "18",
        "description": "Gnocchi cozze guanciale e pachino, gnocchi alla norcina",
        "icon": null,
        "lat": 41.601580404022755,
        "lng": 13.490895107388496
    },
    {
        "id": "19",
        "title": "Chiss' Bulicchie",
        "iconText": "19",
        "description": "Pecora al sugo, zita al sugo di pecora",
        "icon": null,
        "lat": 41.60179050092951,
        "lng": 13.49065236747265
    },
    {
        "id": "20",
        "title": "Da Fabrizio",
        "iconText": "20",
        "description": "Panini con salsiccia, wurstel, hamburger, prosciutto crudo e porchetta",
        "icon": null,
        "lat": 41.60165060354264,
        "lng": 13.490588665008547
    },
    {
        "id": "21",
        "title": "Peppino e Rosetta",
        "iconText": "21",
        "description": "Stese fritte semplici e farcite, panzerotti",
        "icon": null,
        "lat": 41.601297599469135,
        "lng": 13.490720093250276
    },
    {
        "id": "22",
        "title": "Gl' Zapp'",
        "iconText": "22",
        "description": "Arrosticini di pecora",
        "icon": null,
        "lat": 41.6009740634263,
        "lng": 13.49084120938076973
    },
    {
        "id": "23",
        "title": "Da Ciccio e Paoletta ci fai pure la scarpetta",
        "iconText": "23",
        "description": "Fini fini pomodoro e basilico, code d' soreca funghi e salsiccia",
        "icon": null,
        "lat": 41.6009640634263,
        "lng": 13.49100120938076973
    },
    {
        "id": "24",
        "title": "Azienda agricola Greco",
        "iconText": "24",
        "description": "Cartocci di salumi, taglieri, panini con porchetta",
        "icon": null,
        "lat": 41.60089495184036 ,
        "lng": 13.491130471229555 
    },    
    {
        "id": "25",
        "title": "Le bontà siciliane",
        "iconText": "25",
        "description": "Arancine, cannoli siciliani, pane e panelle, caffè",
        "icon": null,
        "lat": 41.60087138459124,
        "lng": 13.491587787866594
    },

    {
        "id": "26",
        "title": "Azienda agricola Le Ginestre",
        "iconText": "26",
        "description": "Kebab di bufala, arrosticini di bufala, spezzatino di bufala",
        "icon": null,
        "lat": 41.6008663702818,
        "lng": 13.49169909954071
    },
    {
        "id": "27",
        "title": "La Radicula",
        "iconText": "27",
        "description": "Grigliata mista alla brace: spuntature, bistecca di capocollo, salsiccia e pancetta",
        "icon": null,
        "lat": 41.600774106918635,
        "lng": 13.492175191640856
    },
       {
        "id": "28",
        "title": "La fraschetta del pirata",
        "iconText": "28",
        "description": "Gnocchetti alla crema di scampi, cous cous con pesce e verdure, sangrìa",
        "icon": null,
        "lat": 41.60068284628836,
        "lng": 13.492412567138674
    },
    {
        "id": "29",
        "title": "Dalla padella alla brace",
        "iconText": "29",
        "description": "Hamburger gourmet, maialino al girarrosto",
        "icon": null,
        "lat": 41.600701900716324,
        "lng": 13.492580205202104
    },
    {
        "id": "30",
        "title": "#ApeKorina",
        "iconText": "30",
        "description": "PanCiccia (panino provola di bufala e salsiccia), formaggi produzione propria)",
        "icon": null,
        "lat": 41.60078413555145,
        "lng": 13.492368310689928
    },
    {
        "id": "31",
        "title": "Pizza da Damiano",
        "iconText": "31",
        "description": "Pizze tonde, calzoni ripieni, patatine fritte, supplì",
        "icon": null,
        "lat": 41.60083528155459,
        "lng": 13.492261022329332
    },
    {
        "id": "32",
        "title": "Le delizie del mare",
        "iconText": "32",
        "description": "Cartoccio di calamari e gamberi, panino con polpo alla piastra",
        "icon": null,
        "lat": 41.60087138459124,
        "lng": 13.492176532745363
    },
    {
        "id": "101",
        "title": "Ingresso",
        "iconText": null, 
        "description": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "icon": "fa-wine-glass",
        "lat": 41.60101679939535,
        "lng": 13.491929769515993
    },
    {
        "id": "102",
        "title": "Ingresso",
        "iconText": null, 
        "description": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "icon": "fa-wine-glass",
        "lat": 41.60099043896353,
        "lng": 13.490590851516725
    },
    {
        "id": "201",
        "title": "Mercatino",
        "iconText": null, 
        "description": "Mercatino dell'artigianato",
        "icon": "fa-store",
        "lat": 41.60122158488242,
        "lng": 13.492090702056887
    },
    {
        "id": "301",
        "title": "Spettacolo musicale",
        "iconText": null, 
        "description": "",
        "icon": "fa-music",
        "lat": 41.60112109670826,
        "lng": 13.490840792655947
    },
    {
        "id": "302",
        "title": "Spettacolo musicale",
        "iconText": null, 
        "description": "",
        "icon": "fa-music",
        "lat": 41.601313645150746,
        "lng": 13.491320908069612
    },
    {
        "id": "303",
        "title": "Spettacolo musicale",
        "iconText": null, 
        "description": "",
        "icon": "fa-music",
        "lat": 41.60092954483027,
        "lng": 13.491640516702654
    },
    {
        "id": "304",
        "title": "Spettacolo musicale",
        "iconText": null, 
        "description": "",
       "icon": "fa-music",
        "lat": 41.60070284628836,
        "lng": 13.492312567138674
    },
    {
        "id": "401",
        "title": "Artisti di strada",
        "iconText": null, 
        "description": "Artisti di strada.",
        "icon": "fa-fire",
        "lat": 41.60093957916087,
        "lng": 13.491487205028534
    },
    {
        "id": "501",
        "title": "Associazione Sogni",
        "iconText": null,
        "description": "Animazione per bambini",
        "icon": "fa-person-breastfeeding",
        "lat": 41.60153828427417,
        "lng": 13.491087555885317
    },
    {
        "id": "601",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Sebac.",
        "icon": "fa-restroom",
        "lat": 41.60187323580053,
        "lng": 13.491272628307344
    },
    {
        "id": "602",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Sebac.",
        "icon": "fa-restroom",
        "lat": 41.601127142433736,
        "lng": 13.490543912858965
    },
    {
        "id": "603",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Bagni pubblici comunali.",
        "icon": "fa-restroom",
        "lat": 41.600787144140995,
        "lng": 13.492290526628496
    },
    {
        "id": "701",
        "title": "Punto primo soccorso",
        "iconText": null, 
        "description": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "icon": "fa-ambulance",
        "lat": 41.600820238616706,
        "lng": 13.492627143859865
    },
    {
        "id": "702",
        "title": "Punto primo soccorso",
        "iconText": null, 
        "description": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "icon": "fa-ambulance",
        "lat": 41.60089043896353,
        "lng": 13.490620851516725
    },
];

export default pois;