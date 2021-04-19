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

EVENTS.get('/', async (req, res) => {
    try {
        const events = await Event.find()
        if (!events) throw new Error('No events')
        res.status(200).json(events) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

EVENTS.post('/', async (req, res) => {
    const newEvent = new Event(req.body)
    try {
        const event = await newEvent.save()
        if (!event) throw new Error('Something went wrong saving the event')
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

EVENTS.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await Event.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

EVENTS.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await Event.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = EVENTS;
