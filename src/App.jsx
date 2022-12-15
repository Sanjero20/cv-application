import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

import './styles/App.css';
import './styles/Form.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form></Form>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
