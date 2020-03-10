import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Seller = props => (
  <tr>
    <td>{props.seller.firstName} {props.seller.lastName}</td>
    <td>{props.seller.address}</td>
    <td>{props.seller.phone}</td>
    <td>{props.seller.email}</td>
    <td>{props.seller.askPrice}</td>
    <td>
      <Link to={"/selleredit/"+props.seller._id}>edit</Link> | <a href="/sellers/" onClick={() => { props.deleteSeller(props.seller._id) }}>delete</a>
    </td>
  </tr>
)

export default class SellerList extends Component {

  constructor(props) {
    super(props);  
    this.deleteSeller = this.deleteSeller.bind(this);  
    this.state = {sellers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/seller/')
     .then(response => {
       this.setState({ sellers: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  deleteSeller(id) {
    axios.delete('http://localhost:5000/seller/'+id)
      .then(res => console.log(res.data));  this.setState({
      sellers: this.state.sellers.filter(el => el._id !== id)
    })
  }

  sellerList() {
    return this.state.sellers.map(currentseller => {
      return <Seller seller={currentseller} deleteSeller={this.deleteSeller} key={currentseller._id}/>;
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
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Asking Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.sellerList() }
          </tbody>
        </table>
      </div>
      )
    }
  }