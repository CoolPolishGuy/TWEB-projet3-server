const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BattleSchema = new Schema({
  winner : String,
  looser : String,
  xpWinner : Number,
  xpLooser : Number,
  levelWinner: Number,
  levelLooser: Number

});

BattleSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('Battle', BattleSchema);