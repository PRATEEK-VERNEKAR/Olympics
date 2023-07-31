const mongoose=require('mongoose');

const sportsSchems=mongoose.Schema({})

const Sports=new mongoose.model('sport',sportsSchems)
const Countries=new mongoose.model('country',sportsSchems)

module.exports.Sports=Sports
module.exports.Countries=Countries
