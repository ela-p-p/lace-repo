/* eslint-disable */
const cheerio = require('cheerio');
const axios = require('axios');
const Hansard = require('../models/Hansard');
const CronJob = require('cron').CronJob;

const hansardScraper = new CronJob('* 2 0 1 1 *', () => {
  const d = new Date();
  console.log('hansardScraper:', d);
  axios('https://www.ola.org/en/legislative-business/house-documents/parliament-42/session-1/2018-10-02/hansard')
    .then(response => {
      const $ = cheerio.load(response.data);
      const result = {};
      let speechCut = [];
      $('.speakerStart').each((e, element) => {
        result.name = $(element)
          .find('strong')
          .text();
        result.speech = [];
        const speeches = $(element);
        for (let j = 0; j < speeches.length; j += 1) {
          const findColon = $(speeches[j])
            .text()
            .indexOf(':');
          for (let i = 0; i < speeches.length; i += 1) {
            speechCut = $(speeches)
              .text()
              .substring(findColon + 1);
          }
        }
        result.speech.push(speechCut);
        Hansard.create(result)
          .then(dbHansard => {
            console.log(dbHansard);
          })
          .catch(err => res.json(err));
      });
    });
});
hansardScraper.start();
// hansardScraper.stop();
module.exports = hansardScraper;