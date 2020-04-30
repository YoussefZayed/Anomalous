const router = require("express").Router();
const mongoose = require("mongoose");
let BuyerInfo = require("../models/buyerInfo.model");

router.route("/").get((req, res) => {
    BuyerInfo.find()
      .then(buyerInfo => res.json(buyerInfo))
      .catch(err => res.status(400).json("Error: " + err));
  });

  router.route('/:id').get( (req, res) => {

    BuyerInfo.findById(req.params.id)
    .then(buyerInfo => res.json(buyerInfo))
    .catch( err => res.status(400).json("Error :" + err));
  });
  
  
  router.route('/:id').delete( (req, res) => {
    BuyerInfo.findByIdAndDelete(req.params.id)
    .then( () => res.json('Item Deleted') )
    .catch( err => res.status(400).json("Error :" + err));
  });
  
  router.route('/update/:id').post( (req,res) => {
  
    BuyerInfo.findById(req.params.id)
    .then(buyerInfo => {
        buyerInfo.firstName = req.body.firstName;
        buyerInfo.lastName = req.body.lastName;
        buyerInfo.phone = Number(req.body.phone);
        buyerInfo.email = req.body.email ;
        buyerInfo.companyLocation = req.body.companyLocation ;
        buyerInfo.wantrehab = req.body.wantrehab ;
        buyerInfo.rehabTeamReady = Boolean(req.body.rehabTeamReady);
        buyerInfo.areaTargets = req.body.areaTargets ;
        buyerInfo.propertiesBoughtLastYear = Number(req.body.propertiesBoughtLastYear);
        buyerInfo.propertiesBoughtThisYear = Number(req.body.propertiesBoughtThisYear);
        buyerInfo.bottleneck = req.body.bottleneck ;
        buyerInfo.financeMethod = req.body.financeMethod ;
        buyerInfo.typeOfProperty = req.body.typeOfProperty ;
        buyerInfo.equityOrCOCRPreferance = req.body.equityOrCOCRPreferance ;
        buyerInfo.equityOrCOCRExpectation = Number(req.body.equityOrCOCRExpectation);
        buyerInfo.maxPrice = (req.body.maxPrice);
  
    buyerInfo.save()
    .then( () => res.json('Item Updated!') )
    .catch( err => res.status(400).json("Error :" + err));
  
    })
    .catch( err => res.status(400).json("Error :" + err));
  
  });
  


  router.route("/add").post((req, res) => {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = Number(req.body.phone);
    const email = req.body.email ;
    const companyLocation = req.body.companyLocation ;
    const wantrehab = req.body.wantrehab ;
    const rehabTeamReady = Boolean(req.body.rehabTeamReady);
    const areaTargets = req.body.areaTargets ;
    const propertiesBoughtLastYear = Number(req.body.propertiesBoughtLastYear);
    const propertiesBoughtThisYear = Number(req.body.propertiesBoughtThisYear);
    const bottleneck = req.body.bottleneck ;
    const financeMethod = req.body.financeMethod ;
    const typeOfProperty = req.body.typeOfProperty ;
    const equityOrCOCRPreferance = req.body.equityOrCOCRPreferance ;
    const equityOrCOCRExpectation = Number(req.body.equityOrCOCRExpectation);
    const maxPrice = (req.body.maxPrice);

    const newBuyerInfo = new BuyerInfo({

        firstName,
        lastName,
        phone,
        email,
        companyLocation,
        wantrehab,
        rehabTeamReady,
        areaTargets,
        propertiesBoughtLastYear,
        propertiesBoughtThisYear,
        bottleneck,
        financeMethod,
        typeOfProperty,
        equityOrCOCRPreferance,
        equityOrCOCRExpectation,
        maxPrice,
    })

    newBuyerInfo
    .save()
    .then(() => res.json("Buyer Info Added!"))
    .catch(err => res.status(400).json("Error" + err))

});

module.exports = router;