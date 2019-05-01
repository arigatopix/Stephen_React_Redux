import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList); // เหมือนเป็น react component

// เรียกแบบ closure method()(arg)
