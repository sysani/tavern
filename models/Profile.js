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
    {
      game: {
        type: String,
        required: true
      },
      members: {
        type: [String],
        required: true
      },
      location: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
