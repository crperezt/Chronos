const mongoose = require('mongoose');

const { Schema } = mongoose;

// UNCOMMENT THE LINE BELOW AND REPLACE WITH AN ACTUAL MONGODB URI FOR YOUR "CUSTOMERS" DATABASE
const myURI = '{YOUR_DB_FOR_CUSTOMERS_SERVICE}';

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!!!********* Customer Database is live!!!'))
  .catch((err) => console.log('Connection Error ', err));

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const CustomerModel = mongoose.model('CustomerModel', CustomerSchema);

module.exports = CustomerModel;
