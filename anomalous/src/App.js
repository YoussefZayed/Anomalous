import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "./components/navbar.component"
import SellerList from "./components/seller-list.component";
import EditSeller from "./components/edit-seller.component";
import CreateSeller from "./components/create-seller.component";
import BuyerList from "./components/buyer-list.component";
import EditBuyer from "./components/edit-buyer.component";
import CreateBuyer from "./components/create-buyer.component";

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
        <br/>
        <Route path="/sellers" exact component={SellerList} />
        <Route path="/selleredit/:id" component={EditSeller} />
        <Route path="/sellercreate" component={CreateSeller} />
        <Route path="/buyer" exact component={BuyerList} />
        <Route path="/buyeredit/:id" component={EditBuyer} />
        <Route path="/buyercreate" component={CreateBuyer} />

    </div>
    </Router>
  );
}

export default App;
