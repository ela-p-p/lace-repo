const mongoose = require('mongoose');
/* eslint-disable */
const Schema = mongoose.Schema;

const billVotesSchema = new Schema({
  Member: {
    type: String,
    text: true,
  },
  bill2: {
    voteReading1: String,
    voteReading2: String,
    voteReading3: String,
  },
  bill5: {
    voteReading1: String,
    timeAllocation: String,
    voteReading2: String,
    voteReading3: String,
  },
  bill27: {
    voteReading1: String,
    voteReading2: String,
    voteReading3: String,
  },
  eachmppId : { type: Schema.Types.ObjectId, ref: 'eachmpps' },
  votingStatsId:  {type: Schema.Types.ObjectId, ref: 'votingStats' },
});

const billVotes = mongoose.model('billVotes', billVotesSchema);

module.exports = billVotes;
