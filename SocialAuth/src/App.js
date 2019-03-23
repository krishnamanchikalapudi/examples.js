import React, { Component } from 'react';
import NavigationHeader from './components/NavigationHeader';
import NavigationFooter from './components/NavigationFooter';


class App extends Component {
  render() {
    return (
      <div>
        <NavigationHeader />
        <div className="container">
          <h1>Hello</h1>
        </div>
        <NavigationFooter />
      </div>
    );
  }
}

export default App;
