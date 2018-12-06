/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// schema for event (
const eventsSchema = new Schema({
    eventName: {
    type: String,
    required: true,
  },
  eventSpeaker: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true    
  },
  eventLocation: {
    type: String,
    required: true,
  },
  followingId: String,
  userId: String,
});

// This creates our model from the above schema, using mongoose's model method
const events = mongoose.model('events', eventsSchema);

module.exports = events;
