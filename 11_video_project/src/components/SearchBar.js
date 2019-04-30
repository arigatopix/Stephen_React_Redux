import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    // รับค่า input
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    // * ป้องกัน submin แล้ว reload page
    event.preventDefault();

    // clear input หลัง submit
    // this.setState({ term : '' });

    // Make sure we call callback form parent พอ submit แล้วไปเรียก API
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 * NOTE
 * - onChange เป็น special name จะ callback funtion
 * - onFormSubmit เป็น special เหมือนกัน อย่าลืม e.preventDefault ป้องกันการ reload
 */
