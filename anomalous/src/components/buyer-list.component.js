import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
  
  const Buyer = props => (
    <tr>
      <td>{props.buyer.firstName} {props.buyer.lastName}</td>
      <td>{props.buyer.companyLocation}</td>
      <td>{props.buyer.phone}</td>
      <td>{props.buyer.email}</td>
      <td>{props.buyer.maxPrice}</td>
      <td>
        <Link to={"/buyeredit/"+props.buyer._id}>edit</Link> | <a href="/buyer" onClick={() => { props.deletebuyer(props.buyer._id) }}>delete</a>
      </td>
    </tr>
  )
  
  export default class BuyerList extends Component {
  
    constructor(props) {
      super(props);  
      this.deletebuyer = this.deletebuyer.bind(this);  
      this.state = {buyers: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/buyer/')
       .then(response => {
         this.setState({ buyers: response.data });
       })
       .catch((error) => {
          console.log(error);
       })
    }
  
    deletebuyer(id) {
      axios.delete('http://localhost:5000/buyer/'+id)
        .then(res => console.log(res.data));  this.setState({
        buyers: this.state.buyers.filter(el => el._id !== id)
      })
    }
  
    buyerList() {
      return this.state.buyers.map(currentbuyer => {
        return <Buyer buyer={currentbuyer} deletebuyer={this.deletebuyer} key={currentbuyer._id}/>;
      })
    }
  
  
  
      render() {
        return (
        <div>
          <h3>Logged Exercises</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Company Location</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Max Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.buyerList() }
            </tbody>
          </table>
        </div>
        )
      }
    }