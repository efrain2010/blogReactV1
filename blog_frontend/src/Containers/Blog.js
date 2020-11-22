import React, { Component } from "react";
import BlogComponent from "../Components/Pages/Blog";
import { get_posts } from "../Services/axios-post";

class Blog extends Component {
  state = {
    entries: [],
  };

  render() {
    return <BlogComponent entries={this.state.entries} />;
  }

  componentDidMount() {
    get_posts()
      .then((response) => {
        const axiosEntries = [...response.data];
        this.setState({
          entries: axiosEntries,
        });
      })
      .catch((error) => console.log(error));
  }
}

export default Blog;
