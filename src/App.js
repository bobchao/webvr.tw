import React, { Component } from 'react';
import Header from './components/Header'
import Information from './components/Information'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Information />
        <Footer />
      </div>
    );
  }
}

export default App;
