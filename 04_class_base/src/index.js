import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
   state = { lat : null, errorMessage : '' };

  // Lifecycle component 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat : position.coords.latitude }),
      err => this.setState({ errorMessage : err.message })
    );
  }
  render() {
    // Show err,
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>

      // NO error and show Latitude
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message={'Please accept location request...'}/>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));