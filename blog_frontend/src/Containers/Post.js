import React, { Component } from "react";

import { get_post } from "../Services/axios-post";

import PostComponent from "../Components/Pages/Post";

class Post extends Component {
  state = {
    post: {},
  };

  render() {
    return <PostComponent postDetail={this.state.post} />;
  }

  componentDidMount() {
    get_post("post-title-1")
      .then((post) => {
        const postDetail = { ...post.data };
        this.setState({ post: postDetail });
      })
      .catch((err) => console.error(err));
  }
}

export default Post;
