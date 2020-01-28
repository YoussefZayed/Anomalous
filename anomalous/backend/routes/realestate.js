const router = require("express").Router();
const mongoose = require("mongoose");
let RealEstate = require("../models/realestate.model");

router.route("/").get((req, res) => {
  RealEstate.find()
    .then(realEstates => res.json(realEstates))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const address = req.body.address;
  const description = req.body.description;
  const bedrooms = Number(req.body.bedrooms);
  const bathrooms = Number(req.body.bathrooms);
  const price = Number(req.body.price);
  const yearBuilt = Number(req.body.yearBuilt);
  const buildingType = req.body.buildingType;
  const lotSize = mongoose.Decimal128(req.body.lotSize);
  const date = Date.parse(req.body.date);

    
  const newRealEstate = new RealEstate({
    address,
    description,
    bedrooms,
    bathrooms,
    price,
    yearBuilt,
    buildingType,
    lotSize,
    date
  })

  newRealEstate
    .save()
    .then(() => res.json("Real Estate Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
