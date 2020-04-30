
import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/form.css";

export default class EditBuyer extends Component {

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

  componentDidMount(){
    axios.get('/buyer/'+this.props.match.params.id)
    .then( (res) => {
          this.setState({
            firstName : res.data.firstName,
            lastName : res.data.lastName,
            phone : (res.data.phone),
            email : res.data.email,
            companyLocation : res.data.companyLocation,
            wantrehab : res.data.wantrehab,
            rehabTeamReady: res.data.rehabTeamReady,
            areaTargets: res.data.areaTargets,
            propertiesBoughtLastYear : res.data.propertiesBoughtLastYear,
            propertiesBoughtThisYear : res.data.propertiesBoughtThisYear,
            bottleneck : res.data.bottleneck,
            financeMethod : res.data.financeMethod,
            typeOfProperty : res.data.typeOfProperty,
            equityOrCOCRPreferance : res.data.equityOrCOCRPreferance,
            equityOrCOCRExpectation : res.data.equityOrCOCRExpectation,
            maxPrice : res.data.maxPrice,

          })
      })
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

    axios.post('http://localhost:5000/buyer/update/'+this.props.match.params.id, buyer).then(
      (res) => {
        console.log('Axios:',res);
        console.log('Axios data:',res.data);
        window.location = '/';
      }).catch((err) => { console.log('Axios Error:', err); });
    console.log(buyer);
    

  }


    render() {
      return (
        <div>
        <h1> Edit Buyer Info </h1>
        <form onSubmit = {this.onSubmit }>  


        <div className= "from-group row">
          <label className= "col-4">First Name :</label>
          <input 
              type="text" 
              className="form-control col-8"
              name = "firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "from-group row">
          <label className= "col-4">Last Name :</label>
          <input 
              type="text" 
              className="form-control col-8"
              name = "lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              />
        </div>


        <div className= "from-group row">
          <label className= "col-4">Phone number: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              />
        </div>


        <div className= "from-group row">
          <label className= "col-4">Email: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              />
        </div>

        
        <div className= "from-group row">
          <label className= "col-4">Company Location: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="companyLocation"
              value={this.state.companyLocation}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "from-group row">
          <label className= "col-4">want rehab: </label>
          <input 
              type="checkbox" 
              className="form-control col-8"
              name="wantrehab"
              value={this.state.wantrehab}
              checked = {this.state.wantrehab}
              onChange={this.handleInputChange}
              />
        </div>

        
        <div className= "from-group row">
          <label className= "col-4">Rehab Team Ready: </label>
          <input 
              type="checkbox" 
              className="form-control col-8"
              name="rehabTeamReady"
              value={this.state.rehabTeamReady}
              checked = {this.state.rehabTeamReady}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "from-group row">
          <label className= "col-4">Area Targets: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="areaTargets"
              value={this.state.areaTargets}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "from-group row">
          <label className= "col-4">Properties Bought LastYear: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="propertiesBoughtLastYear"
              value={this.state.propertiesBoughtLastYear}
              onChange={this.handleInputChange}
              />
        </div>
        
        <div className= "from-group row">
          <label className= "col-4">properties Bought This Year: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="propertiesBoughtThisYear"
              value={this.state.propertiesBoughtThisYear}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">bottleneck: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="bottleneck"
              value={this.state.bottleneck}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">Finance Method: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="financeMethod"
              value={this.state.financeMethod}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">Type Of Property: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="typeOfProperty"
              value={this.state.typeOfProperty}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">equity Or COCR Preferance: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="equityOrCOCRPreferance"
              value={this.state.equityOrCOCRPreferance}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">equity Or COCR Expectation: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="equityOrCOCRExpectation"
              value={this.state.equityOrCOCRExpectation}
              onChange={this.handleInputChange}
              />
        </div>
                
        <div className= "from-group row">
          <label className= "col-4">max Price: </label>
          <input 
              type="text" 
              className="form-control col-8"
              name="maxPrice"
              value={this.state.maxPrice}
              onChange={this.handleInputChange}
              />
        </div>


        <br>
          </br>

          <div className="form-group">
            <input type="submit" value="Edit Buyer Info" className="btn btn-primary" />
          </div>
          </form>
        </div>
      )
    }
  }