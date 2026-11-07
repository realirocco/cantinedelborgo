import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": "1",
        "title": "Pangò",
        "iconText": "1",
        "description": "Pangoccioli - Crumble cookies - Caffè",
        "icon": null,
        "lat": 41.6008894,
        "lng": 13.4918654
    },
    {
        "id": "2",
        "title": "Magna che te passa",
        "iconText": "2",
        "description": "Pizza masardona - Spiedino di angus",
        "icon": null,
        "lat": 41.6010509,
        "lng": 13.4918949
    },
    {
        // FIXME: sul poster è "L' S'NNANB'L'" (N), mentre lo storico riporta "L'S'nnamb'l'" (M). Verificare la grafia dialettale.
        "id": "3",
        "title": "L' S'nnamb'l'",
        "iconText": "3",
        "description": "Sagn' i faciuor' - Ricco tagliere",
        "icon": null,
        "lat": 41.6009677,
        "lng": 13.491805
    },
    {
        "id": "4",
        "title": "Gl' uagliun'",
        "iconText": "4",
        "description": "Crepes alla nutella - Caffè",
        "icon": null,
        "lat": 41.6009707,
        "lng": 13.4916253
    },
    {
        "id": "5",
        "title": "L' Sciorn'",
        "iconText": "5",
        "description": "P'zzell' d' Natal' semplici, con uva passa, con baccalà",
        "icon": null,
        "lat": 41.6009827,
        "lng": 13.4915341
    },
    {
        "id": "6",
        "title": "Chiss' M'nzu'",
        "iconText": "6",
        "description": "Vin brulé - Sangria - Ciambelline al vino",
        "icon": null,
        "lat": 41.6008955,
        "lng": 13.4914604
    },
    {
        "id": "7",
        "title": "La castagnaccia",
        "iconText": "7",
        "description": "Caldarroste",
        "icon": null,
        "lat": 41.6010409,
        "lng": 13.4914041
    },
    {
        "id": "8",
        "title": "Zio Pie'",
        "iconText": "8",
        "description": "Tris di bombette con patate country - Bun con pulled pork",
        "icon": null,
        "lat": 41.601091,
        "lng": 13.4915797
    },
    {
        "id": "9",
        "title": "La patata sfiziosa",
        "iconText": "9",
        "description": "Patate a spirale - Chips - Patate stick - Patate capellini",
        "icon": null,
        "lat": 41.6011853,
        "lng": 13.4916173
    },
    {
        "id": "10",
        "title": "Trattoristi nel sangue",
        "iconText": "10",
        "description": "Rigatoni all'amatriciana",
        "icon": null,
        "lat": 41.6012976,
        "lng": 13.4915529
    },
    {
        "id": "11",
        "title": "Dolci e dolcezze",
        "iconText": "11",
        "description": "Dolci forno a legna - Semifreddi - Caffè",
        "icon": null,
        "lat": 41.6012836,
        "lng": 13.4913772
    },
    {
        "id": "12",
        "title": "C' ulem' prua'",
        "iconText": "12",
        "description": "Bruschette di caciocavallo impiccato con prosciutto, guanciale, alici, salsa tartufata",
        "icon": null,
        "lat": 41.6013417,
        "lng": 13.4914108
    },
    {
        "id": "13",
        "title": "Agl' cucuzzar'",
        "iconText": "13",
        "description": "Gnocchi di zucca con speck e noci",
        "icon": null,
        "lat": 41.6013668,
        "lng": 13.4913316
    },
    {
        "id": "14",
        "title": "Ess' chiss'",
        "iconText": "14",
        "description": "Polenta con spuntature e salsicce - Focaccia ripiena con cicoria e patate/mortadella e stracciata",
        "icon": null,
        "lat": 41.6012013,
        "lng": 13.4913129
    },
    {
        "id": "15",
        "title": "Pro loco Strangolagalli",
        "iconText": "15",
        "description": "Spezzatino di coratella - Cannelloni",
        "icon": null,
        "lat": 41.6011291,
        "lng": 13.4911694
    },
    {
        "id": "16",
        "title": "La Contadina",
        "iconText": "16",
        "description": "Fettuccine al ragù - Stesa monticiana in padellina con mortadella, prosciutto crudo o broccoletti",
        "icon": null,
        "lat": 41.6012093,
        "lng": 13.4910299
    },
    {
        "id": "17",
        "title": "Azienda agricola La Ginestra",
        "iconText": "17",
        "description": "Barchetta di formaggi con verdure grigliate - Spezzatino di cinghiale in casseruola",
        "icon": null,
        "lat": 41.6015754,
        "lng": 13.4909964
    },
    {
        "id": "18",
        "title": "Gl' magnun'",
        "iconText": "18",
        "description": "Gnocchi cozze, guanciale e pecorino - Gnocchi alla norcina",
        "icon": null,
        "lat": 41.6015985,
        "lng": 13.490881
    },
    {
        "id": "19",
        "title": "Chiss' Bulicchie",
        "iconText": "19",
        "description": "Lasagna con zucca e salsiccia (variante senza lattosio) - Pecora al sugo",
        "icon": null,
        "lat": 41.6016416,
        "lng": 13.4907992
    },
    {
        "id": "20",
        "title": "Spaccanapoli",
        "iconText": "20",
        "description": "Pasta patate e provola - Trippetta al sugo",
        "icon": null,
        "lat": 41.601798,
        "lng": 13.4906141
    },
    {
        "id": "21",
        "title": "Da Fabrizio",
        "iconText": "21",
        "description": "Panini con salsiccia - wurstel - porchetta - prosciutto crudo",
        "icon": null,
        "lat": 41.6016346,
        "lng": 13.4905753
    },
    {
        "id": "22",
        "title": "Saverio's burger",
        "iconText": "22",
        "description": "Hamburger gourmet - Kebab di pollo e tacchino",
        "icon": null,
        "lat": 41.60145,
        "lng": 13.4906383
    },
    {
        "id": "23",
        "title": "Peppino e Rosetta",
        "iconText": "23",
        "description": "Stesa fritta strangolagallese semplice o farcita - Panzerotti",
        "icon": null,
        "lat": 41.6014049,
        "lng": 13.4906691
    },
    {
        "id": "24",
        "title": "Arte patata",
        "iconText": "24",
        "description": "Patate alla griglia farcite",
        "icon": null,
        "lat": 41.6013126,
        "lng": 13.4907147
    },
    {
        "id": "25",
        "title": "Gl' zapp'",
        "iconText": "25",
        "description": "Arrosticini di pecora",
        "icon": null,
        "lat": 41.6009837,
        "lng": 13.490873
    },
    {
        "id": "26",
        "title": "da Ciccio e Paoletta fai pure la scarpetta",
        "iconText": "26",
        "description": "Code de soreca con funghi e salsiccia - Cuoppo di banditos e patatine",
        "icon": null,
        "lat": 41.6009085,
        "lng": 13.4910607
    },
    {
        "id": "27",
        "title": "La cantina di Gigi",
        "iconText": "27",
        "description": "M'nestra c' l' pan'sott' - Baccalà con patate",
        "icon": null,
        "lat": 41.6008934,
        "lng": 13.4911492
    },
    {
        // FIXME: il poster scrive "LE BONTA' SICILIANE" con l'apostrofo; lo storico usava "Le bontà siciliane".
        "id": "28",
        "title": "Le bonta' siciliane",
        "iconText": "28",
        "description": "Arancine - Cuoppo siculo - Cannoli siciliani - caffè",
        "icon": null,
        "lat": 41.6008965,
        "lng": 13.4913276
    },
    {
        "id": "29",
        "title": "Azienda agricola Le Ginestre",
        "iconText": "29",
        "description": "Kebab di bufala - Arrosticini di bufala - Cuzzutiello di bufala",
        "icon": null,
        "lat": 41.6008734,
        "lng": 13.4915623
    },
    {
        "id": "30",
        "title": "La radicula",
        "iconText": "30",
        "description": "Grigliata mista",
        "icon": null,
        "lat": 41.6007731,
        "lng": 13.4920652
    },
    {
        "id": "31",
        "title": "Il cinghiale con le ciocie",
        "iconText": "31",
        "description": "Pappardelle al cinghiale - Fini fini al pomodoro e basilico",
        "icon": null,
        "lat": 41.60068284628836,
        "lng": 13.492412567138674
    },
    {
        "id": "32",
        "title": "La fraschetta del pirata",
        "iconText": "32",
        "description": "Gnocchetti alla crema di scampi - Torciarelli alla crema di patate, salsiccia e tartufo",
        "icon": null,
        "lat": 41.6007159,
        "lng": 13.4925869
    },
    {
        "id": "33",
        "title": "Gli amici della fregna",
        "iconText": "33",
        "description": "Fregne fritte dolci per tutti i gusti",
        "icon": null,
        "lat": 41.6007761,
        "lng": 13.4923643
    },
    {
        "id": "34",
        "title": "Pizza da Damiano",
        "iconText": "34",
        "description": "Pizze tonde - Calzoni ripieni - Patatine fritte - Supplì",
        "icon": null,
        "lat": 41.6008353,
        "lng": 13.492265
    },
    {
        // FIXME: il poster cambia il nome da "Le delizie del mare" a "RISTORANTE VILLA STELLA" mantenendo lo stesso menù. Verificare che sia un cambio definitivo.
        "id": "35",
        "title": "Ristorante Villa Stella",
        "iconText": "35",
        "description": "Frittura mista di pesce",
        "icon": null,
        "lat": 41.6008784,
        "lng": 13.4921658
    },
    {
        "id": "101",
        "title": "Ingresso",
        "iconText": null,
        "description": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "icon": "fa-wine-glass",
        "lat": 41.6008824,
        "lng": 13.4923697
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
        "lat": 41.6009376,
        "lng": 13.4914067
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
      "id": "305",
      "title": "Spettacolo musicale",
      "iconText": null,
      "description": "",
      "icon": "fa-music",
      "lat": 41.6016927,
      "lng": 13.4908435
  },
    {
        "id": "401",
        "title": "Artisti di strada",
        "iconText": null,
        "description": "Artisti di strada.",
        "icon": "fa-fire",
        "lat": 41.6009185,
        "lng": 13.4916696
    },
    {
        "id": "501",
        "title": "Una finestra sui sogni",
        "iconText": null,
        "description": "Animazione per bambini",
        "icon": "fa-person-breastfeeding",
        "lat": 41.60143,
        "lng": 13.49207
    },
    {
        "id": "502",
        "title": "Cantin'Arte",
        "iconText": null,
        "description": "Esposizione artistica di Fabiana Fioretti",
        "icon": "fa-palette",
        "lat": 41.6015122,
        "lng": 13.4910795
    },
    {
        "id": "503",
        "title": "Scuola e cantina",
        "iconText": null,
        "description": "Esposizione dei disegni degli alunni della scuola di Strangolagalli",
        "icon": "fa-image",
        "lat": 41.60154680851121,
        "lng": 13.490795865654947
    },
    {
        "id": "601",
        "title": "Servizi Igenici",
        "iconText": null,
        "description": "Bagno chimico.",
        "icon": "fa-restroom",
        "lat": 41.60187323580053,
        "lng": 13.491272628307344
    },
    {
        "id": "602",
        "title": "Servizi Igenici",
        "iconText": null,
        "description": "Bagno chimico.",
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
        "lat": 41.6008042,
        "lng": 13.4921987
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
    {
        "id": "801",
        "title": "Angolo foto ricordo",
        "iconText": null,
        "description": "Angolo foto ricordo",
        "icon": "fa-camera",
        "lat": 41.60095,
        "lng": 13.49095
    },
];

export default pois;
