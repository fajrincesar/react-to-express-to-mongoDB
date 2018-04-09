//part of connecting express backend to mongodb using mongoose
//this folder is needed to create models and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    nama: String,
    usia: Number,
    kota: String
});

const member = mongoose.model('member', memberSchema);

module.exports = member;