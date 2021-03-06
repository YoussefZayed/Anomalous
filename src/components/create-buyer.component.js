import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/form.css";

export default class CreateBuyer extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      firstName : '',
      lastName : '',
      phone : 0,
      email : '',
      companyLocation : '',
      wantrehab : false,
      rehabTeamReady: false,
      areaTargets: '',
      propertiesBoughtLastYear : 0,
      propertiesBoughtThisYear : 0,
      bottleneck : '',
      financeMethod : '',
      typeOfProperty : '',
      equityOrCOCRPreferance : '',
      equityOrCOCRExpectation : '',
      maxPrice : 0,
    }

  }

  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  
  onSubmit(e){
    e.preventDefault();  
    const buyer = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      phone : (this.state.phone),
      email : this.state.email,
      companyLocation : this.state.companyLocation,
      wantrehab : this.state.wantrehab,
      rehabTeamReady: this.state.rehabTeamReady,
      areaTargets: this.state.areaTargets,
      propertiesBoughtLastYear : this.state.propertiesBoughtLastYear,
      propertiesBoughtThisYear : this.state.propertiesBoughtThisYear,
      bottleneck : this.state.bottleneck,
      financeMethod : this.state.financeMethod,
      typeOfProperty : this.state.typeOfProperty,
      equityOrCOCRPreferance : this.state.equityOrCOCRPreferance,
      equityOrCOCRExpectation : this.state.equityOrCOCRExpectation,
      maxPrice : this.state.maxPrice,
     
    };
    axios.post('http://localhost:5000/buyer/add', buyer).then(
      (res) => {
        console.log('Axios:',res);
        console.log('Axios data:',res.data);
        window.location = '/';
      }).catch((err) => { console.log('Axios Error:', err); });
    console.log(buyer);
    

  }


    render() {
      return (
        <div className="container topk">
         <h4> Please add your information and we will contact you soon</h4>
        <form onSubmit = {this.onSubmit }>  

   
        <div className= "'from-group row">
          <label className= "name">First Name :</label>
          <input 
              type="text" 
              className="form-control"
              name = "firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "'from-group row">
          <label className= "name">Last Name :</label>
          <input 
              type="text" 
              className="form-control "
              name = "lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              />
        </div>


        <div className= "'from-group row">
          <label className= "name">Phone number: </label>
          <input 
              type="text" 
              className="form-control "
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              />
        </div>


        <div className= "'from-group row">
          <label className= "name">Email: </label>
          <input 
              type="text" 
              className="form-control "
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
        </div>

        
        <div className= "'from-group row">
          <label className= "name">Company Location: </label>
          <input 
              type="text" 
              className="form-control "
              name="companyLocation"
              value={this.state.companyLocation}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "'from-group row">
          <label className= "col4 s12">Do you prefer move in ready or rehab?</label>
          <input 
              type="checkbox" 
              className="form-control s12 "
              name="wantrehab"
              value={this.state.wantrehab}
              onChange={this.handleInputChange}
              />
        </div>

        
        <div className= "'from-group row vertspace">
          <label className= "col4">Do you have rehab teams in place?</label>
          <input 
              type="checkbox" 
              className="form-control s12 "
              name="rehabTeamReady"
              value={this.state.rehabTeamReady}
              onChange={this.handleInputChange}
              />
              
        </div>
        
        <div className= "'from-group row vertspace">
          <label className= "name">What areas are you targeting? </label>
          <input 
              type="text" 
              className="form-control "
              name="areaTargets"
              value={this.state.areaTargets}
              onChange={this.handleInputChange}
              />
              
              
        </div>
        
        <div className= "'from-group row">
          <label className= "name">How many properties did you buy last year? </label>
          <input 
              type="text" 
              className="form-control "
              name="propertiesBoughtLastYear"
              value={this.state.propertiesBoughtLastYear}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "'from-group row">
          <label className= "name">How many properties do you plan to buy this year? </label>
          <input 
              type="text" 
              className="form-control "
              name="propertiesBoughtThisYear"
              value={this.state.propertiesBoughtThisYear}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">How come you don’t plan to buy (Double the amount stated above)?</label>
          <input 
              type="text" 
              className="form-control "
              name="bottleneck"
              value={this.state.bottleneck}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">How do you finance?</label>
          <input 
              type="text" 
              className="form-control "
              name="financeMethod"
              value={this.state.financeMethod}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">Do you prefer single family homes or apartments? </label>
          <input 
              type="text" 
              className="form-control "
              name="typeOfProperty"
              value={this.state.typeOfProperty}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">Do you base your purchase price on equity or COCR? </label>
          <input 
              type="text" 
              className="form-control "
              name="equityOrCOCRPreferance"
              value={this.state.equityOrCOCRPreferance}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">How much equity or COCR do you expect to make per house?</label>
          <input 
              type="text" 
              className="form-control "
              name="equityOrCOCRExpectation"
              value={this.state.equityOrCOCRExpectation}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "'from-group row">
          <label className= "name">What is your maximum purchase price?</label>
          <input 
              type="text" 
              className="form-control "
              name="maxPrice"
              value={this.state.maxPrice}
              onChange={this.handleInputChange}
              />
        </div>

        <br>
          </br>

          <div className="form-group">
            <input type="submit" value="Add Buyer Info" className="btn btn-primary" />
          </div>
          </form>
        </div>
      )
    }
  }