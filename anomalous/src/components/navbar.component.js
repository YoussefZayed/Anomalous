import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Anomalous-Ai</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/sellers" className="nav-link">Sellers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/sellercreate" className="nav-link">Add Seller Info</Link>
          </li>
          <li className="navbar-item">
          <Link to="/buyer" className="nav-link">Buyers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/buyercreate" className="nav-link">Add Buyer Info</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}