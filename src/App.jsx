import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.editValues.bind();

    this.state = {};
  }

  editValues = (data) => {
    this.setState(
      {
        name: data.name,
        email: data.email,
        contact: data.contact,
        education: data.education,
        workExperience: data.workExperience,
      },
      () => {
        console.log('app', this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Form editValues={this.editValues}></Form>
          <Resume></Resume>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
