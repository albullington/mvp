const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/glassdoor')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw err;
  });

const reviewSchema = new mongoose.Schema({
  company: String,
  industry: String,
  jobTitle: String,
  location: String,
  leadershipLevel: String,
  support: Boolean,
  equality: Boolean,
  voice: Boolean,
  interruptions: Boolean,
  compensation: {
    salary: Number,
    averageRaise: Number,
    equity: Number,
    numPromotions: Number,
    maternityLeave: Number,
    vacationDays: Number,
    flexDays: Number,
  },
  nursingRoom: Boolean,
  psychologicalSafety: Number,
  recommendToWomen: Number,
  comments: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports.searchReviews = (query) => {
  Review.find(query);
};

module.exports.saveReviews = (doc) => {
  Review.create(doc);
};

module.exports.Review = Review;
