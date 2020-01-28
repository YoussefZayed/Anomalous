const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const realEstateSchema = new Schema(
  {
    address: { type: String, required: true, unique: true },
    postalCode: { type: String },
    description: { type: String },
    bedrooms : {type: mongoose.Decimal128 },
    bathrooms: {type: mongoose.Decimal128 },
    price: {type: mongoose.Decimal128 , required: true },
    yearBuilt : {type : Number},
    buildingType : {type : String},
    lotSize: {type: mongoose.Decimal128 },
    date: { type: Date, required: true },
  },
  {
    timestamps: true
  }
);

const RealEstate = mongoose.model('Real Estate',realEstateSchema);

module.exports = RealEstate;