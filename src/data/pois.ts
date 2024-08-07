import {Poi} from '../util/Poi';

var pois:Array<Poi> = [
    {
        "id": 1,
        "nome": "L'S'nnamb'l'",
        "numero": 1,
        "descrizione": "Sagn’ i faciuor’ (oppure asparagi - ceci e guanciale), stinco di maiale arrosto",
        "tipo": "cantina",
        "latitudine": 41.60096665639647,
        "longitudine": 13.49175810813904
    },
    {
        "id": 2,
        "nome": "Dolci Creazioni",
        "numero": 2,
        "descrizione": "Pasticceria assortita, caffè",
        "tipo": "cantina",
        "latitudine": 41.60090899189957,
        "longitudine": 13.491409420967104
    },
    {
        "id": 3,
        "nome": "La Castagnaccia",
        "numero": 3,
        "descrizione": "Castagne",
        "tipo": "cantina",
        "latitudine": 41.601055910907455,
        "longitudine": 13.491413444280626
    },
    {
        "id": 4,
        "nome": "I du' P'rchitt'",
        "numero": 4,
        "descrizione": "Tagliere con porchetta, salumi, formaggi, pane casereccio",
        "tipo": "cantina",
        "latitudine": 41.60109401953744,
        "longitudine": 13.49157974123955
    },
    {
        "id": 5,
        "nome": "Da Nicolina e Daiano",
        "numero": 5,
        "descrizione": "Patate a spirale e patate chips, patate fritte",
        "tipo": "cantina",
        "latitudine": 41.60118126815826,
        "longitudine": 13.49163204431534
    },
    
    {
        "id": 6,
        "nome": "La R'messa",
        "numero": 6,
        "descrizione": "Cuzzutiello con polpette al ragù o ai funghi, cotiche e faciuor’/ sasicce i faciuor’",
        "tipo": "cantina",
        "latitudine": 41.60130963373073,
        "longitudine": 13.491528779268265
    },
    {
        "id": 7,
        "nome": "C'ulem' prua'",
        "numero": 7,
        "descrizione": "Caciocavallo impiccato",
        "tipo": "cantina",
        "latitudine": 41.60127854521707,
        "longitudine": 13.491377234458925
    },
    {
        "id": 8,
        "nome": "Agl' cucuzzar",
        "numero": 8,
        "descrizione": "Gnocchi di zucca con speck e noci",
        "tipo": "cantina",
        "latitudine": 41.6014008934746,
        "longitudine": 13.491412103176119
    },
    {
        "id": 9,
        "nome": "L' sciorn'",
        "numero": 9,
        "descrizione": "P’zzell’ d’ Natal’ semplici, con uva passa e con baccalà",
        "tipo": "cantina",
        "latitudine": 41.60137181071309,
        "longitudine": 13.49132761359215
    },
    {
        "id": 10,
        "nome": "Ess' Chiss'",
        "numero": 10,
        "descrizione": "Polenta con sugo di salsicce e spuntature, focaccia con affettati e verdura",
        "tipo": "cantina",
        "latitudine": 41.60118527958626,
        "longitudine": 13.491328954696657
    },
    {
        "id": 11,
        "nome": "Te'... Azz'ppat' i buat'",
        "numero": 11,
        "descrizione": "Vin brulè con ciambelline al vino",
        "tipo": "cantina",
        "latitudine": 41.60123040813413,
        "longitudine": 13.491261899471285
    },
    {
        "id": 12,
        "nome": "Gl’ uerr’ ‘nguastit’",
        "numero": 12,
        "descrizione": "Scialatielli alla curcuma con ragù di cinghiale bianco e tartufo",
        "tipo": "cantina",
        "latitudine": 41.60120633957919,
        "longitudine": 13.490986973047258
    },
    {
        "id": 13,
        "nome": "Il bosco magico",
        "numero": 13,
        "descrizione": "Colata di caciocavallo dolce e affumicato su pane caldo",
        "tipo": "cantina",
        "latitudine": 41.601323673699724,
        "longitudine": 13.490856885910036
    },
    {
        "id": 14,
        "nome": "I buongustai",
        "numero": 14,
        "descrizione": "Maritozzi con panna, bomboloni, pallotte cacio e ova, caffè",
        "tipo": "cantina",
        "latitudine": 41.60153828427417,
        "longitudine": 13.491087555885317
    },
    {
        "id": 15,
        "nome": "Pro loco Strangolagalli",
        "numero": 15,
        "descrizione": "Trippetta al sugo, coratella",
        "tipo": "cantina",
        "latitudine": 41.60162051804348,
        "longitudine": 13.491192162036898
    },
    {
        "id": 16,
        "nome": "Chiss' Rion",
        "numero": 16,
        "descrizione": "Pappardelle al cinghiale",
        "tipo": "cantina",
        "latitudine": 41.60167667763058,
        "longitudine": 13.491125106811525
    },
    {
        "id": 17,
        "nome": "Gl' uagliun'",
        "numero": 17,
        "descrizione": "Crepes alla nutella, caffè",
        "tipo": "cantina",
        "latitudine": 41.60159494535815,
        "longitudine": 13.491023853421211
    },
    {
        "id": 18,
        "nome": "Gl' magnun'",
        "numero": 18,
        "descrizione": "Gnocchi cozze guanciale e pachino, gnocchi alla norcina",
        "tipo": "cantina",
        "latitudine": 41.601580404022755,
        "longitudine": 13.490895107388496
    },
    {
        "id": 19,
        "nome": "Mimi' Cocò i Carm'nucc'",
        "numero": 19,
        "descrizione": "Tris di polentine alla piastra (aglio, olio e peperoncino – broccoletti – funghi) Mortadella alla piastra con contorno",
        "tipo": "cantina",
        "latitudine": 41.601532768590765,
        "longitudine": 13.490840122103693
    },
    {
        "id": 20,
        "nome": "Cibo di strada",
        "numero": 20,
        "descrizione": "Pecora al sugo",
        "tipo": "cantina",
        "latitudine": 41.60179050092951,
        "longitudine": 13.49065236747265
    },
    {
        "id": 21,
        "nome": "Da Fabrizio",
        "numero": 21,
        "descrizione": "Panini con salsiccia, wurstel, hamburger, prosciutto crudo",
        "tipo": "cantina",
        "latitudine": 41.60165060354264,
        "longitudine": 13.490588665008547
    },
    {
        "id": 22,
        "nome": "Peppino e Rosetta",
        "numero": 22,
        "descrizione": "Stese fritte semplici e farcite, panzerotti",
        "tipo": "cantina",
        "latitudine": 41.601297599469135,
        "longitudine": 13.490720093250276
    },
    {
        "id": 23,
        "nome": "Gl' Zapp'",
        "numero": 23,
        "descrizione": "Arrosticini di pecora",
        "tipo": "cantina",
        "latitudine": 41.6009340634263,
        "longitudine": 13.490980938076973
    },
    {
        "id": 24,
        "nome": "Azienda agricola AgriTwins",
        "numero": 24,
        "descrizione": "Agnello alla scottadito, poker di bruschette, m’nestra c’ l’ pan’ sott’",
        "tipo": "cantina",
        "latitudine": 41.60089495184036 ,
        "longitudine": 13.491130471229555 
    },    
    {
        "id": 25,
        "nome": "Gionzies",
        "numero": 25,
        "descrizione": "Tortiglioni alla carbonara tartufata, bruschettone con pancetta alla piastra e broccoletti",
        "tipo": "cantina",
        "latitudine": 41.60088341893227,
        "longitudine": 13.491398692131042
    },

    {
        "id": 26,
        "nome": "Le bontà siciliane",
        "numero": 26,
        "descrizione": "Arancine, cannoli siciliani, pane e panelle, caffè",
        "tipo": "cantina",
        "latitudine": 41.60087840462377,
        "longitudine": 13.491479158401491
    },
    {
        "id": 27,
        "nome": "Da Zio Rocco",
        "numero": 27,
        "descrizione": "Baccalà fritto",
        "tipo": "cantina",
        "latitudine": 41.60087138459124,
        "longitudine": 13.491587787866594
    },
    {
        "id": 28,
        "nome": "Azienda agricola Le Ginestre",
        "numero": 28,
        "descrizione": "Kebab di bufala, arrosticini di bufala, spezzatino di bufala",
        "tipo": "cantina",
        "latitudine": 41.6008663702818,
        "longitudine": 13.49169909954071
    },
    {
        "id": 29,
        "nome": "La fraschetta del pirata",
        "numero": 29,
        "descrizione": "Gnocchetti alla crema di scampi, cous cous con pesce e verdure, sangrìa",
        "tipo": "cantina",
        "latitudine": 41.6008663702818,
        "longitudine": 13.4917688369751
    },
    {
        "id": 30,
        "nome": "Dolci e dolcezze",
        "numero": 30,
        "descrizione": "Dolci forno a legna, caffè, prosecchino",
        "tipo": "cantina",
        "latitudine": 41.60080419281243,
        "longitudine": 13.492014259099962
    },
    {
        "id": 31,
        "nome": "La Radicula",
        "numero": 31,
        "descrizione": "Grigliata mista alla brace: spuntature, bistecca di capocollo, salsiccia e pancetta",
        "tipo": "cantina",
        "latitudine": 41.600774106918635,
        "longitudine": 13.492175191640856
    },
    {
        "id": 32,
        "nome": "Pizza da Damiano",
        "numero": 32,
        "descrizione": "Pizza e calzoni forno a legna, supplì, patatine fritte",
        "tipo": "cantina",
        "latitudine": 41.600701900716324,
        "longitudine": 13.492580205202104
    },
    {
        "id": 33,
        "nome": "#ApeKorina",
        "numero": 33,
        "descrizione": "PanCiccia (panino provola di bufala e salsiccia), formaggi produzione propria)",
        "tipo": "cantina",
        "latitudine": 41.60078413555145,
        "longitudine": 13.492368310689928
    },
    {
        "id": 34,
        "nome": "Piubbuono Gluten free bakery",
        "numero": 34,
        "descrizione": "Calzoni ripieni fritti, pizza fritta, gnocchi di pizza con nutella",
        "tipo": "cantina",
        "latitudine": 41.60083528155459,
        "longitudine": 13.492261022329332
    },
    {
        "id": 35,
        "nome": "Le delizie del mare",
        "numero": 35,
        "descrizione": "Cartoccio di calamari e gamberi, panino con polpo alla piastra",
        "tipo": "cantina",
        "latitudine": 41.60087138459124,
        "longitudine": 13.492176532745363
    },
    {
        "id": 101,
        "nome": "Ingresso",
        "numero": 0, 
        "descrizione": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "tipo": "cassa",
        "latitudine": 41.60101679939535,
        "longitudine": 13.491929769515993
    },
    {
        "id": 102,
        "nome": "Ingresso",
        "numero": 0, 
        "descrizione": "Compra il tuo bicchiere e bevi dove vuoi!!!",
        "tipo": "cassa",
        "latitudine": 41.60098069644007,
        "longitudine": 13.490899801254274
    },
    {
        "id": 201,
        "nome": "Ernicantus",
        "numero": 0, 
        "descrizione": "",
        "tipo": "musica",
        "latitudine": 41.601313645150746,
        "longitudine": 13.491320908069612
    },
    {
        "id": 202,
        "nome": "Cerroni band",
        "numero": 0, 
        "descrizione": "",
       "tipo": "musica",
        "latitudine": 41.60068284628836,
        "longitudine": 13.492412567138674
    },
    {
        "id": 203,
        "nome": "Strimpellaciocia",
        "numero": 0, 
        "descrizione": "",
        "tipo": "musica",
        "latitudine": 41.60112109670826,
        "longitudine": 13.490840792655947
    },
    {
        "id": 204,
        "nome": "jkerr",
        "numero": 0, 
        "descrizione": "spettacolo dalle 23:00",
        "tipo":"musica",
        "latitudine": 41.60092754483027,
        "longitudine": 13.491598516702654
    },
    {
        "id": 301,
        "nome": "Mercatino",
        "numero": 0, 
        "descrizione": "Mercatino dell'artigianato",
        "tipo": "negozio",
        "latitudine": 41.60094158488242,
        "longitudine": 13.492090702056887
    },
    {
        "id": 401,
        "nome": "Artisti di strada",
        "numero": 0, 
        "descrizione": "Artisti di strada.",
        "tipo": "artista",
        "latitudine": 41.60093957916087,
        "longitudine": 13.491487205028534
    },
    {
        "id": 501,
        "nome": "Baby Park",
        "numero": 0, 
        "descrizione": "I bambini si divertiranno qui. E tu potrai farti un giro nella festa.",
        "tipo": "babypark",
        "latitudine": 41.60129258519283,
        "longitudine": 13.490984290838243
    },
    {
        "id": 108,
        "nome": "Servizi Igenici",
        "numero": 0, 
        "descrizione": "Sebac.",
        "tipo": "bagni",
        "latitudine": 41.60187323580053,
        "longitudine": 13.491272628307344
    },
    {
        "id": 109,
        "nome": "Servizi Igenici",
        "numero": 0, 
        "descrizione": "Sebac.",
        "tipo": "bagni",
        "latitudine": 41.601137142433736,
        "longitudine": 13.490573912858965
    },
    {
        "id": 110,
        "nome": "Servizi Igenici",
        "numero": 0, 
        "descrizione": "Bagni pubblici comunali.",
        "tipo": "bagni",
        "latitudine": 41.600787144140995,
        "longitudine": 13.492290526628496
    },
    {
        "id": 111,
        "nome": "Punto primo soccorso",
        "numero": 0, 
        "descrizione": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "tipo": "ambulanza",
        "latitudine": 41.600820238616706,
        "longitudine": 13.492627143859865
    },
    {
        "id": 112,
        "nome": "Punto primo soccorso",
        "numero": 0, 
        "descrizione": "Se hai bisogno di aiuto perchè stai male o ti sei ferito, qui troverai chi ti potrà aiutare.",
        "tipo": "ambulanza",
        "latitudine": 41.60089043896353,
        "longitudine": 13.490620851516725
    },
    {
        "id": 113,
        "nome": "Mostra d'arte",
        "numero": 0, 
        "descrizione": "Mostra di lavori dell'artista locale Fabiana Fioretti",
        "tipo": "arte",
        "latitudine": 41.601171239587146,
        "longitudine": 13.491231054067613
    }
];

export default pois;