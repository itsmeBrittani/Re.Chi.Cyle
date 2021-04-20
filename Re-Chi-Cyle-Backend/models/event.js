const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        title: String,
        location: String,
        date: String,
        startTime: String, 
        endTime: String,
        description: String
    },
    { 
        timestamps: true }
    );

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;