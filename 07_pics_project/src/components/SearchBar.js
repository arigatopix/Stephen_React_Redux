import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => { 
    e.preventDefault() 

    this.props.onSubmit(this.state.term); // this.props.onSubmit คือเรียกใช้ props จาก parent ส่งข้อมูล this.state.term ให้ App หรือพูดอีกทางคือส่งข้อมูลที่ user input ให้ App component รู้
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * 
  */