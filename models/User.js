import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  loses: {
    type: Number,
    default: 0
  },
  cardsGuessed: {
    type: Number,
    default: 0
  },
  wasPicked: {
    type: Number,
    default: 0
  },
  totalScore: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('user', userSchema);
