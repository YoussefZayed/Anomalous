import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar.component"
import SellerList from "./components/seller-list.component";
import EditSeller from "./components/edit-seller.component";
import CreateSeller from "./components/create-seller.component";
import BuyerList from "./components/buyer-list.component";
import EditBuyer from "./components/edit-buyer.component";
import CreateBuyer from "./components/create-buyer.component";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";


// work in progress
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));// Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());    // Redirect to login
//     window.location.href = "./login";
//   }
// }



function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="container">
      <Navbar />
        <br/>

        <Route  path="/sellers" exact component={SellerList} />
        <Route  path="/selleredit/:id" component={EditSeller} />
        <Route  path="/sellercreate" component={CreateSeller} />
        <Route  path="/buyer" exact component={BuyerList} />
        <Route  path="/buyeredit/:id" component={EditBuyer} />
        <Route  path="/buyercreate" component={CreateBuyer} />

        {/* work in progress */}
        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> */}
    </div>
    </Router>
    </Provider>
  );
}

export default App;
