import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": "1",
        "title": "L'S'nnamb'l'",
        "iconText": "1",
        "description": "Sagn’ i faciuor’ (oppure asparagi - ceci e guanciale), stinco di maiale arrosto",
        "icon": "cantina",
        "lat": 41.60096665639647,
        "lng": 13.49175810813904
    },
    {
        "id": "2",
        "title": "Dolci Creazioni",
        "iconText": "2",
        "description": "Pasticceria assortita, caffè",
        "icon": "cantina",
        "lat": 41.60090899189957,
        "lng": 13.491409420967104
    },
    {
        "id": "3",
        "title": "La Castagnaccia",
        "iconText": "3",
        "description": "Castagne",
        "icon": "cantina",
        "lat": 41.601055910907455,
        "lng": 13.491413444280626
    },
    {
        "id": "4",
        "title": "I du' P'rchitt'",
        "iconText": "4",
        "description": "Tagliere con porchetta, salumi, formaggi, pane casereccio",
        "icon": "cantina",
        "lat": 41.60109401953744,
        "lng": 13.49157974123955
    },
    {
        "id": "5",
        "title": "Da Nicolina e Daiano",
        "iconText": "5",
        "description": "Patate a spirale e patate chips, patate fritte",
        "icon": "cantina",
        "lat": 41.60118126815826,
        "lng": 13.49163204431534
    },
    
    {
        "id": "6",
        "title": "La R'messa",
        "iconText": "6",
        "description": "Cuzzutiello con polpette al ragù o ai funghi, cotiche e faciuor’/ sasicce i faciuor’",
        "icon": "cantina",
        "lat": 41.60130963373073,
        "lng": 13.491528779268265
    },
    {
        "id": "7",
        "title": "C'ulem' prua'",
        "iconText": "7",
        "description": "Caciocavallo impiccato",
        "icon": "cantina",
        "lat": 41.60127854521707,
        "lng": 13.491377234458925
    },
    {
        "id": "8",
        "title": "Agl' cucuzzar",
        "iconText": "8",
        "description": "Gnocchi di zucca con speck e noci",
        "icon": "cantina",
        "lat": 41.6014008934746,
        "lng": 13.491412103176119
    },
    {
        "id": "9",
        "title": "L' sciorn'",
        "iconText": "9",
        "description": "P’zzell’ d’ Natal’ semplici, con uva passa e con baccalà",
        "icon": "cantina",
        "lat": 41.60137181071309,
        "lng": 13.49132761359215
    },
    {
        "id": "10",
        "title": "Ess' Chiss'",
        "iconText": "10",
        "description": "Polenta con sugo di salsicce e spuntature, focaccia con affettati e verdura",
        "icon": "cantina",
        "lat": 41.60118527958626,
        "lng": 13.491328954696657
    },
    {
        "id": "11",
        "title": "Te'... Azz'ppat' i buat'",
        "iconText": "11",
        "description": "Vin brulè con ciambelline al vino",
        "icon": "cantina",
        "lat": 41.60123040813413,
        "lng": 13.491261899471285
    },
    {
        "id": "12",
        "title": "Gl’ uerr’ ‘nguastit’",
        "iconText": "12",
        "description": "Scialatielli alla curcuma con ragù di cinghiale bianco e tartufo",
        "icon": "cantina",
        "lat": 41.60120633957919,
        "lng": 13.490986973047258
    },
    {
        "id": "13",
        "title": "Il bosco magico",
        "iconText": "13",
        "description": "Colata di caciocavallo dolce e affumicato su pane caldo",
        "icon": "cantina",
        "lat": 41.601323673699724,
        "lng": 13.490856885910036
    },
    {
        "id": "14",
        "title": "I buongustai",
        "iconText": "14",
        "description": "Maritozzi con panna, bomboloni, pallotte cacio e ova, caffè",
        "icon": "cantina",
        "lat": 41.60153828427417,
        "lng": 13.491087555885317
    },
    {
        "id": "15",
        "title": "Pro loco Strangolagalli",
        "iconText": "15",
        "description": "Trippetta al sugo, coratella",
        "icon": "cantina",
        "lat": 41.60162051804348,
        "lng": 13.491192162036898
    },
    {
        "id": "16",
        "title": "Chiss' Rion",
        "iconText": "16",
        "description": "Pappardelle al cinghiale",
        "icon": "cantina",
        "lat": 41.60167667763058,
        "lng": 13.491125106811525
    },
    {
        "id": "17",
        "title": "Gl' uagliun'",
        "iconText": "17",
        "description": "Crepes alla nutella, caffè",
        "icon": "cantina",
        "lat": 41.60159494535815,
        "lng": 13.491023853421211
    },
    {
        "id": "18",
        "title": "Gl' magnun'",
        "iconText": "18",
        "description": "Gnocchi cozze guanciale e pachino, gnocchi alla norcina",
        "icon": "cantina",
        "lat": 41.601580404022755,
        "lng": 13.490895107388496
    },
    {
        "id": "19",
        "title": "Mimi' Cocò i Carm'nucc'",
        "iconText": "19",
        "description": "Tris di polentine alla piastra (aglio, olio e peperoncino – broccoletti – funghi) Mortadella alla piastra con contorno",
        "icon": "cantina",
        "lat": 41.601532768590765,
        "lng": 13.490840122103693
    },
    {
        "id": "20",
        "title": "Cibo di strada",
        "iconText": "20",
        "description": "Pecora al sugo",
        "icon": "cantina",
        "lat": 41.60179050092951,
        "lng": 13.49065236747265
    },
    {
        "id": "21",
        "title": "Da Fabrizio",
        "iconText": "21",
        "description": "Panini con salsiccia, wurstel, hamburger, prosciutto crudo",
        "icon": "cantina",
        "lat": 41.60165060354264,
        "lng": 13.490588665008547
    },
    {
        "id": "22",
        "title": "Peppino e Rosetta",
        "iconText": "22",
        "description": "Stese fritte semplici e farcite, panzerotti",
        "icon": "cantina",
        "lat": 41.601297599469135,
        "lng": 13.490720093250276
    },
    {
        "id": "23",
        "title": "Gl' Zapp'",
        "iconText": "23",
        "description": "Arrosticini di pecora",
        "icon": "cantina",
        "lat": 41.6009340634263,
        "lng": 13.490980938076973
    },
    {
        "id": "24",
        "title": "Azienda agricola AgriTwins",
        "iconText": "24",
        "description": "Agnello alla scottadito, poker di bruschette, m’nestra c’ l’ pan’ sott’",
        "icon": "cantina",
        "lat": 41.60089495184036 ,
        "lng": 13.491130471229555 
    },    
    {
        "id": "25",
        "title": "Gionzies",
        "iconText": "25",
        "description": "Tortiglioni alla carbonara tartufata, bruschettone con pancetta alla piastra e broccoletti",
        "icon": "cantina",
        "lat": 41.60088341893227,
        "lng": 13.491398692131042
    },

    {
        "id": "26",
        "title": "Le bontà siciliane",
        "iconText": "26",
        "description": "Arancine, cannoli siciliani, pane e panelle, caffè",
        "icon": "cantina",
        "lat": 41.60087840462377,
        "lng": 13.491479158401491
    },
    {
        "id": "27",
        "title": "Da Zio Rocco",
        "iconText": "27",
        "description": "Baccalà fritto",
        "icon": "cantina",
        "lat": 41.60087138459124,
        "lng": 13.491587787866594
    },
    {
        "id": "28",
        "title": "Azienda agricola Le Ginestre",
        "iconText": "28",
        "description": "Kebab di bufala, arrosticini di bufala, spezzatino di bufala",
        "icon": "cantina",
        "lat": 41.6008663702818,
        "lng": 13.49169909954071
    },
    {
        "id": "29",
        "title": "La fraschetta del pirata",
        "iconText": "29",
        "description": "Gnocchetti alla crema di scampi, cous cous con pesce e verdure, sangrìa",
        "icon": "cantina",
        "lat": 41.6008663702818,
        "lng": 13.4917688369751
    },
    {
        "id": "30",
        "title": "Dolci e dolcezze",
        "iconText": "30",
        "description": "Dolci forno a legna, caffè, prosecchino",
        "icon": "cantina",
        "lat": 41.60080419281243,
        "lng": 13.492014259099962
    },
    {
        "id": "31",
        "title": "La Radicula",
        "iconText": "31",
        "description": "Grigliata mista alla brace: spuntature, bistecca di capocollo, salsiccia e pancetta",
        "icon": "cantina",
        "lat": 41.600774106918635,
        "lng": 13.492175191640856
    },
    {
        "id": "32",
        "title": "Pizza da Damiano",
        "iconText": "32",
        "description": "Pizza e calzoni forno a legna, supplì, patatine fritte",
        "icon": "cantina",
        "lat": 41.600701900716324,
        "lng": 13.492580205202104
    },
    {
        "id": "33",
        "title": "#ApeKorina",
        "iconText": "33",
        "description": "PanCiccia (panino provola di bufala e salsiccia), formaggi produzione propria)",
        "icon": "cantina",
        "lat": 41.60078413555145,
        "lng": 13.492368310689928
    },
    {
        "id": "34",
        "title": "Piubbuono Gluten free bakery",
        "iconText": "34",
        "description": "Calzoni ripieni fritti, pizza fritta, gnocchi di pizza con nutella",
        "icon": "cantina",
        "lat": 41.60083528155459,
        "lng": 13.492261022329332
    },
    {
        "id": "35",
        "title": "Le delizie del mare",
        "iconText": "35",
        "description": "Cartoccio di calamari e gamberi, panino con polpo alla piastra",
        "icon": "cantina",
        "lat": 41.60087138459124,
        "lng": 13.492176532745363
    },
    {
        "id": "101",
        "title": "Ingresso",
        "iconText": null, 
        "description": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "icon": "cassa",
        "lat": 41.60101679939535,
        "lng": 13.491929769515993
    },
    {
        "id": "102",
        "title": "Ingresso",
        "iconText": null, 
        "description": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "icon": "cassa",
        "lat": 41.60098069644007,
        "lng": 13.490899801254274
    },
    {
        "id": "201",
        "title": "Ernicantus",
        "iconText": null, 
        "description": "",
        "icon": "musica",
        "lat": 41.601313645150746,
        "lng": 13.491320908069612
    },
    {
        "id": "202",
        "title": "Cerroni band",
        "iconText": null, 
        "description": "",
       "icon": "musica",
        "lat": 41.60068284628836,
        "lng": 13.492412567138674
    },
    {
        "id": "203",
        "title": "Strimpellaciocia",
        "iconText": null, 
        "description": "",
        "icon": "musica",
        "lat": 41.60112109670826,
        "lng": 13.490840792655947
    },
    {
        "id": "204",
        "title": "jkerr",
        "iconText": null, 
        "description": "spettacolo dalle 23:00",
        "icon":"musica",
        "lat": 41.60092754483027,
        "lng": 13.491598516702654
    },
    {
        "id": "301",
        "title": "Mercatino",
        "iconText": null, 
        "description": "Mercatino dell'artigianato",
        "icon": "negozio",
        "lat": 41.60094158488242,
        "lng": 13.492090702056887
    },
    {
        "id": "401",
        "title": "Artisti di strada",
        "iconText": null, 
        "description": "Artisti di strada.",
        "icon": "artista",
        "lat": 41.60093957916087,
        "lng": 13.491487205028534
    },
    {
        "id": "501",
        "title": "Baby Park",
        "iconText": null, 
        "description": "I bambini si divertiranno qui. E tu potrai farti un giro nella festa.",
        "icon": "babypark",
        "lat": 41.60129258519283,
        "lng": 13.490984290838243
    },
    {
        "id": "108",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Sebac.",
        "icon": "bagni",
        "lat": 41.60187323580053,
        "lng": 13.491272628307344
    },
    {
        "id": "109",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Sebac.",
        "icon": "bagni",
        "lat": 41.601137142433736,
        "lng": 13.490573912858965
    },
    {
        "id": "110",
        "title": "Servizi Igenici",
        "iconText": null, 
        "description": "Bagni pubblici comunali.",
        "icon": "bagni",
        "lat": 41.600787144140995,
        "lng": 13.492290526628496
    },
    {
        "id": "111",
        "title": "Punto primo soccorso",
        "iconText": null, 
        "description": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "icon": "ambulanza",
        "lat": 41.600820238616706,
        "lng": 13.492627143859865
    },
    {
        "id": "112",
        "title": "Punto primo soccorso",
        "iconText": null, 
        "description": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "icon": "ambulanza",
        "lat": 41.60089043896353,
        "lng": 13.490620851516725
    },
    {
        "id": "113",
        "title": "Mostra d'arte",
        "iconText": null, 
        "description": "Mostra di lavori dell'artista locale Fabiana Fioretti",
        "icon": "arte",
        "lat": 41.601171239587146,
        "lng": 13.491231054067613
    }
];

export default pois;