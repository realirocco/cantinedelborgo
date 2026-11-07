import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": "1",
        "title": "PANÇÒ",
        "iconText": "1",
        "description": "Pangoccioli - Crumble cookies - Caffè",
        "icon": null,
        "lat": 41.600948604907316,
        "lng": 13.491760790348055
    },
    {
        "id": "2",
        "title": "MAGNA CHE TE PASSA",
        "iconText": "2",
        "description": "Pizza masardona - Spiedino di angus",
        "icon": null,
        "lat": 41.60096665639647,
        "lng": 13.49163740873337
    },
    {
        // FIXME: sul poster è "L' S'NNANB'L'" (N), mentre lo storico riporta "L'S'nnamb'l'" (M). Verificare la grafia dialettale.
        "id": "3",
        "title": "L' S'NNANB'L'",
        "iconText": "3",
        "description": "Sagn' i faciuor' - Ricco tagliere",
        "icon": null,
        "lat": 41.600982702160344,
        "lng": 13.491535484790804
    },
    {
        "id": "4",
        "title": "GL' UAGLIUN'",
        "iconText": "4",
        "description": "Crepes alla nutella - Caffè",
        "icon": null,
        "lat": 41.601095022395846,
        "lng": 13.491286039352419
    },
    {
        // FIXME: il poster usa "semplici, con uva passa, con baccalà"; lo storico usava "semplici, con uva passa e con baccalà".
        "id": "5",
        "title": "L' SCIORN'",
        "iconText": "5",
        "description": "P'zzell' d' Natal' semplici, con uva passa, con baccalà",
        "icon": null,
        "lat": 41.601080480947786,
        "lng": 13.491349741816522
    },
    {
        "id": "6",
        "title": "CHISS' M'NZU'",
        "iconText": "6",
        "description": "Vin brulé - Sangria - Ciambelline al vino",
        "icon": null,
        "lat": 41.601055910907455,
        "lng": 13.491413444280626
    },
    {
        "id": "7",
        "title": "LA CASTAGNACCIA",
        "iconText": "7",
        "description": "Caldarroste",
        "icon": null,
        "lat": 41.60109301667906,
        "lng": 13.491570353507996
    },
    {
        "id": "8",
        "title": "ZIO PIE'",
        "iconText": "8",
        "description": "Tris di bombette con patate country - Bun con pulled pork",
        "icon": null,
        "lat": 41.60118126815826,
        "lng": 13.49163204431534
    },
    {
        "id": "9",
        "title": "LA PATATA SFIZIOSA",
        "iconText": "9",
        "description": "Patate a spirale - Chips - Patate stick - Patate capellini",
        "icon": null,
        "lat": 41.60130963373073,
        "lng": 13.491528779268265
    },
    {
        "id": "10",
        "title": "TRATTORISTI NEL SANGUE",
        "iconText": "10",
        "description": "Rigatoni all'amatriciana",
        "icon": null,
        "lat": 41.60127854521707,
        "lng": 13.491377234458925
    },
    {
        "id": "11",
        "title": "DOLCI E DOLCEZZE",
        "iconText": "11",
        "description": "Dolci forno a legna - Semifreddi - Caffè",
        "icon": null,
        "lat": 41.60137181071309,
        "lng": 13.49132761359215
    },
    {
        "id": "12",
        "title": "C' ULEM' PRUA'",
        "iconText": "12",
        "description": "Bruschette di caciocavallo impiccato con prosciutto, guanciale, alici, salsa tartufata",
        "icon": null,
        "lat": 41.60118527958626,
        "lng": 13.491328954696657
    },
    {
        "id": "13",
        "title": "AGL' CUCUZZAR'",
        "iconText": "13",
        "description": "Gnocchi di zucca con speck e noci",
        "icon": null,
        "lat": 41.601116082418244,
        "lng": 13.491132482886316
    },
    {
        "id": "14",
        "title": "ESS' CHISS'",
        "iconText": "14",
        "description": "Polenta con spuntature e salsicce - Focaccia ripiena con cicoria e patate/mortadella e stracciata",
        "icon": null,
        "lat": 41.601194305298364,
        "lng": 13.491025865077974
    },
    {
        "id": "15",
        "title": "PRO LOCO STRANGOLAGALLI",
        "iconText": "15",
        "description": "Spezzatino di coratella - Cannelloni",
        "icon": null,
        "lat": 41.60124996382841,
        "lng": 13.490962833166122
    },
    {
        "id": "16",
        "title": "LA CONTADINA",
        "iconText": "16",
        "description": "Fettuccine al ragù - Stesa monticiana in padellina con mortadella, prosciutto crudo o broccoletti",
        "icon": null,
        "lat": 41.601323673699724,
        "lng": 13.490856885910036
    },
    {
        // FIXME: il poster indica "LA GINESTRA" (singolare) al numero 17 e "LE GINESTRE" (plurale) al numero 29. Verificare la denominazione ufficiale.
        "id": "17",
        "title": "AZIENDA AGRICOLA LA GINESTRA",
        "iconText": "17",
        "description": "Barchetta di formaggi con verdure grigliate - Spezzatino di cinghiale in casseruola",
        "icon": null,
        "lat": 41.60158892825425,
        "lng": 13.49099434912205
    },
    {
        "id": "18",
        "title": "GL' MAGNUN'",
        "iconText": "18",
        "description": "Gnocchi cozze, guanciale e pecorino - Gnocchi alla norcina",
        "icon": null,
        "lat": 41.601580404022755,
        "lng": 13.490895107388496
    },
    {
        "id": "19",
        "title": "CHISS' BULICCHIE",
        "iconText": "19",
        "description": "Lasagna con zucca e salsiccia (variante senza lattosio) - Pecora al sugo",
        "icon": null,
        "lat": 41.60179050092951,
        "lng": 13.49065236747265
    },
    {
        "id": "20",
        "title": "SPACCANAPOLI",
        "iconText": "20",
        "description": "Pasta patate e provola - Trippetta al sugo",
        "icon": null,
        "lat": 41.60165060354264,
        "lng": 13.490588665008547
    },
    {
        "id": "21",
        "title": "DA FABRIZIO",
        "iconText": "21",
        "description": "Panini con salsiccia - wurstel - porchetta - prosciutto crudo",
        "icon": null,
        "lat": 41.60140640916927,
        "lng": 13.490674495697023
    },
    {
        "id": "22",
        "title": "SAVERIO'S BURGER",
        "iconText": "22",
        "description": "Hamburger gourmet - Kebab di pollo e tacchino",
        "icon": null,
        "lat": 41.601297599469135,
        "lng": 13.490720093250276
    },
    {
        "id": "23",
        "title": "PEPPINO E ROSETTA",
        "iconText": "23",
        "description": "Stesa fritta strangolagallese semplice o farcita - Panzerotti",
        "icon": null,
        "lat": 41.600979192149836,
        "lng": 13.490858897566797
    },
    {
        "id": "24",
        "title": "ARTE PATATA",
        "iconText": "24",
        "description": "Patate alla griglia farcite",
        "icon": null,
        "lat": 41.60092202909468,
        "lng": 13.490971550345423
    },
    {
        "id": "25",
        "title": "GL' ZAPP'",
        "iconText": "25",
        "description": "Arrosticini di pecora",
        "icon": null,
        "lat": 41.600882416070604,
        "lng": 13.491128459572794
    },
    {
        "id": "26",
        "title": "DA CICCIO E PAOLETTA FAI PURE LA SCARPETTA",
        "iconText": "26",
        "description": "Code de soreca con funghi e salsiccia - Cuoppo di banditos e patatine",
        "icon": null,
        "lat": 41.60088492322476,
        "lng": 13.491387963294985
    },
    {
        "id": "27",
        "title": "LA CANTINA DI GIGI",
        "iconText": "27",
        "description": "M'nestra c' l' pan'sott' - Baccalà con patate",
        "icon": null,
        "lat": 41.60087389174578,
        "lng": 13.491475135087969
    },
    {
        // FIXME: il poster scrive "LE BONTA' SICILIANE" con l'apostrofo; lo storico usava "Le bontà siciliane".
        "id": "28",
        "title": "LE BONTA' SICILIANE",
        "iconText": "28",
        "description": "Arancine - Cuoppo siculo - Cannoli siciliani - caffè",
        "icon": null,
        "lat": 41.600882416070604,
        "lng": 13.4915978461504
    },
    {
        // FIXME: il poster indica "LE GINESTRE" (plurale) qui e "LA GINESTRA" (singolare) al numero 17. Verificare la denominazione ufficiale.
        "id": "29",
        "title": "AZIENDA AGRICOLA LE GINESTRE",
        "iconText": "29",
        "description": "Kebab di bufala - Arrosticini di bufala - Cuzzutiello di bufala",
        "icon": null,
        "lat": 41.60085132735115,
        "lng": 13.491986095905306
    },
    {
        // FIXME: il poster scrive "LA RADICOLA"; lo storico riportava "La Radicula".
        "id": "30",
        "title": "LA RADICOLA",
        "iconText": "30",
        "description": "Grigliata mista",
        "icon": null,
        "lat": 41.600767086874725,
        "lng": 13.492126911878588
    },
    {
        // FIXME: il poster scrive "CIOCE"; lo storico riportava "Ciocie".
        "id": "31",
        "title": "IL CINGHIALE CON LE CIOCE",
        "iconText": "31",
        "description": "Pappardelle al cinghiale - Fini fini al pomodoro e basilico",
        "icon": null,
        "lat": 41.60068284628836,
        "lng": 13.492412567138674
    },
    {
        "id": "32",
        "title": "LA FRASCHETTA DEL PIRATA",
        "iconText": "32",
        "description": "Gnocchetti alla crema di scampi - Torciarelli alla crema di patate, salsiccia e tartufo",
        "icon": null,
        "lat": 41.600732488075785,
        "lng": 13.492585569620134
    },
    {
        "id": "33",
        "title": "GLI AMICI DELLA FREGNA",
        "iconText": "33",
        "description": "Fregne fritte dolci per tutti i gusti",
        "icon": null,
        "lat": 41.60077210119187,
        "lng": 13.492378368973732
    },
    {
        "id": "34",
        "title": "PIZZA DA DAMIANO",
        "iconText": "34",
        "description": "Pizze tonde - Calzoni ripieni - Patatine fritte - Supplì",
        "icon": null,
        "lat": 41.60083528155459,
        "lng": 13.492261022329332
    },
    {
        // FIXME: il poster cambia il nome da "Le delizie del mare" a "RISTORANTE VILLA STELLA" mantenendo lo stesso menù. Verificare che sia un cambio definitivo.
        "id": "35",
        "title": "RISTORANTE VILLA STELLA",
        "iconText": "35",
        "description": "Frittura mista di pesce",
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
        "title": "Una finestra sui sogni",
        "iconText": null,
        "description": "Animazione per bambini",
        "icon": "fa-person-breastfeeding",
        "lat": 41.60160,
        "lng": 13.49180
    },
    {
        "id": "502",
        "title": "Cantin'Arte",
        "iconText": null,
        "description": "Esposizione artistica di Fabiana Fioretti",
        "icon": "fa-palette",
        "lat": 41.60154,
        "lng": 13.49100
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
