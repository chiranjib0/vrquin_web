import React, { Component } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import MainHeader from "./components/MainHeader";


import Home from "./pages/Home";
import HoloX from "./pages/HoloX";
import TransX from "./pages/TransX";
import Maya from "./pages/Maya";
import Service from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Support from "./pages/Support";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader></MainHeader>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/holo_x">
            <HoloX />
          </Route>

          <Route path="/Trans_x">
            <TransX></TransX>
          </Route>

          <Route path="/maya">
            <Maya></Maya>
          </Route>

          <Route path="/service">
            <Service></Service>
          </Route>

          <Route path="/about_us">
            <AboutUs></AboutUs>
          </Route>

          <Route path="/contact_us">
            <ContactUs></ContactUs>
          </Route>

          <Route path="/support">
            <Support></Support>
          </Route>
        </Switch>
       
      </div>
    );
  }
}

export default App;
