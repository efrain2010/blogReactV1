import React, { Component } from "react";
import { Route } from "react-router";

import Blog from "../../Containers/Blog";
import Post from "../../Containers/Post";
import Contact from "../Pages/Contact";

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Blog} />
        <Route path="/post/" component={Post} />
        <Route path="/contact" exact component={Contact} />
      </React.Fragment>
    );
  }
}

export default Routes;
