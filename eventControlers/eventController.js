const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Event } = require('../models/event');

router.get('/', (req, res) => {
    Event.find((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Getting' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with given id : $(req.params.id)')
    }
    Event.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Getting' + JSON.stringify(err, undefined, 2));
        }
    })
})

router.post('/', (req, res) => {
    var event = new Event({
        place : req.body.place,
        type : req.body.type,
        cost : req.body.cost,
        itinerary : req.body.itinerary,
    })
    event.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Saving' + JSON.stringify(err, undefined, 2));
        }
    });
})

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with given id : $(req.params.id)')
    };
    var event = {
        place : req.body.place,
        type : req.body.type,
        cost : req.body.cost,
        itinerary : req.body.itinerary,
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event}, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Saving' + JSON.stringify(err, undefined, 2));
        }
    });
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with given id : $(req.params.id)');
    }
    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log('Error in Saving' + JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;
