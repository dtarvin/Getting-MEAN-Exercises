const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const reviewsCreate = (req, res) => { 
    res
      .status(200)
      .json({"status" : "success"});
};
const reviewsReadOne = (req, res) => { };
const reviewsUpdateOne = (req, res) => { };
const reviewsDeleteOne = (req, res) => { };

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
};