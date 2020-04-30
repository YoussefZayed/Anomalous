import React, { Component } from 'react';
import axios from 'axios';
import "../css/form.css";

export default class CreateSeller extends Component {
  constructor(props) {
    super(props);

    this.onChange_hearAboutUs = this.onChange_hearAboutUs.bind(this);
    this.onChange_firstName = this.onChange_firstName.bind(this);
    this.onChange_lastName = this.onChange_lastName.bind(this);
    this.onChange_phone = this.onChange_phone.bind(this);
    this.onChange_email = this.onChange_email.bind(this);
    this.onChange_address = this.onChange_address.bind(this);
    this.onChange_postalCode = this.onChange_postalCode.bind(this);
    this.onChange_typeOfProperty = this.onChange_typeOfProperty.bind(this);
    this.onChange_bedrooms = this.onChange_bedrooms.bind(this);
    this.onChange_bathrooms = this.onChange_bathrooms.bind(this);
    this.onChange_hasgarage = this.onChange_hasgarage.bind(this);
    this.onChange_garageSpaces = this.onChange_garageSpaces.bind(this);
    this.onChange_parkingOnStreet = this.onChange_parkingOnStreet.bind(this);
    this.onChange_otherParkingSpots = this.onChange_otherParkingSpots.bind(this);
    this.onChange_otherParkingSpots = this.onChange_otherParkingSpots.bind(this);
    this.onChange_hasbasement = this.onChange_hasbasement.bind(this);
    this.onChange_hasPool = this.onChange_hasPool.bind(this);
    this.onChange_lotSize = this.onChange_lotSize.bind(this);
    this.onChange_yearBuilt = this.onChange_yearBuilt.bind(this);
    this.onChange_typeOfRepair = this.onChange_typeOfRepair.bind(this);
    this.onChange_costForMint = this.onChange_costForMint.bind(this);
    this.onChange_sellReason = this.onChange_sellReason.bind(this);
    this.onChange_hoaFees = this.onChange_hoaFees.bind(this);
    this.onChange_owedOnProp = this.onChange_owedOnProp.bind(this);
    this.onChange_takePayoff = this.onChange_takePayoff.bind(this);
    this.onChange_payAndTaxIsCurrent = this.onChange_payAndTaxIsCurrent.bind(this);
    this.onChange_askPrice = this.onChange_askPrice.bind(this);
    this.onChange_priceFlexible = this.onChange_priceFlexible.bind(this);
    this.onChange_assessedValue = this.onChange_assessedValue.bind(this);
    this.onChange_dateSellerBought = this.onChange_dateSellerBought.bind(this);
    this.onChange_originalSellerPrice = this.onChange_originalSellerPrice.bind(this);
    this.onChange_schoolDistrict = this.onChange_schoolDistrict.bind(this);
    this.onChange_quickComps = this.onChange_quickComps.bind(this);
    this.onChange_makingOffer = this.onChange_makingOffer.bind(this);
    this.onChange_offerPrice = this.onChange_offerPrice.bind(this);
    this.onChange_agentName = this.onChange_agentName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);





