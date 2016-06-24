/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photoes: [String],
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
  people: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  amount: Number,
});

module.exports = mongoose.model('City', citySchema);
