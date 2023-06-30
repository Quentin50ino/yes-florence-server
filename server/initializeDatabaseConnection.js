const { Sequelize, DataTypes } = require("sequelize")

//Development (this code was used in development in order to connect to our local postgres database)
//const database = new Sequelize("postgres://postgres:pippo@localhost:5432/hyp_project")

//Production (use this code when deploying to production in Heroku)
//this code is used to connect the application to the postgres database stored on heroku
const pg = require('pg')
pg.defaults.ssl = true
const connectionURI = "postgres://ertbcagt:FJkEZt0FOve1xH4HtOeNhC59X_DyXixA@silly.db.elephantsql.com/ertbcagt"
const database = new Sequelize(connectionURI, {
    ssl: true,
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})


//Function that will initialize the connection to the database and will create all the
//structures of the tables and their connections.
export default async function initializeDatabaseConnection() {
    await database.authenticate()
    const PointOfInterest = database.define("point_of_interest", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING(1000),
        information : DataTypes.STRING(10000),
        iFrame : DataTypes.STRING(1000),
        ticket : DataTypes.STRING(1000),
        address : DataTypes.STRING,
        open : DataTypes.STRING
    })
    const Itinerary = database.define("itinerary", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING(1000),
        duration : DataTypes.INTEGER,
        ticket : DataTypes.STRING(1000),
        itineraryImage: DataTypes.STRING
    })
    const Event = database.define("event", {
        title : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING(1000),
        information : DataTypes.STRING(10000),
        date : DataTypes.DATE,
        endDate : DataTypes.DATE,
        ticket : DataTypes.STRING(1000),
    })
    const Service = database.define("service", {
        name : DataTypes.STRING,
        image : DataTypes.STRING,
        description : DataTypes.STRING,
        information : DataTypes.STRING(1000),
        iFrame : DataTypes.STRING(1000),
        address : DataTypes.STRING,
        open : DataTypes.STRING
    })
    const TypePointOfInterest = database.define("type_point_of_interest", {
        type_name : DataTypes.STRING
    })
    const TypeService = database.define("type_service", {
        type_name : DataTypes.STRING,
        image : DataTypes.STRING
    })
    const TypeItinerary = database.define("type_itinerary", {
        type_name : DataTypes.STRING
    })
    const TypeEvent = database.define("type_event", {
        type_name : DataTypes.STRING
    })
    const ItineraryPointOfInterest = database.define("itinerary_point_of_interest", {}) //definition of table that links itineraries and points of interest
    const EventPointOfInterest = database.define("event_point_of_interest", {}) //definition of table that links events and points of interest
    //Many to Many relationship between Itinerary and PointOfInterest
    Itinerary.belongsToMany(PointOfInterest, { through: ItineraryPointOfInterest }); 
    PointOfInterest.belongsToMany(Itinerary, { through: ItineraryPointOfInterest }); 
    //Many to Many relationship between Event and PointOfInterest
    Event.belongsToMany(PointOfInterest, { through: EventPointOfInterest }); 
    PointOfInterest.belongsToMany(Event, { through: EventPointOfInterest }); 
    //One to Many relationship between TypePointOfInterest and PointOfInterest
    TypePointOfInterest.hasMany(PointOfInterest)
    PointOfInterest.belongsTo(TypePointOfInterest)
    //One to Many relationship between TypeServicet and Service
    TypeService.hasMany(Service)
    Service.belongsTo(TypeService)
    //One to Many relationship between TypeItinerary and Itinerary
    TypeItinerary.hasMany(Itinerary)
    Itinerary.belongsTo(TypeItinerary)
    //One to Many relationship between TypeEvent and Event
    TypeEvent.hasMany(Event)
    Event.belongsTo(TypeEvent)
    await database.sync({ force: true })
    return {
        PointOfInterest,
        Itinerary,
        TypePointOfInterest,
        TypeService,
        TypeItinerary,
        TypeEvent,
        Event,
        Service,
        ItineraryPointOfInterest,
        EventPointOfInterest
    }
}