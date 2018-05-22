const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/glassdoor')
  .then(() => {
    console.log('mongoose connected');
  })
  .catch((err) => {
    mongoose.disconnect();
    throw err;
  });

const reviewSchema = new mongoose.Schema({
  company: String,
  industry: String,
  jobTitle: String,
  leadershipLevel: String,
  interruptions: Boolean,
  recommend: Boolean,
});

// const reviewSchema = new mongoose.Schema({
//   company: String,
//   industry: String,
//   jobTitle: String,
//   location: String,
//   leadershipLevel: String,
//   support: Boolean,
//   equality: Boolean,
//   voice: Boolean,
//   interruptions: Boolean,
//   compensation: {
//     salary: Number,
//     averageRaise: Number,
//     equity: Number,
//     numPromotions: Number,
//     maternityLeave: Number,
//     vacationDays: Number,
//     flexDays: Number,
//   },
//   nursingRoom: Boolean,
//   psychologicalSafety: Number,
//   recommend: Number,
//   comments: String,
// });

module.exports.Review = mongoose.model('Review', reviewSchema);

