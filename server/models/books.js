/*
COMP229-F2020-MidTerm-301098663, Franz Cadiente, 301098663, 10/26/2020
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
