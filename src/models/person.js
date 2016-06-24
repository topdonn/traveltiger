
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  gender: String,
  photo: String,
  cities: [{ type: Schema.Types.ObjectId, ref: 'City' }],
  balance: Number,
});

module.exports = mongoose.model('Person', personSchema);
