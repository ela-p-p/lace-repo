const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  followingId: [{ type: Schema.Types.ObjectId, ref: 'eachmpps' }],
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
