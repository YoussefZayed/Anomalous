const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema(
    {
    firstName: { type: String , required: true},
    lastName: { type: String , required: true},
    phone: { type: Number , required: true},
    email: { type: String },
    companyLocation : { type: String },
    wantrehab : { type: Boolean },
    rehabTeamReady : { type: Boolean },
    areaTargets : { type: String },
    propertiesBoughtLastYear : {type : Number},
    propertiesBoughtThisYear : {type : Number},
    bottleneck : {type : String},
    financeMethod: { type: String },
    typeOfProperty : { type: String },
    equityOrCOCRPreferance : { type: String },
    equityOrCOCRExpectation : {type: Number },
    maxPrice : {type: Number, required: true },
   
    },
    {
      timestamps: true
    }
  );
  
  const BuyerInfo = mongoose.model('Buyer Info',buyerSchema);
  
  module.exports = BuyerInfo;