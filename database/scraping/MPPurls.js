/* eslint-disable */
const cheerio = require('cheerio');
const axios = require('axios');
const MPPurl = require('../models/MPPurl');
const CronJob = require('cron').CronJob;

const mppUrlScrape = new CronJob('* 10 * * *', () => {
  const d = new Date();
  console.log('First:', d);
  const resultsArray = [];
  // router.get('/scrape', (req, res) => {
  axios('https://www.ola.org/en/members/current').then(response => {
    const $ = cheerio.load(response.data);
    $('td.views-field.views-field-field-full-name-by-last-name.is-active').each((i, element) => {
      const result = {};
      result.url = $(element)
        .find('a')
        .attr('href');
      result.url = `https://www.ola.org${result.url}`;
      resultsArray.push(`https://www.ola.org${result.url}`);

      MPPurl.create(result)
        .then(dbMPPurl => {
          console.log(dbMPPurl);
        })
        .catch(err => res.json(err));
    });
  });
});
// mppUrlScrape.start();

module.exports = mppUrlScrape;