    this.state = {
      hearAboutUs : '',
      firstName : '',
      lastName : '',
      phone : 0,
      email : '',
      address : '',
      postalCode : '',
      typeOfProperty : '',
      bedrooms : 0,
      bathrooms : 0,
      hasgarage : false,
      garageSpaces :0,
      parkingOnStreet: false,
      otherParkingSpots  : 0,
      hasbasement : false,
      basementFinished: false,
      hasPool: false,
      lotSize: 0,
      yearBuilt: 0,
      typeOfRepair : '',
      costForMint: 0.0,
      sellReason : '',
      hoaFees : '',
      owedOnProp: 0,
      takePayoff: false,
      payAndTaxIsCurrent: false,
      askPrice: 0.0,
      priceFlexible: false,
      assessedValue: 0,
      dateSellerBought : '',
      originalSellerPrice : 0,
      schoolDistrict : '',
      quickComps: '',
      makingOffer: false,
      offerPrice: 0.0,
      agentName : '',
    }

  }
  
  onChange_hearAboutUs(e) {
    this.setState({
      hearAboutUs: e.target.value
    });
  }
  onChange_firstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChange_lastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChange_phone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChange_email(e) {
    this.setState({
      email: e.target.value
    });
  }  
  onChange_address(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChange_postalCode(e) {
    this.setState({
      postalCode: e.target.value
    });
  }
  
  onChange_typeOfProperty(e) {
    this.setState({
      typeOfProperty: e.target.value
    });
  }
  
  
  onChange_bedrooms(e) {
    this.setState({
      bedrooms: e.target.value
    });
  }
  
  onChange_bathrooms(e) {
    this.setState({
      bathrooms: e.target.value
    });
  }
  
  onChange_hasgarage(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      hasgarage: value
    });
  }
  
  onChange_garageSpaces(e) {
    this.setState({
      garageSpaces: e.target.value
    });
  }
  
  onChange_parkingOnStreet(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      parkingOnStreet: value
    });
  }
  
  onChange_otherParkingSpots(e) {
    this.setState({
      otherParkingSpots: e.target.value
    });
  }

  onChange_hasbasement(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      hasbasement: value
    });
  }


  onChange_basementFinished(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      basementFinished: value
    });
  }
  onChange_hasPool(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      hasPool: value
    });
  }
  onChange_lotSize(e) {
    this.setState({
      lotSize: e.target.value
    });
  }
  onChange_yearBuilt(e) {
    this.setState({
      yearBuilt: e.target.value
    });
  }
  onChange_typeOfRepair(e) {
    this.setState({
      typeOfRepair: e.target.value
    });
  }
  onChange_costForMint(e) {
    this.setState({
      costForMint: e.target.value
    });
  }
  onChange_sellReason(e) {
    this.setState({
      sellReason: e.target.value
    });
  }
  onChange_hoaFees(e) {
    this.setState({
      hoaFees: e.target.value
    });
  }
  onChange_owedOnProp(e) {
    this.setState({
      owedOnProp: e.target.value
    });
  }
  onChange_takePayoff(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      takePayoff: value
    });
  }
  onChange_payAndTaxIsCurrent(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      payAndTaxIsCurrent: value
    });
  }
  onChange_askPrice(e) {
    this.setState({
      askPrice: e.target.value
    });
  }
  onChange_priceFlexible(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      priceFlexible: value
    });
  }
  onChange_assessedValue(e) {
    this.setState({
      assessedValue: e.target.value
    });
  }
  onChange_dateSellerBought(e) {
    this.setState({
      dateSellerBought: e.target.value
    });
  }
  onChange_originalSellerPrice(e) {
    this.setState({
      originalSellerPrice: e.target.value
    });
  }
  onChange_schoolDistrict(e) {
    this.setState({
      schoolDistrict: e.target.value
    });
  }
  onChange_quickComps(e) {
    this.setState({
      quickComps: e.target.value
    });
  }
  onChange_makingOffer(e) {
    
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      makingOffer: value
    });
  }
  onChange_offerPrice(e) {
    this.setState({
      offerPrice: e.target.value
    });
  }
  onChange_agentName(e) {
    this.setState({
      agentName: e.target.value
    });
  }
  
  onSubmit(e){
    e.preventDefault();  
    const seller = {
      hearAboutUs : this.state.hearAboutUs,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      phone : (this.state.phone),
      email : this.state.email,
      address : this.state.address,
      postalCode : this.state.postalCode,
      typeOfProperty : this.state.typeOfProperty,
      bedrooms : (this.state.bedrooms),
      bathrooms : (this.state.bathrooms),
      hasgarage : (this.state.hasgarage),
      garageSpaces : (this.state.garageSpaces),
      parkingOnStreet : (this.state.parkingOnStreet),
      otherParkingSpots : (this.state.otherParkingSpots),
      hasbasement : (this.state.hasbasement),
      basementFinished : (this.state.basementFinished),
      hasPool : (this.state.hasPool),
      lotSize : (this.state.lotSize),
      yearBuilt : (this.state.yearBuilt),
      typeOfRepair : this.state.typeOfRepair,
      costForMint : (this.state.costForMint),
      sellReason : this.state.sellReason,
      hoaFees : this.state.hoaFees,
      owedOnProp : (this.state.owedOnProp),
      takePayoff : (this.state.takePayoff),
      payAndTaxIsCurrent : (this.state.payAndTaxIsCurrent),
      askPrice : (this.state.askPrice),
      priceFlexible : (this.state.priceFlexible),
      assessedValue: 0,
      dateSellerBought : '',
      originalSellerPrice : 0,
      schoolDistrict : '',
      quickComps: '',
      makingOffer: false,
      offerPrice: 0.0,
      agentName : '',
    };
    
    
    axios.post('/seller/add', seller).then(
      (res) => {
        console.log('Axios:',res);
        console.log('Axios data:',res.data);
        window.location = '/';
      }).catch((err) => { console.log('Axios Error:', err); });
  console.log(seller);
  console.log("Posted?");
    
  }



  render() {
      return (
        <div className="container topk">
          <h4> Please add your information and we will contact you soon</h4>
          <form onSubmit = {this.onSubmit }>  

          <div className= "from-group row">
            <label className= "col-4">How did you hear about us? </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.hearAboutUs}
                onChange={this.onChange_hearAboutUs}
                />
          </div>

          <div className= "from-group row">
            <label className= "col-4">First Name :</label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.firstName}
                onChange={this.onChange_firstName}
                />
          </div>
          
          <div className= "from-group row">
            <label className= "col-4">Last Name :</label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.lastName}
                onChange={this.onChange_lastName}
                />
          </div>


          <div className= "from-group row">
            <label className= "col-4">Phone number: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.phone}
                onChange={this.onChange_phone}
                />
          </div>


          <div className= "from-group row">
            <label className= "col-4">Email: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.email}
                onChange={this.onChange_email}
                />
          </div>


          <div className= "from-group row">
            <label className= "col-4">Address : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.address}
                onChange={this.onChange_address}
                />
          </div>


          <div className= "from-group row">
            <label className= "col-4">Postal Code: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.postalCode}
                onChange={this.onChange_postalCode}
                />
          </div>

          <div className= "from-group row">
            <label className= "col-4"> Type Of Property: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.typeOfProperty }
                onChange={this.onChange_typeOfProperty }
                />
          </div>


          <div className= "from-group row">
            <label className= "col-4"> Number of Bedrooms : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.bedrooms}
                onChange={this.onChange_bedrooms}
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">Number of Bathrooms : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.bathrooms }
                onChange={this.onChange_bathrooms }
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4">Does it have a Garage: </label>
            <input 
                type="checkbox" 
                className="form-control col-8 "
                value={this.state.hasgarage }
                onChange={this.onChange_hasgarage}
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4"> Number of Garage Spaces: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.garageSpaces }
                onChange={this.onChange_garageSpaces }
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4">parking on the street? </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.parkingOnStreet }
                onChange={this.onChange_parkingOnStreet }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4"> Number of other parking spots: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.otherParkingSpots}
                onChange={this.onChange_otherParkingSpots}
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4"> does it have a Basement: </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.hasbasement }
                onChange={this.onChange_hasbasement }
                />
          </div>


          <div className= "from-group row vertspace">
            <label className= "col-4">is the basement finished : </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.basementFinished}
                onChange={this.onChange_basementFinished}
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4"> does it have a Pool: </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.hasPool }
                onChange={this.onChange_hasPool}
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">lot Size : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.lotSize }
                onChange={this.onChange_lotSize }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">year Built : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.yearBuilt }
                onChange={this.onChange_yearBuilt }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4"> Type Of Repair needed (if any) : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.typeOfRepair }
                onChange={this.onChange_typeOfRepair }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">Cost to Put In Mint Condition: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.costForMint }
                onChange={this.onChange_costForMint }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4"> Why are you selling: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.sellReason }
                onChange={this.onChange_sellReason }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">Do you have HOA Fees  : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.hoaFees }
                onChange={this.onChange_hoaFees }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">Amount owed on the property: </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.owedOnProp }
                onChange={this.onChange_owedOnProp }
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4"> Would You Take a Payoff: </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.takePayoff }
                onChange={this.onChange_takePayoff }
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4">Are Payments And Taxes Current: </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.payAndTaxIsCurrent }
                onChange={this.onChange_payAndTaxIsCurrent }
                />
          </div>



          <div className= "from-group row">
            <label className= "col-4">Asking Price : </label>
            <input 
                type="text" 
                className="form-control col-8"
                value={this.state.askPrice }
                onChange={this.onChange_askPrice }
                />
          </div>



          <div className= "from-group row vertspace">
            <label className= "col-4"> Is that Price Flexible? </label>
            <input 
                type="checkbox" 
                className="form-control col-8"
                value={this.state.priceFlexible }
                onChange={this.onChange_priceFlexible }
                />
          </div>



          <br>
          </br>

          <div className="form-group">
            <input type="submit" value="Add Seller Info" className="btn btn-primary" />
          </div>
          </form>
        </div>
      )
    }
  
  
  
  }