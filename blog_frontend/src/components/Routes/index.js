import React, { Component } from "react";
import { Route } from "react-router";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </React.Fragment>
    );
  }
}

export default Routes;
