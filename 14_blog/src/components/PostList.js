import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    // FIRST RUN load page
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {
  // รับ api data จาก reducer และส่งต่อให้ props
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
