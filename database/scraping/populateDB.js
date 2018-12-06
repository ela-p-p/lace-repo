/* eslint-disable */
const CronJob = require('cron').CronJob;
const mppconstituenciesSeed = require('../seeds/mppconstituencies');
const mppconstituencies = require('../models/mppConstituency');
const billVotes = require('../models/billVotes')
const eachMPP = require('../models/eachMPP')
const billVotesSeed = require('../seeds/billVotes')
const arrayNames = require('../seeds/arrayNames')

// seed mppconstituencies DB
const mppInfoSeed = new CronJob('* 4 0 1 1 *', () => {
    const d = new Date();
    console.log('mppInfoSeed:', d);
    mppconstituencies
        .create(mppconstituenciesSeed)
        .then(dbmppconst => {
            console.log(dbmppconst);
        })
        .catch(err => {
            console.log(err.message);
        });
})
// ///// reference eachMPP with MPPconstituency (address/email)
// const refEachMpp = new CronJob('30 * * * * *', () => {
const refEachMpp = new CronJob('* 6 0 1 1 *', () => {
    const result = arrayNames.map(a => a.name);
    for (let m = 0; m < result.length; m += 1) {
        const lastName = result[m].substring(result[m].lastIndexOf(' ') + 1);
        mppconstituencies
            .find({ $text: { $search: lastName } })
            .then(dbmodel =>
                eachMPP.findOneAndUpdate({ $text: { $search: lastName } }, { addressEmailId: dbmodel[0]._id }, { new: true })
            )
            .then(dbconst => {
                console.log(dbconst);
            })
            .catch(err => {
                console.log(err);
            });
    }
})
// seed billVotes DB
const billVotesSeeder = new CronJob('* 10 0 1 1 *', () => {
    const d = new Date();
    console.log('billVotes:', d);
    billVotes
        .create(billVotesSeed)
        .then(dbbillVotes => {
            console.log(dbbillVotes);
        })
        .catch(err => {
            console.log(err.message);
        });
})

// first
mppInfoSeed.start();
// mppInfoSeed.stop();
// second
refEachMpp.start();
// refEachMpp.stop();
billVotesSeeder.start();
// billVotesSeeder.stop();
module.exports = mppInfoSeed;
module.exports = billVotesSeeder;
module.exports = refEachMpp



// // //populate voting stats with billVotes refererence
// function populateDB(nameArray) {
//   votingStats
//     .find({})
//     .then(dbmodel => billVotes.findOneAndUpdate({ $text: { $search: nameArray } }, { votingStatsId: dbmodel[0]._id }))
//     .then(dbconst => {
//       console.log(dbconst);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// const result = arrayNames.map(a => a.name);
// for (let m = 0; m < result.length; m += 1) {
//   const last = result[m].substring(result[m].lastIndexOf(' ') + 1);
//   populateDB(last);
// }

// //seed DB
// votingStats
//   .create(votingStatsSeed)
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
