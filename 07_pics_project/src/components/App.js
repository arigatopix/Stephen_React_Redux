import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: []
  };

  // fetch API ด้วย async await
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos/', {
      params: { query: term }
    });

    // Show data หลังจาก fetch API
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
