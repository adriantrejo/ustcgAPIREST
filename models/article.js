var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
var articleSchema = new Schema({
  title:            { type: String },
  paragraphs:       { type: Array },
});
module.exports = mongoose.model('article', articleSchema);