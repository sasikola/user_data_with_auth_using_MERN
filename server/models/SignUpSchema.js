const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type:String,
    required:true
  },
  phone: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  howDidYouHear: [String]
});

const SignUp = mongoose.model('Auth', SignUpSchema);

module.exports = SignUp;
