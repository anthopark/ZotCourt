const express = require('express');
const Court = require('../models/court');
const logRequest = require('../middleware/log');
const { StatusCodes } = require('http-status-codes');
const courtData = require('../../court-data.json');


const router = new express.Router();

// endpoint for retrieving all courts
router.get('/api/court/all', logRequest, async (req, res) => {
    let courts = [];

    try {
        courts = await Court.find({});
        res.status(StatusCodes.OK).send(courts);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.toString());
    }
})


// endpoint for retrieving an individual court info by courtId
router.get('/api/court/info', logRequest, async (req, res) => {
    const { courtId } = req.query;

    let courts;

    try {
        courts = await Court.findOne({ courtId });
        res.status(StatusCodes.OK).send(courts);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.toString());
    }
})

// endpoint for checking in at a court
router.post('/api/court/check-in', logRequest, async (req, res) => {
    const { courtId } = req.body;

    try {
        const court = await Court.findOne({ courtId });
        court.checkedIn += 1
        await court.save()
        res.status(StatusCodes.OK).send(court);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.toString());
    }
})


// endpoint from the PI for updating a court as occupied
router.post('/api/court/occupied', logRequest, async (req, res) => {
    const { courtId } = req.body

    res.status(StatusCodes.OK).send();
})


// endpoint from the PI for updating a court as vacant
router.post('/api/court/vacant', logRequest, async (req, res) => {
    const { courtId } = req.body

    res.status(StatusCodes.OK).send();
})



// endpoint for DB re-initialization
router.get('/db/reset', logRequest, async (req, res) => {
    try {
        await Court.deleteMany({});
        console.log('Deleted all docs');

        courtData.courts.forEach( async (court) => {
            const courtDoc = new Court(court);
            await courtDoc.save()
        })
        console.log('Created fresh docs');
        
        
        res.status(StatusCodes.OK).send();
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.toString());
    }

})


module.exports = router;