import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null,
  { fetchPosts }
  )(PostList);

/**
 * NOTE :
 * - connect(null) ตอนนี้ยังไม่ต้องการ state จาก redux store
 * - connect({ fetchPosts }) จะตอบกลับมาเป็น object action พร้อมกับ dispatch เอาไปใช้ผ่าน props ใน PostList
  */