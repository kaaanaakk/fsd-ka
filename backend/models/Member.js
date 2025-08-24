const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  rollNumber: {
    type: String,
    required: [true, 'Roll number is required'],
    unique: true
  },
  year: {
    type: String,
    required: [true, 'Year is required']
  },
  degree: {
    type: String,
    required: [true, 'Degree is required']
  },
  aboutProject: {
    type: String,
    default: ''
  },
  hobbies: {
    type: String,
    default: ''
  },
  certificate: {
    type: String,
    default: ''
  },
  internship: {
    type: String,
    default: ''
  },
  aboutAim: {
    type: String,
    default: ''
  },
  profileImage: {
    type: String,
    required: [true, 'Profile image is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;