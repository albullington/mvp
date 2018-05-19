const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/glassdoor', (err, db) => {
  if (!err) {
    console.log('mongodb connected');
  }

  const collection = db.collection('companies');

});