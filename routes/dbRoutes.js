/* eslint-disable */
const express = require('express');
const arrayNames = require('../database/seeds/arrayNames');
const eachMPP = require('../database/models/eachMPP');
const hansard = require('../database/models/Hansard');
const billVotes = require('../database/models/billVotes');
const bills = require('../database/models/Bills');


module.exports = app => {
   
    app.get('/bills/scrape', (req, res) => {
      req.logout();
      res.redirect('/');
    });
  
    app.get('/api/current_user', (req, res) => {
      res.send(req.user);
    });
  };