import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Order from "./pages/Order";
import orderList from "./pages/OrderList";
import errorPage from "./pages/errorPage";
import { Switch, Route } from "react-router";
import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={ Order }/>
        <Route exact path="/orderlist" component={ orderList }/>
        <Route component={ errorPage }/>
      </Switch>
    </div>
  </Router>
)


export default App;
