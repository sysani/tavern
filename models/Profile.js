const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  //create reference to user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  //status: looking for groups/in a group
  status: {
    type: String,
    required: true
  },
  //list of games user is interested in
  games: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  //list of groups user is in
  groups: [
    //groups contains a list of objects containing a game, members, location and status (open/closed)
    {
      game: String,
      required: true
    },
    {
      members: [String],
      required: true
    },
    {
      location: String,
      required: true
    },
    {
      status: Boolean,
      required: true
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
