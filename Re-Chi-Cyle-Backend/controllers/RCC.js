const express = require('express');
const EVENTS = express.Router();
const Event = require('../models/event.js');
const moment = require('moment');
const mongoose = require('mongoose');


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

EVENTS.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        if (!events) throw new Error('No events')
        res.status(200).json(events) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

EVENTS.post('/', async (req, res, next) => {
    // const event = new Event({
    //     title: req.body.title,
    //     location: req.body.location,
    //     date: req.body.date,
    //     startTime: req.body.startTime,
    //     endTime: req.body.endTime,
    //     description: req.body.description
    await Event.create(req.body, (err, data) => {
        if (err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
    });
//     try {
//         const newEvent = await event.save();
//         res.status(200).json(newEvent);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

EVENTS.put('/:id', async (req, res, next) => {
    await Event.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Event updated!!')
        }
    })
    });
//         if (!response) throw Error('Something went wrong ')
//         const updated = { ...response._doc, ...req.body }
//         res.status(200).json(updated)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

EVENTS.delete('/:id', async (req, res, next) => {
    await Event.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({msg: data})
        }
    })
});
//         if (!removed) throw Error('Something went wrong ')
//         res.status(200).json(removed)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


module.exports = EVENTS;
