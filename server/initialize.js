//In this function is initialized the database with all the data are needed in the application.
export default async function initialize (models) {
    const typeItineraryList = [
        {
            type_name : "Half day itineraries"
        },
        {
            type_name : "All day itineraries"
        },
        {
            type_name : "Family itineraries"
        }
    ]
    const typeItinerary0 = await models.TypeItinerary.create(typeItineraryList[0])
    const typeItinerary1 = await models.TypeItinerary.create(typeItineraryList[1])
    const typeItinerary2 = await models.TypeItinerary.create(typeItineraryList[2])
    const itineraryList = [
        {
            title : "Renaissance in Florence",
            image : "https://www.tuscanypeople.com/wp-content/uploads/2021/06/duomo_firenze_alba.jpg",
            description : "Itinerary in the center of Florence.",
            information : "This itinerary starts from Basilica di Santa Maria Novella, followed by a longer stop in Battistero di San Giovanni, Cattedrale di Santa Maria del Fiore where it is possible to admire and take pictures at the famous Campanile di Giotto. Last stop takes place at Basilica di Santa Croce di Firenze where the itinerary ends. A guided tour for this itinerary is available every Monday and Friday at 3 pm.",
            duration : 2,
            typeItineraryId : typeItinerary0.id,
            ticket : "Full price € 15.40. The ticket can be bought from the guide at the starting point of the itinerary, 15 minutes before the start of the journey.",
            itineraryImage : "https://raw.githubusercontent.com/Quentin50ino/itineraries_image/main/Renaissance%20in%20Florence.jpg"
        },
        {
            title : "Outdoor Florence",
            image : "https://mywowo.net/media/images/cache/firenze_giardino_dei_boboli_01_prima_parte_jpg_1200_630_cover_85.jpg",
            description : "Outdoor itinerary",
            information : "This itinerary is for everyone who aims to visit the most beautiful outdoor locations of Florence. The itinerary starts at the beautiful Giardino dell’Orticoltura, followed by a stop at the Piazza Santissima Annunziata. Other stops are at Piazzale Michelangelo, Rose Garden, Giardino del Bobolink and eventually Bobble Garden will close the itinerary. A guided tour for this itinerary is available every Monday and Wednesday at 9 am.",
            duration : 8,
            typeItineraryId : typeItinerary2.id,
            ticket : "Full price € 24.90. The ticket can be bought from the guide at the starting point of the itinerary, 15 minutes before the start of the journey.",
            itineraryImage : "https://raw.githubusercontent.com/Quentin50ino/itineraries_image/main/Outdoor%20Florence.jpg"
        },
        {
            title : "All around Medici",
            image : "https://www.imuseidifirenze.it/wp-content/uploads/2019/02/palazzo-pitti-firenze-1024x577.jpg",
            description : "Itinerary through all the old residences of the Medici family",
            information : "This itinerary guides tourists interested in deepen their knowledge about Medici family. The visit starts at Palazzo Medici Riccardi, followed by Palazzo Stroizzi and Torre di Arnolfo, later stop is at the famous Galleria degli Uffizi, ending with a tour at the Galleria d’Arte Moderna where the itinerary will end. A guided tour for this itinerary is available every Thursday and Friday at 9 am.",
            duration : 8,
            typeItineraryId : typeItinerary1.id,
            ticket : "Full price € 25.30. The ticket can be bought from the guide at the starting point of the itinerary, 15 minutes before the start of the journey.",
            itineraryImage : "https://raw.githubusercontent.com/Quentin50ino/itineraries_image/main/All%20around%20Medici.jpg"
        },
        {
            title : "Bridges of Florence",
            image : "https://www.alishaaneja.com/assets/images/ponte.jpg",
            description : "Itinerary around all the most beautiful bridges in the city of Florence.",
            information : "This itinerary presents the most famous bridges of Florence constructed to traverse Arno river. First bridge is Ponte alla Carraia, followed by Ponte Santa Trinità and Ponte Vecchio. The last two steps of the tour are Corridoio Vasariano and Ponte alle Grazie where the itinerary ends. A guided tour for this itinerary is available every Tuesday and Friday at 10 am.",
            duration : 6,
            typeItineraryId : typeItinerary2.id,
            ticket : "Full price € 12.50. The ticket can be bought from the guide at the starting point of the itinerary, 15 minutes before the start of the journey.",
            itineraryImage : "https://raw.githubusercontent.com/Quentin50ino/itineraries_image/main/Bridges%20of%20Florence.jpg"
        }
    ]
    const itinerary0 = await models.Itinerary.create(itineraryList[0])
    const itinerary1 = await models.Itinerary.create(itineraryList[1])
    const itinerary2 = await models.Itinerary.create(itineraryList[2])
    const itinerary3 = await models.Itinerary.create(itineraryList[3])
    const typePointOfInterestList = [
        {
            type_name : "Historical"
        },
        {
            type_name : "Natural"
        }
    ]
    const typePointOfInterest0 = await models.TypePointOfInterest.create(typePointOfInterestList[0])
    const typePointOfInterest1 = await models.TypePointOfInterest.create(typePointOfInterestList[1])
    const pointOfInterestsList = [
        {
            title : "Basilica Santa Maria del Fiore",
            image : "https://duomo.firenze.it/application/mediaArchive/Image/bf53c2f5dbfca98d5d077a464e84b39c_visione%20%20insieme4.jpg",
            description : "Duomo of the city of Florence",
            information : "Florence Cathedral was designed at the end of the 13th century by Arnolfo di Cambio and is dedicated to Santa Maria del Fiore, a reference to the lily, the city's symbol. The third largest cathedral of the world (after Saint Peter's in Rome and Saint Paul's in London), at the time of its consecretation in 1436 it was the largest in Europe. The building was erected on top of the earlier Cathedral of Santa Reparata, the remains of which are accessible via the nave. The exterior, now clad in polychrome marble, remained incomplete for a long time; the original façade, which had been partially built to the design by Arnolfo di Cambio, was demolished at the end of the 16th century, and the current one was only erected at the end of the 19th century. Inside, the nave and two side aisles end in a vast choir where the main altar stands, surrounded by the tribune on which the Cupola rests. On the left wall are frescoes depicting two condottieri, Sir John Hawkwood (otherwise known as Giovanni Acuto) by Paolo Uccello, who also did the fresco decoration on the clock on the interior façade, and Niccolò da Tolentino by Andrea del Castagno. The 44 stained-glass windows were the work of leading 15th-century masters, including Donatello, Andrea del Castagno and Paolo Uccello.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9862151769994!2d11.253771515346!3d43.773144979117326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bfe22ff5%3A0x5591438487aaf1f5!2sCattedrale%20di%20Santa%20Maria%20del%20Fiore!5e0!3m2!1sit!2sit!4v1654263552695!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Free entrance",
            address : "Piazza del Duomo, 50122 Firenze FI, Italia",
            open : "Monday - Saturday from 10:15 to 16:45"
        },
        {
            title : "Torre di Palazzo Vecchio",
            image : "https://www.toscana.info/wp-content/uploads/sites/123/piazza-signoria-firenze.jpg",
            description : "Palace of amministration of the city",
            information : "Literally 'towering' over Florence, the 95 mt. high Tower of Palazzo Vecchio is one of the city's unmistakable symbols and focal points. It is also one of the oldest parts of the building built between 1299 and the early 14th century, possibly to a design by Arnolfo di Cambio, as the seat of the City Government. The spectacular view of Florence is nice from the top of the tower but also from the intermediate views during the ascent and to the suggestive path of the “Camminamento di Ronda”. It is recommended for children because the climb can be done easily despite the height and the high number of steps. Access to children is allowed from 6 years old.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1713804914!2d11.253962215345897!3d43.76930117911743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400e57893f9%3A0xe4e22be754c65787!2sPalazzo%20Vecchio!5e0!3m2!1sit!2sit!4v1654263613915!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 12.50. For information about reduced tickets please check the website",
            address : "Piazza della Signoria, 50122 Firenze FI, Italia",
            open : "Friday - Wednesday from 09:00 to 17:00"
        },
        {
            title : "Basilica di Santa Maria Novella",
            image : "https://flawless.life/wp-content/uploads/2020/06/complesso-santa-maria-novella-cover.jpg",
            description : "The first rinascimental catedral of Florence",
            information : "The first of the great Florentine basilicas and the first large-scale Gothic building in the city, the Dominicans began constructing Santa Maria Novella soon after 1240; it was finished in 1357 but was not consecrated until 1420. In the following centuries it underwent various modifications, in particular the remodelling begun by Giorgio Vasari in 1566 and the 19th-century interventions designed to restore the Gothic appearance of the building. There are a number of important artworks in the church: Giotto’s Crucifix and a wooden Crucifix by Filippo Brunelleschi, Masaccio’s fresco of the Trinity and two chapels frescoed respectively by Domenico Ghirlandaio and Filippino Lippi. The rich polychrome-marble façade was completed in the second half of the 15th century by Leon Battista Alberti.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11523.657811934005!2d11.2493859!3d43.7746346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85e5747949866eb2!2sBasilica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1654268463243!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Church and Museum € 7.50. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Maria Novella, 18, 50123 Firenze FI, Italia",
            open : "Monday - Thursday from 09:30 to 17:30. Friday from 11:00 to 17:30"
        },
        {
            title : "Boboli Garden",
            image : "https://mywowo.net/media/images/cache/firenze_giardino_dei_boboli_01_prima_parte_jpg_1200_630_cover_85.jpg",
            description : "Amazing garden near Palazzo Pitti.",
            information : "The Medici family was the first to take care of the Boboli garden’s arrangement, creating the model of the Italian-style garden, then an example for many European courts, in which a rational order is given to the vegetation and the geometries of the avenues and plants are embellished with grottoes, statues and fountains. Opened to the public in 1766, it is a real open-air museum: valuable are the Roman statues and those of Renaissance sculptors such as Baccio Bandinelli and Giambologna; the amphitheatre, where court performances took place; the Grotta del Buontalenti, where Michelangelo's Prisons were placed (now replaced by copies).",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.996452533216!2d11.2483996!3d43.7624972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40c02f73b03d9b2!2sGiardino%20di%20Boboli!5e0!3m2!1sit!2sit!4v1654268651558!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "Full price - High Season (March - October) € 10.00. Full price- Low Season (November - February) € 6.00.",
            address : "Giardino di Boboli, Piazza de' Pitti, 1, 50125 Firenze FI, Italia",
            open : "Monday - Sunday from 08:15 to 19:30"
        },
        {
            title : "Uffizi Gallery",
            image : "https://uffizi-webpromotersncva.netdna-ssl.com/wp-content/uploads/2016/03/uffizi-piazzale.jpg",
            description : "One of the most famous museum of the world.",
            information : "An elegant edifice designed by Giorgio Vasari, it was begun in 1560 to house the grand ducal offices. In 1574 Grand Duke Francesco I ordered the top story converted to display the Medici art treasures. The Uffizi’s collection, one of the most precious in the world, offers examples of painting from the 13th century through the 18th and includes most of the significant names in Florentine art. With its immense artistic legacy, the Uffizi Gallery, now The Uffizi, is one of the most important museums in the world. Following a substantial reorganization in the 17th century, which led to the transfer of some collections (arms, scientific instruments, archaeological finds, ancient and modern bronzes) to other sites and the establishment of new museums, the Uffizi mainly became a picture gallery, with thousands of works ranging from the 13th to the 18th centuries. After the suppression of churches and convents in the 18th and 19th centuries, many works of ecclesiastical provenance swelled the gallery’s collections; other important paintings were acquired at the beginning of the 20th century.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2443871123414!2d11.253122115345835!3d43.767785579117536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54008dc59081%3A0xcddeb7c89bf0c4cd!2sGalleria%20degli%20Uffizi!5e0!3m2!1sit!2sit!4v1654636334128!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - high season (March-October) € 20.00. Full price - low season (November-February) € 12.00.",
            address : "Piazzale degli Uffizi, 50122 Firenze FI, Italia",
            open : "Tuesday - Sunday from 08:15 to 18:50"
        },
        {
            title : "Palazzo Strozzi",
            image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/ac/a7/04/donatello-il-rinascimento.jpg?w=1200&h=-1&s=1",
            description : "One of the most important palace in Florence.",
            information : "The grandest palace in Florence is the Strozzi Palace, begun in 1489 for one of the city’s largest and wealthiest families (which, however, had been eclipsed politically by the Medici). Its enormous scale deliberately surpassed that of the Medici Palace. Noteworthy within the Strozzi Palace is a spacious courtyard, which by its use of arches and a loggia achieves a feeling of openness and simplicity.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.076395648032!2d11.249572515345937!3d43.77127297911741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56aa73c1b501%3A0x38349b89124ab11!2sPalazzo%20Strozzi!5e0!3m2!1sit!2sit!4v1656848656090!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        },
        {
            title : "Piazzale Michelangelo",
            image : "https://cdn1.discovertuscany.com/img/florence/piazzas/piazzale-michelangelo-view.jpg?w=750&q=65",
            description : "Most famous panoramic point in Florence!",
            information : "The Piazzale Michelangelo was built on the hills located south of the Florence's historic center following the design of the architect Giuseppe Poggi. In 1869 Florence was the capital of Italy in this period, the whole city underwent an intense urban renewal, the 'lungarni' (riverside walkways following the Arno) were created; on the right side replacing the walls of the 14th century the bypass (Viali di Circonvallazione) was opened and to the left side a panoramic tree-lined street of 8 km, currently called Viale dei Colli, in which top was constructed the Piazzale Michelangelo, as a panoramic terrace on the city. In 1873 a copy of Michelangelo's David was taken to the square with the help of nine pairs of oxen. This monument occupies a privileged position, observing the city from above as a guard attentive to all the beauties that the city of Florence offers. This square was dedicated to the great Renaissance artist Michelangelo and the copy of the David was located in the center of the square next to the four allegories of the Medici Chapels of San Lorenzo. Poggi also designed the lodge in neoclassical style as a museum for the works of Michelangelo, but this museum was never built and currently houses a panoramic restaurant",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.912799569485!2d11.2650561!3d43.7629314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4f768e1820d5119!2sPiazzale%20Michelangelo!5e0!3m2!1sit!2sit!4v1654637238937!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        },
        {
            title : "Basilica di Santa Croce",
            image : "https://upload.wikimedia.org/wikipedia/commons/7/7a/Santa_Croce_%28Florence%29_-_Facade.jpg",
            description : "Rinascimental cathedral in the center of  Florence",
            information : "Designed by Arnolfo di Cambio (1296), it is the largest Franciscan church in the world; it is also known as the 'Pantheon of Italian glories' for its illustrious tombs (Michelangelo, Galileo, Machiavelli, Rossini, Foscolo, Alfieri) that it preserves in the suggestive Gothic interior. Among the more than 200 tombs, the two Renaissance monuments stand out, masterpieces of Rossellino and Desiderio da Settignano. Of the numerous chapels in the transept, frescoed in the fourteenth century, authentic masterpieces are the Bardi and Peruzzi chapels, frescoed by Giotto; remarkable are also the works of Donatello (the Annunciation and the Crucifix). The famous Crucifix of Cimabue damaged by the 1966 flood, instead, is displayed in the sacristy. The museum itinerary includes the Cappella dei Pazzi, by Brunelleschi, the two cloisters and the Last Supper, frescoed by Taddeo Gaddi, a treasure chest of numerous works of art (Donatello, Orcagna, Domenico Veneziano).",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.2066846178254!2d11.260079015345866!3d43.76856827911753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540723ccc331%3A0x8f8279649c131255!2sBasilica%20di%20Santa%20Croce%20di%20Firenze!5e0!3m2!1sit!2sit!4v1654637625340!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 8.00. For information about reduced tickets, please check on the website.",
            address : "Piazza di Santa Croce, 16, 50122 Firenze FI, Italia",
            open : "Monday - Saturday, from 09:30 to 17:30"
        },
        {
            title : "Campanile di Giotto",
            image : "https://www.visita-firenze.it/storage/resize/medium/shutterstock_15485.jpg",
            description : "Tower very near to the Duomo",
            information : "The bell tower of Florence Cathedral, known as Giotto’s Campanile, was designed by the great 14th-century master. 84.7 metres tall and approximately 15 metres in breadth, it is the most eloquent example of the architecture of the period in Florence, combining a strong vertical thrust with the principle of sound solidity;  the terrace at the top offers a fabulous view of the city and of Brunelleschi’s Cupola. By the time Giotto died in 1337 he had completed only the first part of his bell tower. Andrea Pisano carried Giotto's design up to the first two levels, while artists such as Alberto Arnoldi adorned the outside with carved lozenges. Work was broken off for two years, between 1348 and 1350, but the bell tower was completed in 1359, after the terrible years of the Black Death, by Francesco Talenti.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11524.010180629675!2d11.2557051!3d43.772806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c4b8131377e75b8!2sCampanile%20di%20Giotto!5e0!3m2!1sit!2sit!4v1654674452378!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Brunelleschi Pass (valid 3 days includes Dome, Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 30.00. Full price - Giotto Pass (valid 3 days includes Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 20.00. For information about reduced tickets, please check on the website",
            address : "Piazza del Duomo, 50122 Firenze FI, Italia",
            open : "Monday - Sunday from 08:15 to 19:45"
        },
        {
            title : "Battistero di San Giovanni",
            image : "https://www.10cose.it/wp-content/uploads/2015/12/battistero-san-giovanni-firenze.jpg",
            description : "San Giovanni Baptistery",
            information : "Remembered by Dante as “beautiful San Giovanni”, the octagonal-shaped Baptistery is one of the city’s oldest buildings; it acquired its current appearance in the 11th–12th centuries but probably dates as far back as the 5th century. The exterior is clad with green and white marble from Prato with geometric motifs and the dome has eight segments; decorative statues and low reliefs were added in the 16th century. The three bronze doors are the work of Andrea Pisano (South Doors, c.1330), and Lorenzo Ghiberti (North Doors, 1402–25, and East Doors, 1425–52). The East Doors, decorated with Scenes from the Old Testament, face the Cathedral and were declared by Michelangelo ‘worthy to be the Gates of Paradise’ (the original doors are now in the Museo dell’Opera del Duomo and have been replaced with copies). The tessellated marble floor inside dates to the end of the 12th century, while the gold-ground mosaics on the walls and cupola were executed between 1266 and the beginning of the following century by Venetian and Tuscan craftsmen. The Baptistery also houses the Tomb of Anti-Pope John XXIII, attributed to Donatello and Michelozzo and carved in the first half of the 15th century.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9874545256043!2d11.252834514668987!3d43.77311925268737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bff30525%3A0x74a3341bfd1857d!2sBattistero%20di%20San%20Giovanni!5e0!3m2!1sit!2sit!4v1654674792439!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - Brunelleschi Pass (valid 3 days includes Dome, Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 30.00. Full price - Giotto Pass (valid 3 days includes Bell Tower, Baptistery, Opera del Duomo Museum, Santa Reparata) € 20.00. For information about reduced tickets, please check on the website",
            address : "Piazza San Giovanni, 50122 Firenze FI, Italia",
            open : "Monday - Sunday from 09:00 to 19:45"
        },
        {
            title : "Ponte Vecchio",
            image : "https://images.placesonline.com/photos/firenze_559857091_202300_1623852711.jpg?quality=80&w=700",
            description : "Oldest bridge in Florence",
            information : "Ponte Vecchio, one of Florence's landmarks, stands at the Roman bridge of ancient Florentia. Over the centuries the bridge was rebuilt several times, also due to the numerous floods of the Arno; following one of these (1333) it was decided to build a new, more stable one (with three arches supported by just two pillars, with a series of masonry shops on both sides). The bridge, built in 1345, probably designed by Taddeo Gaddi, is essentially what we can still admire today. The current goldsmiths' workshops - established in 1593 in place of the old butchers' and fishmongers' shops - make it the 'most precious bridge in the world'. The Corridoio Vasariano, (the passage allowing the Medici to move easily between Palazzo Vecchio and Palazzo Pitti, through the Uffizi) built by Giorgio Vasari in 1565 on commission of Cosimo I, runs right above these buildings. At the centre of the bridge you can admire the monument to Benvenuto Cellini (Raffaello Romanelli, 1900) and the remains of a 14th-century sundial. In August 1944, during the Nazi retreat, this was the only Florentine bridge that remained intact. The terrible flood of 1966, while causing serious damage, did not compromise its structure.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.237672282988!2d11.250954815345823!3d43.76792497911756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56aaa2dcb667%3A0x40310ae830e702e8!2sPonte%20Vecchio!5e0!3m2!1sit!2sit!4v1654676351937!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte Vecchio, 50125 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Ponte Santa Trinita",
            image : "https://www.visita-firenze.it/storage/resize/medium/shutterstock_5657.jpg",
            description : "One of the oldest and most famous bridge in Florence",
            information : "The original bridge was built in1252, and it was named after the nearby church. Like all of Florence's historical bridges, it was rebuilt several times following the numerous floods of the Arno; after the terrible one of 1557, Cosimo I de' Medici commissioned its reconstruction to Bartolomeo Ammannati, who was perhaps inspired by an idea of Michelangelo Buonarroti.  Made of pietra forte and decorated with commemorative epigraphs, it was considered the most elegant bridge in Florence, worthy of the grand ducal processions that used to pass over it. The statues at both ends are by Giovanni Caccini (Autumn and Summer), Taddeo Landini (Winter) and Pietro Francavilla (Spring). Destroyed by the Germans during the Second World War, it was rebuilt exactly 'as it was and where it was' in 1958.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.185947294103!2d11.248143815345879!3d43.76899877911746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404c8afd5d9%3A0xd598096fc71132e6!2sPonte%20Santa%20Trinita!5e0!3m2!1sit!2sit!4v1654676063794!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte Santa Trinita, 50100 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Giardino di Bobolino",
            image : "https://www.firenzegreenway.com/wp-content/uploads/2021/02/4-bobolino-358211.jpg",
            description : "Very nice public park for relax yourself",
            information : "This public park, located on Viale Machiavelli near Porta Romana, is a sloping garden, entirely made up of grassy slopes, steps and gravel yards with pretty green furniture solutions including tanks and artificial caves;the majestic 'Cedar of incense' located on the left side of the central flowerbed  is worth a mention.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.722815739041!2d11.24652381534546!3d43.75785247911782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5159c6430e05%3A0x438b4a3831ef8ded!2sGiardino%20del%20Bobolino!5e0!3m2!1sit!2sit!4v1654676583632!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Giardino del Bobolino, Viale Machiavelli, 18, 50125 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Giardino dell'Orticoltura",
            image : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/71/63/48/giardino-dell-artecultura.jpg?w=1200&h=1200&s=1",
            description : "Beatiful garden in the city of Florence.",
            information : "In 1854 the 'Società Toscana d'Orticultura' (Tuscan Society of Horticulture) was constituted. In the second half of the 19th century the garden got larger and Giacomo Roster designed the big tepidarium, inaugurated in 1880. The little loggia 'Bondi' by the architect Castellucci was realized in 1911. The Municipality of Florence bought the garden in 1930 and designated the area as a public garden. In 1990 the 'snake' was completed with decorations of different materials following the project of Marco Dezzi Bardeschi. Inside the garden there is also a playground for children.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.306679575506!2d11.258612156798899!3d43.787248981395244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82bc67a1f95aea9c!2zNDPCsDQ3JzE0LjEiTiAxMcKwMTUnMzguNCJF!5e0!3m2!1sit!2sit!4v1656493839392!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Via Vittorio Emanuele II, 4, 50139 Firenze FI, Italia",
            open : "Monday - Sunday from 08:30 to 18:00 *** PLEASE NOTE:THE GARDEN WILL BE TEMPORARILY OPEN FROM MONDAY TO SUNDAY FROM 9:30 TO 20:00. INFO: www.societatoscanaorticultura.it"
        },
        {
            title : "Medici Ricciardi Palace",
            image : "https://www.palazzomediciriccardi.it/wp-content/uploads/2018/09/Palazzo-Medici-Riccardi-fullhd.jpg",
            description : "The old house of the Medici family (before Palazzo Pitti)",
            information : "Commissioned in 1444 by Cosimo the Elder, the residence of the Medici family constitutes a model of civil architecture in the Renaissance. Not only private residence of the members of the family, among which Lorenzo the Magnificent, the palace performs its public function by welcoming important political figures. The  monumental courtyard of the palace leads up to the Chapel of the Magi, built to a design by Michelozzo and frescoed in 1459 by Benozzo Gozzoli with the Procession of the Magi. On the altar is a copy of the original altarpiece painted by Filippo Lippi. The Sala Sonnino on the first floor is decorated with a series of 31 low reliefs probably produced by the workshop of Bartolomeo Ammannati under the strong influence of Michelangelo. The Sala Sonnino leads into the Gallery, its vault is embellished with frescoes by Luca Giordano representing the Apology of the Medici Family, the protectors of the Riccardi. Three rooms in the palace basement house the Roman sculptures collected in the 16th–17th centuries by the Riccardi family. The museum organizes activities and workshops for families with children and school groups",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8876875700403!2d11.253586215346063!3d43.775190179117345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54031be7011b%3A0x8fcb8659c80d7240!2sPalazzo%20Medici%20Riccardi!5e0!3m2!1sit!2sit!4v1654677315322!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price € 7.00. Full price in case of exhibitions € 10.00. For information about reduced tickets please check on the website",
            address : "Via Camillo Cavour, 3, 50129 Firenze FI, Italia",
            open : "Thursday - Tuesday from 09:00 to 19:00"
        },
        {
            title : "Rose Garden",
            image : "https://www.055firenze.it/ridimensiona.html/cms/660/660/000/cms/custom/files/100005/ct50012_id122402_t1/4349888938_b37efbc410_z.jpg",
            description : "Garden right below Piazzale Michelangelo.",
            information : "The Rose garden is a green terrace right below Piazzale Michelangelo overlooking the historic centre of the city and enjoying a breath-taking view equal in beauty to that from Forte Belvedere. The Garden has been entirely redesigned better to display the works by Folon. Visitors will be able to admire the unique view of Santa Maria del Fiore and Palazzo Vecchio through the big suitcase of Partir; they will rest next to Folon’s man on the timeless bench of Je me souviens; they will stroke the Chat, the large cat sleeping on the grass among rosebushes. In the garden there is also a ... corner of Japan! The Japanese garden was donated to the Municipality of Florence by the twin city of Kyoto.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.4753302515387!2d11.260603315345644!3d43.76299097911772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a53f9e6f03551%3A0xe76b4f3dd060f63a!2sGiardino%20delle%20Rose!5e0!3m2!1sit!2sit!4v1654677808421!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Giardino delle Rose, Viale Giuseppe Poggi, 2, 50125 Firenze FI, Italia",
            open : "Monday - Saturday from 09:00 to 20:00. Sunday and holidays from 10:00 to 20:00."
        },
        {
            title : "G.A.M. - Palazzo Pitti",
            image : "https://www.imuseidifirenze.it/wp-content/uploads/2019/02/palazzo-pitti-firenze-1024x577.jpg",
            description : "Old residence of the Medici family in Florence.",
            information : "Situated on the second floor of Palazzo Pitti, the thirty rooms of the Modern Art Gallery contain paintings and sculptures, for the most part Italian, from the end of the 18th century through to the First World War. There is Neoclassical and Romantic art, an extensive selection of Macchiaioli paintings and works of the Italian schools of the second half of the 19th century (Decadentism, Symbolism, Post-Impressionism, Divisionism) and early 20th-century art movements.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.484717997688!2d11.2500081!3d43.7651533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cd0cce4e6f1502a!2sPalazzo%20Pitti!5e0!3m2!1sit!2sit!4v1654690075990!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "Full price - high season (March-October) € 16.00. Full price - low season (November-February) € 10.00",
            address : "Piazza de' Pitti, 1, 50125 Firenze FI, Italia",
            open : "Tuesday - Sunday from 08:15 to 18:50. Closed: Monday , December 25th, January 1st. The ticket office closes at 17:30"
        },
        {
            title : "Piazza Santissima Annunziata",
            image : "https://www.visittuscany.com/shared/visittuscany/immagini/attivita/innocents-museum-florence.jpg",
            description : "Square characterised by the Renaissance aspect",
            information : "The Piazza della Santissima Annunziata is characterised by the Renaissance aspect which Brunelleschi conferred in it with the construction of the colonnade for the Ospedale degli Innocenti. The elegant harmony of the hospital building conditions the entire square, and the colonnade itself is later repeated in the Loggiato dei Serviti, and in the façade of the church. As a result Brunelleschi’s design assumes a certain urbanistic importance, underlined by the fact that this square is one of the few points of the city from which one can see the cupola of the Cathedral, the monumental symbol of the fifteenth century city. The square has also always played a significant role in the religious, cultural and economic life of Florence, which is closely related to the religious institute of the Servants of Mary. In fact the presence of an image of the Annunciation which is believed to be miraculous has made the church of Santissima Annunziata an important centre of devotion, and a destination for pilgrimages and processions. As well as this, the fact that in Florence the feast of the Annunciation (25 March) coincided up until 1750 with the start of the new civil year, made the square the obvious choice for the celebration of this holiday which was both civic and religious. This square also hosts one of the most typical traditions, the Rificolona. This Florentine Feast is held every September 7th, the night before the Nativity of the Virgin Mary.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8286328375775!2d11.258414865346108!3d43.77641597911727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404d4f23393%3A0xdac6cafc2c6474c4!2sPiazza%20della%20Santissima%20Annunziata%2C%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1654690746364!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "No ticket needed.",
            address : "Piazza della Santissima Annunziata, Firenze",
            open : "Open 7 days a week"
        },
        {
            title : "Fortezza da Basso",
            image : "https://upload.wikimedia.org/wikipedia/commons/6/63/Fortezza_da_basso%2C_11.JPG",
            description : "Fortezza designed in 1500",
            information : "Designed by Antonio da Sangallo the Younger (1533-35), the Fortezza has been completely remodeled and is now an exhibition and conference center. This complex and prestigious environment combines charming and perfectly restored historic places (such as the Quartieri Monumentali - the Monumental Area - or the Polveriera) with modern pavilions, specifically built to increase the space availability, such as the Spadolini Pavilion and the more recently built Cavaniglia Pavilion.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11522.294821185724!2d11.2487085!3d43.7817072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdae6de98479783b0!2sFortezza%20da%20Basso!5e0!3m2!1sit!2sit!4v1654856909196!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest0.id,
            ticket : "The entrance fee depends on the events hosted.",
            address : "Viale Filippo Strozzi, 1, 50129 Firenze FI, Italia",
            open : "Open during temporary exhibitions and events."
        },
        {
            title : "Ponte alle Grazie",
            image : "https://i0.wp.com/www.risorgimentofirenze.it/wp-content/uploads/2017/12/copertina-4.jpg?fit=700%2C376&ssl=1",
            description : "Ponte alle Grazie was the third bridge to be built after Ponte Vecchio and Ponte alla Carraia.",
            information : "Its first name was 'Ponte Rubaconte' after the Podestà at the time of its first construction (1237). The present name derives from the chapel of 'Santa Maria delle Grazie', located on the bridge since the 14th century, where the image of the saint was worshipped; among the numerous religious buildings that characterized the bridge the one of the cloistered nuns 'Le Murate' (then moved to Via Ghibellina) is worthy of mention. During the 19th century from one of its 'shops' it was possible to reach the river and use the 'public baths' real bathing estabishments of the time.In 1944 the bridge - like all the others, with the exception of the Ponte Vecchio - was destroyed during the Nazi retreat. The present bridge was inaugurated in 1957.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.291084337825!2d11.2587278!3d43.7661583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b6bcb90d040fd40!2sPonte%20alle%20Grazie!5e0!3m2!1sit!2sit!4v1656318411089!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte alle Grazie, 50122 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Ponte alla Carraia",
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ponte_alla_carraia%2C_view.JPG/1200px-Ponte_alla_carraia%2C_view.JPG",
            description : "The second bridge built over the Arno after Ponte Vecchio",
            information : "The original bridge was the second one built over the Arno after Ponte Vecchio, hence the name 'new bridge'. It was also known as the 'ponte alle Carra: the work was erected at the behest of the Umiliati di Ognissanti fathers, the first Florentine wool entrepreneurs, and was used to divert wagon traffic to the homonymous city Gate of the penultimate circle of walls. Over the centuries it was rebuilt several times following the numerous floods of the Arno, but also in 1304, when it collapsed under the excessive weight of the crowd that had come to attend a show on the river. The bridge, rebuilt by Cosimo I de' Medici, lasted for about four centuries, as it was destroyed – like all others, with the only exception of Ponte Vecchio - in 1944 during the Nazi retreat. The current version dates back to 1951.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.127968631159!2d11.245144215345944!3d43.77020237911753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56ab7a958695%3A0x2d1ab5e5c9c04c9d!2sPonte%20alla%20Carraia!5e0!3m2!1sit!2sit!4v1656318724574!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "No ticket needed.",
            address : "Ponte Alla Carraia, 50125 Firenze FI, Italia",
            open : "Open 7 days a week"
        },
        {
            title : "Corridoio Vasariano",
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/2016_Vasari_Corridor_02.jpg/1200px-2016_Vasari_Corridor_02.jpg",
            description : "Built by the celebrated architect Giorgio Vasari.",
            information : "The corridor was built by the celebrated architect Giorgio Vasari in just five months during 1565 to enable the Grand Dukes to move freely – and safely – from the seat of government to their residence in Palazzo Pitti; the butcher’s stalls on Ponte Vecchio were moved elsewhere in order to do away with the bad smells they emanated and were replaced with goldsmith’s workshops; after crossing the Arno, the corridor ran along above the façade of Santa Felicita, where the Medici family could attend religious functions by making use of a balcony protected with a grille that looked onto the interior of the church. Closed to the public since 2016, once the refurbishment works will be over, the world-renowned Corridor will re-open to visitors, presumably in 2022. The collection of self-portraits that was traditionally on view there will be substituted with a selection of ancient statues and inscriptions, sixteenth-century frescoes originally decorating the external walls of the Corridor, and two memorials dedicated to the Georgofili bombing occurred in 1993 and the WWII bombing of Florence.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.232826419934!2d11.25097721534585!3d43.76802557911754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400089286d7%3A0xaf9de1c796cdfea4!2sCorridoio%20Vasariano%2C%2050125%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1656319305541!5m2!1sit!2sit",
            typePointOfInterestId : typePointOfInterest1.id,
            ticket : "The access will be defined once reopened.",
            address : "Piazzale degli Uffizi, 50122 Firenze FI, Italia",
            open : "Temporary closed."
        }


    ]
    const pointOfInterest0 = await models.PointOfInterest.create(pointOfInterestsList[0]) //ITINERARIO 1
    const pointOfInterest1 = await models.PointOfInterest.create(pointOfInterestsList[1]) //ITINERARIO 3
    const pointOfInterest2 = await models.PointOfInterest.create(pointOfInterestsList[2]) //ITINERARIO 1
    const pointOfInterest3 = await models.PointOfInterest.create(pointOfInterestsList[3]) //ITINERARIO 2
    const pointOfInterest4 = await models.PointOfInterest.create(pointOfInterestsList[4]) //ITINERARIO 3
    const pointOfInterest5 = await models.PointOfInterest.create(pointOfInterestsList[5]) //ITINERARIO 3
    const pointOfInterest6 = await models.PointOfInterest.create(pointOfInterestsList[6]) //ITINERARIO 2
    const pointOfInterest7 = await models.PointOfInterest.create(pointOfInterestsList[7]) //ITINERARIO 1
    const pointOfInterest8 = await models.PointOfInterest.create(pointOfInterestsList[8]) //ITINERARIO 1
    const pointOfInterest9 = await models.PointOfInterest.create(pointOfInterestsList[9]) //ITINERARIO 1
    const pointOfInterest10 = await models.PointOfInterest.create(pointOfInterestsList[10]) //ITINERARIO 2
    const pointOfInterest11 = await models.PointOfInterest.create(pointOfInterestsList[11]) //ITINERARIO 4
    const pointOfInterest12 = await models.PointOfInterest.create(pointOfInterestsList[12]) //ITINERARIO 2
    const pointOfInterest13 = await models.PointOfInterest.create(pointOfInterestsList[13]) //ITINERARIO 2
    const pointOfInterest14 = await models.PointOfInterest.create(pointOfInterestsList[14]) //ITINERARIO 3
    const pointOfInterest15 = await models.PointOfInterest.create(pointOfInterestsList[15]) //ITINERARIO 2
    const pointOfInterest16 = await models.PointOfInterest.create(pointOfInterestsList[16]) //TINERARIO 3
    const pointOfInterest17 = await models.PointOfInterest.create(pointOfInterestsList[17]) //ITINERARIO 2
    const pointOfInterest18 = await models.PointOfInterest.create(pointOfInterestsList[18])
    const pointOfInterest19 = await models.PointOfInterest.create(pointOfInterestsList[19]) //ITINERARIO 4
    const pointOfInterest20 = await models.PointOfInterest.create(pointOfInterestsList[20]) //ITINERARIO 4
    const pointOfInterest21 = await models.PointOfInterest.create(pointOfInterestsList[21]) //ITINERARIO 4
    //models.PointOfInterest.create(pointOfInterestsList[1])
    const typeEventList = [
        {
            type_name : "Summer Events"
        },
        {
            type_name : "Winter Events"
        }
    ]
    const typeEvent0 = await models.TypeEvent.create(typeEventList[0])
    const typeEvent1 = await models.TypeEvent.create(typeEventList[1])
    const eventList = [
        {
            title : "Scoppio del carro",
            image : "https://www.ansa.it/webimages/img_457x/2022/4/17/483328650a7ad0e54683b1e6e4e1b44b.jpg",
            description : "Traditional party for easter that takes place in Piazza del Duomo.",
            information :"On the morning of Easter, the magic of the 'explosion of the cart' is renewed. The 'Brindellone', the chariot 'of fire' escorted by 150 among armed, musicians and flag-wavers of the Historical Parade of the Florentine Republic, moves from the square of Prato, pulled by two pairs of white cattle infiorati, and arrives in Piazza del Duomo, where it is placed in the space between the Baptistery and the Cathedral. Then, to the song of 'Gloria in Excelsis Deo', is set fire to the fuse of the dove that, hissing, goes to ignite the firecrackers and fireworks expertly arranged on the cart. The explosion of the cart is a ceremony that has a particular significance, especially for the Florentines, because it calls into question historical and devotional motives intimately connected to the identity of the city. Just think of the hopes drawn for centuries from the flight of the Colombina from the high altar of the Duomo reaches the cart causing the explosion; from the course of that race has always fantasized about how it would appear in the campaigns the upcoming harvest season. Not to mention the legendary story of the Brindellone: the word 'brindellone' belongs to the Florentine jargon and defines a tall person, dangling, maybe a bit 'malformed and a little 'beggar, to which one looks but with a certain affection and with a substantial sympathy. It seems that the origin of the combination between this word and the cart goes back to the feast celebrated by the Florentine Mint in honor of its patron, Saint John the Baptist. On June 24, a hay cart started from the tower of the Mint and went around the city, pulling a man dressed in rags that obviously represented the holy hermit and that was called 'brindellone', also because it tended to dangle a lot, especially after eating and drinking abundantly during the banquet consumed in the square. Since then the term remained in popular use to identify all the floats used in the city for public ceremonies",
            date : "2022-04-17",
            pointOfInterestId : pointOfInterest0.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Calcio Storico",
            image : "https://i.ytimg.com/vi/aYB2RlTxMhk/maxresdefault.jpg",
            description : "Traditional game that takes place in Piazza Santa Croce.",
            information :"A tradition still very dear to fans and footballers, which has its origins in the history of the first games with the ball, from the Sphincter of the ancient Greeks passing through the Roman Harpastum and through the Middle Ages, in which Football on the streets was an activity very appreciated by the Florentines, until the iconic match of February 17, 1530 in which the citizens, albeit exhausted by the hunger and the siege of Charles V, took to the streets and began to play football in mockery of the enemy. Today the historical Football is the most fierce competition involving the city, a unique show of its kind and a strong element of identity for citizens.",
            date : "2022-06-10",
            endDate : "2022-06-24",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Fuochi di San Giovanni",
            image : "https://www.firenzetoday.it/~media/horizontal-hi/356682651955/fuochi-artificio-2.jpg",
            description : "Patron saint festival.",
            information :"On June 24, Florence is characterized by events of all kinds that take place throughout the day: flag-wavers, historical parade, races between the rowing clubs along the Arno and fireworks (or fire). The local festivity coincides with the final of Football in Costume, a lively medieval version of football or football in Piazza Santa Croce. At 22.00 there are fireworks and the best place to see them is definitely from Ponte Santa Trinita, from there you can see the Ponte Vecchio in the foreground and the fireworks behind, with their spectacular games and colors.",
            date : "2022-06-24",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Festa della Rificolona",
            image : "https://www.ilturista.info/repo/images/no/Rificolona.jpg",
            description : "Traditional party that takes place around Piazza SS. Annunziata.",
            information :"The Festa dell Rificolona, otherwise known as the paper lantern festival, is one of the best Italian festivals and specific to the Tuscan capital of Florence. This festival celebrates the birthday of Madonna who sometime, over 2000 years ago, was born in a small village close to Nazareth. In Florence, the Basilica Santissima Annunziata is dedicated to the Virgin Mary. And, for centuries, peasants and farmers would travel in pilgrimage from the surrounding areas to participate in the religious celebrations.",
            date : "2022-09-07",
            pointOfInterestId : pointOfInterest1.id,
            typeEventId : typeEvent1.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Pitti Immagine Uomo",
            image : "https://massimilianosorvino.it/wp-content/uploads/2019/06/Pitti-Uomo.png",
            description : "One of the most important fashion event in Italy.",
            information :"Pitti Immagine Uomo is the most important event for Pitti Immagine. It is organized every year every six months and has a worldwide relevance with regard to men’s fashion. It takes place inside the Fortezza da Basso. Among the stylists involved in the following years are Valentino, Missoni, Moschino and Dries van Noten.",
            date : "2022-06-14",
            endDate : "2022-06-17",
            pointOfInterestId : pointOfInterest0.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Cavalcata dei Magi",
            image : "https://www.intoscana.it/wp-content/uploads/Cavalcata-dei-Magi-2014-16-courtesy-Opera-foto-Marco-Mori-1.jpg",
            description : "Traditional party that takes place in Piazza del Duomo.",
            information :"The origins of this festival date back to the fifteenth century when it was customary to organize a lively performance entitled Feast of the Magi, which culminated in the 'ride' of three different parades that, once gathered at the Baptistery of San Giovanni, went on to St Mark’s Square. The event was very linked to the Medici family who had wanted and organized it for decades. At the turn of the sixteenth century, after their expulsion, this tradition lost strength and became extinct, to find new life in the second half of the 90s of the last century. The event, whose composition is inspired by the famous cycle of frescoes 'The Chapel of the Magi' by Benozzo Gozzoli, includes a procession, composed of 700 participants (including those of the Historical Procession of the Florentine Republic), which usually starts from Piazza Pitti, to parade in the streets of the historic center and arrive in Piazza Duomo, where the final part of the celebration takes place, with the greeting of the participants, the explosion of the colubrina, and the deposition of gifts at the foot of the living crib.",
            date : "2022-01-06",
            pointOfInterestId : pointOfInterest9.id,
            typeEventId : typeEvent1.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Capodanno Fiorentino",
            image : "https://www.artemidefirenze.com/wp-content/uploads/2019/03/capodanno-fiorentino-3.jpg",
            description : "Traditional party that takes place in Piazza SS. Annunziata",
            information :"The Florentine New Year is one of the official holidays of the City of Florence and is celebrated on 25 March each year.The origin of this particular location dates back to the Middle Ages when on March 25 (the day on which the Church celebrates the Announcement of the Incarnation received by the Virgin Mary, corresponding to the ninth month before the birth of Jesus) was taken over by the city as the beginning of the civil calendar. In 1582 came into force the Gregorian calendar that fixed the beginning of the year to January 1. But Florence stubbornly continued to consider March 25 as his New Year’s Eve, until, in November 1749, the Grand Duke Francis III of Lorraine issued a decree that also fixed for Florence the 1st of January as the starting date from which to start the calendar year. The event is remembered with a historical parade that starts from the Palagio di Parte Guelfa winds through the city streets, up to the Basilica of SS. Annunziata, where the people of the countryside went on pilgrimage to pay homage to the sacred effigy of Our Lady. About this image the popular story tells that the Servants of Mary, founders of the Basilica, did paint the fresco of their 'Glorious Virgin' in 1252 to a certain friar Bartholomew, but the pious artist, when he found himself outlining the face of Our Lady, He was taken by a creative void and was unable to proceed in the work; he made several attempts that left him however more and more dissatisfied, so much so that the poor man almost decided to abandon the enterprise. One evening, suddenly he was taken by a strange drowsiness and upon waking up, the legend says, the face of the Virgin looked before him prodigiously painted by the angels; the miracle was accomplished! This image was considered miraculous and remained the object of great veneration especially by the spouses who still go to the Basilica to leave a bouquet of flowers and ask for the blessing for their union.",
            date : "2022-03-25",
            pointOfInterestId : pointOfInterest9.id,
            typeEventId : typeEvent1.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Trofeo Marzocco",
            image : "https://www.ilpendolo.it/wp-content/uploads/2022/05/Bandierai-degli-Uffizi.jpg",
            description : "Traditional party that takes place in Piazza della Signoria",
            information :"The Marzocco Trophy, the exciting competition of flag-wavers that every year takes us back into the atmosphere of the chivalric tenzoni, sees challenge, in Piazza Signoria, historical groups of flag-wavers accompanied by the exhibition of 'Musici', which give even more thickness to the ethereal choreographies of the flags. Before the race, the teams are accompanied in the square by the Historical Parade of the Florentine Republic, along an itinerary through the city streets.",
            date : "2022-05-01",
            pointOfInterestId : pointOfInterest9.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "La Fiorita",
            image : "https://citynews-firenzetoday.stgy.ovh/~media/original-hi/23793256218801/foto-comm-ne-savonarola-madonne-3.jpg",
            description : "Traditional party that takes place from Piazza della Signoria to Ponte Vecchio",
            information :"After being forcibly torn from the convent of San Marco and having suffered repeated and terrifying tortures in the cell at the base of the Tower of Arnolfo (still open)On 23 May 1498, Girolamo Savonarola was hanged in Piazza della Signoria with his brothers Domenico Buonvicini and Silvestro Maruffi. Their bodies were subsequently burned and the ashes thrown into the Arno, in a frenzied crescendo of violence and hatred. The next morning, on the site of the stake (still identifiable today through a commemorative plaque in red granite) was found a carpet of flowers, a tribute that someone had wanted to set up with love and tenderness, almost to bring to light that humanity that the orgy of violence just consumed seemed to have obscured. That moving gesture gave rise to the ceremony of the Infiorata, which has the merit of reminding us of a historical figure of extraordinary interest, a sort of ridge between the Middle Ages and the modern era, with the radicality of its spiritual, ethical and political tensions. The ceremony, preceded by the Mass in the Chapel of the Priors of Palazzo Vecchio, takes place in Piazza della Signoria, with the Historical Parade of the Florentine Republic that reaches the Ponte Vecchio from where flowers are thrown into the Arno.",
            date : "2022-05-23",
            pointOfInterestId : pointOfInterest9.id,
            typeEventId : typeEvent0.id,
            ticket : "No ticket needed. Free event."
        },
        {
            title : "Partita dell'Assedio",
            image : "https://cultura.comune.fi.it/system/files/2020-09/calcio%20storico.png",
            description : "Traditional party that takes place in Piazza Santa Croce.",
            information :"Every year, in the picturesque setting of Piazza Santa Croce, the historic match played on 17 February 1530 is commemorated. Florence had been a republic for three years and Pope Clement VII (born Giulio de' Medici) had made an agreement with Emperor Charles V for a military siege that forced the Florentines to embrace the Medici cause. The city, which had resisted the Spanish troops for two years, decided, in mockery to the enemies, to keep alive the traditional game of Historical Football, which was then played for the Carnival. A show of strength made through the game, at a time when there would be little will to play. The message was clear: we are stronger than your guns. The imperial troops positioned on the adjacent hills could only observe, white of wonder and green of bile (the same colors of the players on the field), the spirit of a city rising higher than the difficulties. The re-enactment of the event is preceded by the exhibition of the Bandierai of the Uffizi and the parade of the Florentine Historical Parade.",
            date : "2022-02-17",
            pointOfInterestId : pointOfInterest9.id,
            typeEventId : typeEvent1.id,
            ticket : "No ticket needed. Free event."
        }
    ]
    const event0 = await models.Event.create(eventList[0])
    const event1 = await models.Event.create(eventList[1])
    const event2 = await models.Event.create(eventList[2])
    const event3 = await models.Event.create(eventList[3])
    const event4 = await models.Event.create(eventList[4])
    const event5 = await models.Event.create(eventList[5])
    const event6 = await models.Event.create(eventList[6])
    const event7 = await models.Event.create(eventList[7])
    const event8 = await models.Event.create(eventList[8])
    const event9 = await models.Event.create(eventList[9])
    const typeServiceList = [
        {
            type_name : "Pharmacies",
            image : "https://cdn.farmaciediturno.org/foto728/f_8226.jpg"
        },
        {
            type_name : "Banks",
            image : "https://upload.wikimedia.org/wikipedia/commons/b/b5/Firenze_-_Banca_Toscana_Piazza_Della_Signoria.jpg"
        },
        {
            type_name : "Supermarkets",
            image : "https://www.coopfirenze.it/uploads/38598/news/coopfi.jpg"
        },
        {
            type_name : "Parkings",
            image : "https://www.internationalgarage.com/images/6.jpg"
        },
        {
            type_name : "Hospitals",
            image : "https://i0.wp.com/www.firenzepost.it/wp-content/uploads/2013/09/CAREGGI.jpg?resize=600%2C399"
        }
    ]
    const typeService0 = await models.TypeService.create(typeServiceList[0])
    const typeService1 = await models.TypeService.create(typeServiceList[1])
    const typeService2 = await models.TypeService.create(typeServiceList[2])
    const typeService3 = await models.TypeService.create(typeServiceList[3])
    const typeService4 = await models.TypeService.create(typeServiceList[4])
    const ItineraryPointOfInterestList = [
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest2.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest7.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest8.id
        },
        {
            itineraryId : itinerary0.id,
            pointOfInterestId : pointOfInterest9.id
        },
        {
            itineraryId : itinerary3.id,
            pointOfInterestId : pointOfInterest10.id
        },
        {
            itineraryId : itinerary3.id,
            pointOfInterestId : pointOfInterest11.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest12.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest13.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest15.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest17.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest1.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest3.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest4.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest5.id
        },
        {
            itineraryId : itinerary1.id,
            pointOfInterestId : pointOfInterest6.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest14.id
        },
        {
            itineraryId : itinerary2.id,
            pointOfInterestId : pointOfInterest16.id
        },
        {
            itineraryId : itinerary3.id,
            pointOfInterestId : pointOfInterest19.id
        },
        {
            itineraryId : itinerary3.id,
            pointOfInterestId : pointOfInterest20.id
        },
        {
            itineraryId : itinerary3.id,
            pointOfInterestId : pointOfInterest21.id
        }
    ]
    ItineraryPointOfInterestList.map((item) => models.ItineraryPointOfInterest.create(item))
    const EventPointOfInterestList = [
        {
            eventId : event0.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            eventId : event0.id,
            pointOfInterestId : pointOfInterest1.id
        },
        {
            eventId : event1.id,
            pointOfInterestId : pointOfInterest7.id
        },
        {
            eventId : event2.id,
            pointOfInterestId : pointOfInterest10.id
        },
        {
            eventId : event2.id,
            pointOfInterestId : pointOfInterest11.id
        },
        {
            eventId : event3.id,
            pointOfInterestId : pointOfInterest17.id
        },
        {
            eventId : event4.id,
            pointOfInterestId : pointOfInterest18.id
        },
        {
            eventId : event5.id,
            pointOfInterestId : pointOfInterest9.id
        },
        {
            eventId : event5.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            eventId : event6.id,
            pointOfInterestId : pointOfInterest17.id
        },
        {
            eventId : event6.id,
            pointOfInterestId : pointOfInterest0.id
        },
        {
            eventId : event7.id,
            pointOfInterestId : pointOfInterest1.id
        },
        {
            eventId : event8.id,
            pointOfInterestId : pointOfInterest1.id
        },
        {
            eventId : event8.id,
            pointOfInterestId : pointOfInterest10.id
        },
        {
            eventId : event9.id,
            pointOfInterestId : pointOfInterest7.id
        },
    ]
    EventPointOfInterestList.map((item) => models.EventPointOfInterest.create(item))
    const serviceList = [
        {
            name : "Officina Profumo Famraceutica di Santa Maria Novella",
            image : "https://d1e00ek4ebabms.cloudfront.net/production/0c09b29c-f361-473d-a6d9-b08bdfe156c0.jpg",
            description : "Pharmacy very near to piazza SM Novella",
            information : "The Officina Profumo-Farmaceutica di Santa Maria Novella is one of the oldest in the world, its origins date back to the XIII century.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5761.877428064988!2d11.247742!3d43.774131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b1cdc4af6c0fb7a!2sOfficina%20Profumo-Farmaceutica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1654259091272!5m2!1sit!2sit",
            typeServiceId : typeService0.id,
            address : "Via della Scala 16, Firenze",
            open : "Monday - Sunday from 10:00 to 19:00"
        },
        {
            name : "Farmacia del Cinghiale",
            image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Piazza_del_Mercato_Nuovo_4r%2C_farmacia_del_cinghiale_01.jpg/640px-Piazza_del_Mercato_Nuovo_4r%2C_farmacia_del_cinghiale_01.jpg",
            description : "Pharmacy located inside the Loggia of 'Mercato della Paglia'",
            information : "This pharmacy - whose foundation dates back to 1752 - owes its name to the wild boar statue “Fontana del Porcellino”.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1336721386083!2d11.252267515501556!3d43.77008397911734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400497bc2f7%3A0xe0cbac252804808c!2sAntica%20Farmacia%20del%20Cinghiale!5e0!3m2!1sit!2sit!4v1656335146137!5m2!1sit!2sit",
            typeServiceId : typeService0.id,
            open : "Monday - Sunday from 09:00 to 20:00",
            address: "P.zza Mercato Nuovo 4r, Firenze"
        },
        {
            name : "Farmacia Santo Spirito",
            image : "https://www.feelflorence.it/sites/www.feelflorence.it/files/2020-07/santo-spirito-orizz.jpg",
            description : "Pharmacy located in the city center.",
            information : "Founded in 1908 by Gilda Bacci, the pharmacy is located on the ground floor of the fifteenth-century Palazzo Dati.",
            iFrame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11525.288097920278!2d11.2468823!3d43.7661738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x170865fabdad2f3e!2sFarmacia%20Santo%20Spirito!5e0!3m2!1sit!2sit!4v1656334465783!5m2!1sit!2sit",
            typeServiceId : typeService0.id,
            open : "From Monday to Saturday. 09-13, 16:20.",
            address: "Piazza Santo Spirito, 12/r, 50125 Firenze FI"
        },
        {
            name : "Santa Maria Novella Intesa San Paolo",
            image : "https://www.italicom.net/site/wp-content/uploads/2019/11/intesa-sanpaolo-1.jpg",
            description : "Intesa San Paolo Bank.",
            information : "Bank very near to the central station and Piazza Santa Maria Novella",
            iFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7779019484465!2d11.250128315346128!3d43.77746897911716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a541d541d9a2b%3A0x6ac23f48c6f48903!2sIntesa%20Sanpaolo%20S.p.A.!5e0!3m2!1sit!2sit!4v1656336356674!5m2!1sit!2sit",
            typeServiceId : typeService1.id,
            address: "Via Nazionale, 93 95/R, 50123 Firenze FI",
            open: "From Monday to Friday. 08:30-13:30, 14:45-16:55."
        },
        {
            name : "Banca Monte dei Paschi di Siena",
            image : "https://img.zonebourse.com/reuters/2022-03/2022-03-28T162901Z_1_LYNXNPEI2R0UR_RTROPTP_3_ITALY-POLITICS-MONTE-PASCHI.JPG",
            description : "Monte dei Paschi di Siena Bank.",
            information : "Bank located in the city center, very near to the Duomo of Florence.",
            iFrame: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11524.01025770784!2d11.252992!3d43.7728056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f733e39aada89c4!2sBanca%20Monte%20dei%20Paschi%20di%20Siena!5e0!3m2!1sit!2sit!4v1656336017153!5m2!1sit!2sit",
            typeServiceId : typeService1.id,
            address: "Via dei Pecori, 6 - 8, 50123 Firenze FI",
            open: "From Monday to Friday. 08:20-13:25, 14:20-15:45."
        },
        {
            name : "Coop.fi",
            image : "https://www.coopfirenze.it/uploads/45062/original/montramito_2.jpeg",
            description : "UniCoop supermarket.",
            information : "UniCoop supermarket located very near to the city center",
            iFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.096295635828!2d11.271228315345933!3d43.770859879117424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540c992a3475%3A0x67cb9fb86c0d79e3!2sCoop!5e0!3m2!1sit!2sit!4v1656336673664!5m2!1sit!2sit",
            typeServiceId : typeService2.id,
            address: "Via Cimabue, 48, 50121 Firenze FI",
            open: "From Monday to Sunday. 08:00-21:00."
        },
        {
            name : "Conad City",
            image : "https://www.viverecamerino.it/upload/2021_11/719870_Cfakepath32.jpg",
            description : "Conad supermarket.",
            information : "Little Conad City located very near to the city center",
            iFrame: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5762.192579625311!2d11.273417!3d43.77086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90432a3fedd58ab8!2sCONAD%20CITY!5e0!3m2!1sit!2sit!4v1656336745172!5m2!1sit!2sit",
            typeServiceId : typeService2.id,
            address: "Via Scipione Ammirato, 94, 50136 Firenze FI",
            open: "From Monday to Sunday. 07:30-20:30."
        },
        {
            name : "Parking Duomo",
            image : "https://www.inflorencetoday.com/ita/servizi/parcheggi/foto/Parcheggio-Parking-Duomo.jpg",
            description : "Car Park.",
            information : "Very big car park located in the city center, very near to the Duomo.",
            iFrame: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11524.151984231352!2d11.2608537!3d43.7720701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3767a63e59a39fbf!2sParking%20Duomo!5e0!3m2!1sit!2sit!4v1656337301872!5m2!1sit!2sit",
            typeServiceId : typeService3.id,
            address: "Via dell' Oriuolo, 14, 50122 Firenze FI",
            open: "24/7"
        },
        {
            name : "Quick Garage Centrale",
            image : "https://www.inflorencetoday.com/ita/servizi/parcheggi/foto/Quick-Garage-Centrale-Gozzoli-Firenze.jpg",
            description : "Central Car Park.",
            information : "Underground car park located in the city center, very near to Palazzo Ruccellai and Ponte alla Carraia.",
            iFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1676.3870308856858!2d11.24708493540515!3d43.77138409551926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56abc637dee3%3A0x1510841555a19fdb!2sQuick%20Garage%20Centrale!5e0!3m2!1sit!2sit!4v1656337554292!5m2!1sit!2sit",
            typeServiceId : typeService3.id,
            address: "Via dei Fossi, 50R, 50123 Firenze FI",
            open: "From Monday to Sunday. 07:00-00:00."
        },
        {
            name : "Ospedale Torregalli",
            image : "https://www.gpapartners.com/upload/progetti/GL-1586334640.jpg",
            description : "The biggest and most famous hospital in Florence.",
            information : "The New Hospital of San Giovanni di Dio is located in Florence in Soffiano-Le Bagnese. It is also called Torregalli, from the name of the Castle of Torre Galli next to which it stands. He inherited the hospitaller activity of the old hospital of San Giovanni di Dio, in the city center.",
            iFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.7195408075318!2d11.201462915345443!3d43.757920479117885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a57525edba73d%3A0x174ba80da408acef!2sMedicina%20Interna%20Nuovo%20San%20Giovanni%20di%20Dio%20(Torregalli)!5e0!3m2!1sit!2sit!4v1656338067399!5m2!1sit!2sit",
            typeServiceId : typeService4.id,
            address: "Via Torregalli, 1, 50143 Firenze FI",
            open: "24/7"
        },
        {
            name : "Ospedale Santa Maria Nuova",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/44/Ospedale_di_santa_maria_nuova%2C_porticato_%285%29.JPG",
            description : "The oldest hospital located in the Florence city center.",
            information : "The hospital of Santa Maria Nuova is a hospital in Florence, located in the square of the same name, in the historic center. Founded in 1288 by Folco Portinari, father of the famous Beatrice loved by Dante, it is the oldest hospital in the city among those still fully active, and one of the oldest in Europe.",
            iFrame: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6561.5775762984!2d11.254668719645649!3d43.77398799421558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69074f9350caf598!2sOspedale%20Santa%20Maria%20Nuova!5e0!3m2!1sit!2sit!4v1656665250502!5m2!1sit!2sit",
            typeServiceId : typeService4.id,
            address: "Piazza di Santa Maria Nuova, 1, 50122 Firenze FI",
            open: "24/7"
        }
    ]
    serviceList.map(service => models.Service.create(service))
}
