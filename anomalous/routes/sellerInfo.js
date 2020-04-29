const router = require("express").Router();
const mongoose = require("mongoose");
let SellerInfo = require("../models/sellerInfo.model");

router.route("/").get((req, res) => {
  SellerInfo.find()
    .then(sellerInfo => res.json(sellerInfo))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get( (req, res) => {

  SellerInfo.findById(req.params.id)
  .then(sellerinfo => res.json(sellerinfo))
  .catch( err => res.status(400).json("Error :" + err));
});


router.route('/:id').delete( (req, res) => {
  SellerInfo.findByIdAndDelete(req.params.id)
  .then( () => res.json('Item Deleted') )
  .catch( err => res.status(400).json("Error :" + err));
});

router.route('/update/:id').post( (req,res) => {

  SellerInfo.findById(req.params.id)
  .then(sellerInfo => {
  sellerInfo.hearAboutUs = req.body.hearAboutUs;
  sellerInfo.firstName = req.body.firstName;
  sellerInfo.lastName = req.body.lastName;
  sellerInfo.phone = Number(req.body.phone);
  sellerInfo.email = req.body.email ;
  sellerInfo.address = req.body.address;
  sellerInfo.postalCode = req.body.postalCode;
  sellerInfo.typeOfProperty = req.body.typeOfProperty;
  sellerInfo.bedrooms = Number(req.body.bedrooms);
  sellerInfo.bathrooms = Number(req.body.bathrooms);
  sellerInfo.hasgarage = Boolean(req.body.hasgarage);
  sellerInfo.garageSpaces = Number(req.body.garageSpaces);
  sellerInfo.parkingOnStreet = Boolean(req.body.parkingOnStreet);
  sellerInfo.otherParkingSpots = Number(req.body.otherParkingSpots);
  sellerInfo.hasbasement = Boolean(req.body.hasbasement);
  sellerInfo.basementFinished = Boolean(req.body.basementFinished);
  sellerInfo.hasPool = Boolean(req.body.hasPool);
  sellerInfo.lotSize = Number(req.body.lotSize);
  sellerInfo.yearBuilt = Number(req.body.yearBuilt);
  sellerInfo.typeOfRepair = req.body.typeOfRepair;
  sellerInfo.costForMint = Number(req.body.costForMint);
  sellerInfo.sellReason = req.body.sellReason;
  sellerInfo.hoaFees = req.body.hoaFees;
  sellerInfo.owedOnProp = Number(req.body.owedOnProp);
  sellerInfo.takePayoff = Boolean(req.body.takePayoff);
  sellerInfo.payAndTaxIsCurrent = Boolean(req.body.payAndTaxIsCurrent);
  sellerInfo.askPrice = Number(req.body.askPrice);
  sellerInfo.priceFlexible = Boolean(req.body.priceFlexible);
  sellerInfo.assessedValue = Number(req.body.assessedValue);
  sellerInfo.dateSellerBought = (req.body.dateSellerBought);
  sellerInfo.originalSellerPrice = Number(req.body.originalSellerPrice);
  sellerInfo.schoolDistrict = req.body.schoolDistrict;
  sellerInfo.quickComps = req.body.quickComps;
  sellerInfo.makingOffer = Boolean(req.body.makingOffer);
  sellerInfo.offerPrice = Number(req.body.offerPrice);
  sellerInfo.agentName = req.body.agentName;

  sellerInfo.save()
  .then( () => res.json('Item Updated!') )
  .catch( err => res.status(400).json("Error :" + err));

  })
  .catch( err => res.status(400).json("Error :" + err));

});





router.route("/add").post((req, res) => {
  const hearAboutUs = req.body.hearAboutUs;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = Number(req.body.phone);
  const email = req.body.email 
  const address = req.body.address;
  const postalCode = req.body.postalCode;
  const typeOfProperty = req.body.typeOfProperty;
  const bedrooms = Number(req.body.bedrooms);
  const bathrooms = Number(req.body.bathrooms);
  const hasgarage = Boolean(req.body.hasgarage);
  const garageSpaces = Number(req.body.garageSpaces);
  const parkingOnStreet = Boolean(req.body.parkingOnStreet);
  const otherParkingSpots = Number(req.body.otherParkingSpots);
  const hasbasement = Boolean(req.body.hasbasement);
  const basementFinished = Boolean(req.body.basementFinished);
  const hasPool = Boolean(req.body.hasPool);
  const lotSize = Number(req.body.lotSize);
  const yearBuilt = Number(req.body.yearBuilt);
  const typeOfRepair = req.body.typeOfRepair;
  const costForMint = Number(req.body.costForMint);
  const sellReason = req.body.sellReason;
  const hoaFees = req.body.hoaFees;
  const owedOnProp = Number(req.body.owedOnProp);
  const takePayoff = Boolean(req.body.takePayoff);
  const payAndTaxIsCurrent = Boolean(req.body.payAndTaxIsCurrent);
  const askPrice = Number(req.body.askPrice);
  const priceFlexible = Boolean(req.body.priceFlexible);
  const assessedValue = Number(req.body.assessedValue);
  const dateSellerBought = (req.body.dateSellerBought);
  const originalSellerPrice = Number(req.body.originalSellerPrice);
  const schoolDistrict = req.body.schoolDistrict;
  const quickComps = req.body.quickComps;
  const makingOffer = Boolean(req.body.makingOffer);
  const offerPrice = Number(req.body.offerPrice);
  const agentName = req.body.agentName;


    
  const newSellerInfo = new SellerInfo({
    hearAboutUs,
    firstName,
    lastName,
    phone,
    email,
    address,
    postalCode,
    typeOfProperty,
    bedrooms,
    bathrooms,
    hasgarage,
    garageSpaces,
    parkingOnStreet,
    otherParkingSpots,
    hasbasement,
    basementFinished,
    hasPool,
    lotSize,
    yearBuilt,
    typeOfRepair,
    costForMint,
    sellReason,
    hoaFees,
    owedOnProp,
    takePayoff,
    payAndTaxIsCurrent,
    askPrice,
    priceFlexible,
    assessedValue,
    dateSellerBought,
    originalSellerPrice,
    schoolDistrict,
    quickComps,
    makingOffer,
    offerPrice,
    agentName,
  })

  newSellerInfo
    .save()
    .then(() => res.json("Home Info Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
