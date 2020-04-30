const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
    hearAboutUs: { type: String },
    firstName: { type: String , required: true},
    lastName: { type: String , required: true},
    phone: { type: Number , required: true},
    email: { type: String },
    address: { type: String, required: true, unique: true },
    postalCode: { type: String },
    typeOfProperty: { type: String },
    bedrooms : {type: Number },
    bathrooms: {type: Number },
    hasgarage : { type: Boolean },
    garageSpaces : {type : Number},
    parkingOnStreet : { type: Boolean },
    otherParkingSpots : {type : Number},
    hasbasement : { type: Boolean },
    basementFinished : { type: Boolean },
    hasPool : { type: Boolean},
    lotSize: { type: Number },
    yearBuilt : {type : Number},
    typeOfRepair: { type: String },
    costForMint: {type: Number },
    sellReason : { type: String },
    hoaFees : { type: String },
    owedOnProp: {type: Number },
    takePayoff : { type: Boolean},
    payAndTaxIsCurrent : { type: Boolean},
    askPrice: {type: Number , required: true },
    priceFlexible : { type: Boolean},
    assessedValue: {type: Number },
    dateSellerBought: { type: String },
    originalSellerPrice: {type: Number },
    schoolDistrict: { type: String },
    quickComps: { type: String },
    makingOffer : { type: Boolean},
    offerPrice: {type: Number },
    agentName : { type: String },

  },
  {
    timestamps: true
  }
);

const SellerInfo = mongoose.model('Seller Info',sellerSchema);

module.exports = SellerInfo;