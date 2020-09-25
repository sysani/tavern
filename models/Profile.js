const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  //create reference to user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String,
    requred: true
  },
  //status: looking for groups/in a group looking for members/closed
  status: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  //list of games user is interested in
  games: {
    type: [String]
  },
  //list of groups user is in
  groups: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
