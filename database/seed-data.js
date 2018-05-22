const faker = require('faker');
const mongoose = require('mongoose');
const { Review } = require('./db');

const examples = [];

for (let i = 0; i < 5; i++) {
  examples.push({
    company: faker.company.companyName(),
    industry: faker.name.jobArea(),
    jobTitle: faker.name.jobTitle(),
    leadershipLevel: faker.name.title(),
    interruptions: faker.random.boolean(),
    recommend: faker.random.boolean(),
  });
}

// for (let i = 0; i < 10; i++) {
//   examples.push({
//     company: faker.company.companyName(),
//     industry: faker.name.jobArea(),
//     jobTitle: faker.name.jobTitle(),
//     location: faker.address.city(),
//     leadershipLevel: faker.name.title(),
//     support: faker.random.boolean(),
//     equality: faker.random.boolean(),
//     voice: faker.random.boolean(),
//     interruptions: faker.random.boolean(),
//     compensation: {
//       salary: faker.random.number(),
//       averageRaise: faker.random.number(),
//       equity: faker.random.number(),
//       numPromotions: faker.random.number(),
//       maternityLeave: faker.random.number(),
//       vacationDays: faker.random.number(),
//       flexDays: faker.random.number(),
//     },
//     nursingRoom: faker.random.boolean(),
//     psychologicalSafety: faker.random.number(),
//     recommendToWomen: faker.random.number(),
//     comments: faker.lorem.paragraph(),
//   });
// }

Review.insertMany(examples)
  .then(() => {
    mongoose.disconnect();
  })
  .catch((err) => {
    throw err;
  });
