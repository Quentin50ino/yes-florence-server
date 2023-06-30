const express = require('express')
const app = express()
const initialize = require('./initialize')
const initializeDatabaseConnection = require('./initializeDatabaseConnection')
app.use(express.json())
const { Op } = require('sequelize');
const port = 3000;

async function startApplicationServer() {
    const models = await initializeDatabaseConnection.initializeDatabaseConnection();
    //initialize.initialize(models)

    //API that simply returns all the pointOfInterests present in the points_of_interest table
    app.get("/pointOfInterests", async (req, res) => {
        const pointOfInterestsList = await models.PointOfInterest.findAll();
        return res.json(pointOfInterestsList)
    })

    //API that returns all the details of a specific point of interest. It takes from the params the id of the specific point of interest
    //the user has deciced to see in details. 
    app.get('/pointOfInterests/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.PointOfInterest.findOne({ where: { id : id }})
        return res.json(result)
    })

    //API that returns all the itineraries that involves a specific point of interest. It takes from the params the id of the specific
    //point of interest.
    app.get('/pointOfInterests/itinerariesInvolved/:id', async (req, res) => {
        const id = +req.params.id
        //First we store in the result constant all the ids of the itineraries linked with our specific point of interest
        //in the table itinerary_point_of_interest (this table in fact link all the points of interest with one or more itineraries) 
        const result = await models.ItineraryPointOfInterest.findAll({ where: { pointOfInterestId : id }})
        let itineraries = []
        //In this for loop we find in the itineraries table a corrispondence for each itineraryId that we have stored previously in
        //the result constant. Finally we push all the results in the itineraries array, in order to have all the itineraries 
        //that involves our specific point of interest
        for(let i=0; i<result.length; i++){
            itineraries.push(await models.Itinerary.findOne({ where : {id : result[i].itineraryId}}))
        }
        return res.json(itineraries)
    })

    //API that returns all the events hosted in a specific point of interest. It takes from the params the id of the specific
    //point of interest.
    app.get('/pointOfInterests/eventsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        //First we store in the result constant all the ids of the events linked with our specific point of interest
        //in the table event_point_of_interest (this table in fact link all the points of interest with one or more events) 
        const result = await models.EventPointOfInterest.findAll({ where: { pointOfInterestId : id }})
        let events = []
        //In this for loop we find in the events table a corrispondence for each eventId that we have stored previously in
        //the result constant. Finally we push all the results in the events array, in order to have all the events 
        //hosted in our specific point of interest
        for(let i=0; i<result.length; i++){
            events.push(await models.Event.findOne({ where : {id : result[i].eventId}}))
        }
        return res.json(events)
    })

    //API that returns all the points of interest that has a specific typePointOfInterestId (in fact we do a query with a simple where condition).
    //We pass this specific id in the body of the request, so we use a POST method for implement this API.
    app.post("/findInterests", async (req, res) => {
        const id = req.body.id;
        const interestsList = await models.PointOfInterest.findAll({
            where: {
              typePointOfInterestId: id
            }
          });
        return res.json(interestsList)
    })

    //API that simply returns all the events present in the events table
    app.get("/events", async (req, res) => {
        const eventsList = await models.Event.findAll();
        return res.json(eventsList)
    })

    //API that returns all the details of a specific event. It takes from the params the id of the specific event
    //the user has deciced to see in details. 
    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({ where: { id }}) 
        return res.json(result)
    })

    //API that returns all the points of interest that host a particular event. It takes from the params the id of the specific
    //event.
    app.get('/events/pointOfInterestsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        //First we store in the result constant all the ids of the points of interest linked with our specific event
        //in the table event_point_of_interest (this table in fact link all the points of interest with one or more events)
        const result = await models.EventPointOfInterest.findAll({ where: { eventId : id }})
        let pointOfInterests = []
        //In this for loop we find in the points_of_interests table a corrispondence for each pointOfInterestId that we have stored previously in
        //the result constant. Finally we push all the results in the pointsOfInterest array, in order to have all the points of interest
        //that host our specific event
        for(let i=0; i<result.length; i++){
            pointOfInterests.push(await models.PointOfInterest.findOne({ where : {id : result[i].pointOfInterestId}}))
        }
        return res.json(pointOfInterests)
    })

    //API that returns all the events that has a specific typeEventId (in fact we do a query with a simple where condition).
    //We pass this specific id in the body of the request, so we use a POST method for implement this API.
    app.post("/findEvents", async (req, res) => {
        const id = req.body.id;
        const eventsList = await models.Event.findAll({
            where: {
              typeEventId: id
            }
          });
        return res.json(eventsList)
    })

    //API that returns all the events that has a start date that is included in a range of two dates (in fact we do a query with a 
    //where condition in which we check that the date is included between the two dates the user decide to pass to the back end).
    //We pass this two dates in the body of the request, so we use a POST method for implement this API.
    app.post("/findEventsByDate", async (req, res) => {
        const startDate = req.body.startDate;
        const endDate = req.body.endDate
        const eventsList = await models.Event.findAll({
            where : {"date" : {[Op.between] : [startDate , endDate ]}}
          });
        return res.json(eventsList)
    })

    //API that simply returns all the itineraries present in the itineraries table
    app.get("/itineraries", async (req, res) => {
        const itinerariesList = await models.Itinerary.findAll();
        return res.json(itinerariesList)
    })

    //API that returns all the details of a specific itinerary. It takes from the params the id of the specific itinerary
    //the user has deciced to see in details.
    app.get('/itineraries/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({ where: { id }}) 
        return res.json(result)
    })

    //API that returns all the points of interest that host a particular event. It takes from the params the id of the specific
    //event.
    app.get('/itineraries/pointOfInterestsInvolved/:id', async (req, res) => {
        const id = +req.params.id
        //First we store in the result constant all the ids of the points of interest linked with our specific itinerary
        //in the table itinerary_point_of_interest (this table in fact link all the points of interest with one or more itineraries)
        const result = await models.ItineraryPointOfInterest.findAll({ where: { itineraryId : id }})
        let pointOfInterests = []
        //In this for loop we find in the points_of_interests table a corrispondence for each pointOfInterestId that we have stored previously in
        //the result constant. Finally we push all the results in the pointsOfInterest array, in order to have all the points of interest
        //that host our specific itinerary
        for(let i=0; i<result.length; i++){
            pointOfInterests.push(await models.PointOfInterest.findOne({ where : {id : result[i].pointOfInterestId}}))
        }
        return res.json(pointOfInterests)
    })

    //API that returns all the itineraries that has a specific typeItineraryId (in fact we do a query with a simple where condition).
    //We pass this specific id in the body of the request, so we use a POST method for implement this API.
    app.post("/findItineraries", async (req, res) => {
        const id = req.body.id;
        const itineraryList = await models.Itinerary.findAll({
            where: {
              typeItineraryId: id
            }
          });
        return res.json(itineraryList)
    })

    //API that simply returns all the services present in the services table
    app.get("/services", async (req, res) => {
        const servicesList = await models.Service.findAll();
        return res.json(servicesList)
    })

    //API that returns all the services that has a specific typeServiceId (in fact we do a query with a simple where condition).
    //It takes from the params the typeServiceId of the specific service type the user has deciced to see in details.
    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Service.findAll({ where: { typeServiceId : id }}) 
        return res.json(result)
    })

    //API that simply returns all the services type present in the type_services table
    app.get("/servicesType", async (req, res) => {
        const typeServiceList = await models.TypeService.findAll();
        return res.json(typeServiceList)
    })

    //API that returns all the details of a specific service type. It takes from the params the id of the specific service type
    //the user has deciced to see in details.
    app.get('/servicesType/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.TypeService.findOne({ where: { id }}) 
        return res.json(result)
    })

    //API that simply returns all the points of interest type present in the type_point_of_interest table
    app.get("/pointOfInterestsType", async (req, res) => {
        const typePointOfInterestList = await models.TypePointOfInterest.findAll();
        return res.json(typePointOfInterestList)
    })

    //API that simply returns all the itineraries type present in the type_itineraries table
    app.get("/itinerariesType", async (req, res) => {
        const typeItinerariestList = await models.TypeItinerary.findAll();
        return res.json(typeItinerariestList)
    })

    //API that simply returns all the events type present in the type_events table
    app.get("/eventsType", async (req, res) => {
        const typeEventstList = await models.TypeEvent.findAll();
        return res.json(typeEventstList)
    })

    
    
}

startApplicationServer();

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`)
})