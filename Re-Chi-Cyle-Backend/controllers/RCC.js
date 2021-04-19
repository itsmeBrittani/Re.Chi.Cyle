const express = require('express');
const EVENTS = express.Router();
const Event = require('../models/event.js');
const moment = require('moment');


//Routes
//seed

EVENTS.get('/seed', async (req, res) => {
    const newEvents =
        [
            {
            title: 'Shred a Thon',
            location: '1400 N Ashland Ave, Chicago, IL, 60622',
            date: 'Saturday, April 17th, 2021',
            startTime: '9 AM',
            endTime: '12 PM',
            description: 'Free community event sponsored by 2nd Ward Alderman Brian Hopkins. Point of Contact : Lisa Ryan - Contact Number: 312-643-2299'
        }, {
            title: 'Shred a Thon',
            location: '3557 S King Dr, Chicago, IL 60653',
            date: 'Saturday, April 17th, 2021',
            startTime: '9 AM',
            endTime: '12 PM',
            description: 'Free community event sponsored by 4th Ward Alderman Sophia King. Contact Number: 773-536-8103'
        }, {
            title: 'Shred a Thon',
            location: '7901 S Sangamon St, Chicago, IL 60620',
            date: 'Saturday, April 24th, 2021',
            startTime: '9 AM',
            endTime: '1 PM',
            description: 'Free community event sponsored by 17th Ward Alderman David Moore. Point of Contact : Cynthia Love - Contact Number: 773-934-3225'
        }
    ]

    try {
        const seedItems = await Event.create(newEvents)
        res.send(seedItems)
    } catch (err) {
        res.send('This is not what I want');
    }
});

EVENTS.all('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
})

//index
EVENTS.route('/').get((req, res) => {
    Event.find((err, foundEvents) => {
    if (err) {
        return next(error)
    } else {
    res.json(foundEvents);
    };
});

//create
EVENTS.post('/create').post((req, res, next) => {
    Event.create(req.body, (err, createdEvent) => {
        if (err) {
            return next(error)
        } else {
        res.json(createdEvent);
        res.redirect('/action');
    };
});
});

//update
EVENTS.put('/:id').post((req, res, next) => {
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedEvent) => {
        if (err) {
            return next(err);
        } else {
        res.json(updatedEvent);
    };
});
});

// //show
// EVENTS.get('/action/event/:id', (req, res) => {
//     Event.findById(req.params.id, (err, foundEvent) => {if (err) {
//         res.status(400).json({ error: err.message});
//     }
//     res.status(200).json(foundEvent);
// });
// })

//destroy
EVENTS.delete('/:id').delete((req, res, next) => {
    Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
        if (err) {
            return next(err)
        } else {
        res.json(deletedEvent);
        res.direct('/action')
    };
});
});
});

module.exports = EVENTS;
