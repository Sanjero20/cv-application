import React, { Component } from 'react';
import Personal from './form/Personal';
import Resume from './Resume';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();

    this.state = {
      name: '',
      email: '',
      contact: '',
      address: '',
      education: [],
      workExperience: [],
    };
  }

  inputHandler = (e) => {
    const target = e.target.id;
    this.setState({
      [target]: e.target.value,
    });
  };

  render() {
    return (
      <main>
        <form id="cv-builder">
          <Personal inputHandler={this.inputHandler}></Personal>
          {/* Educational Experience */}
          {/* Practical Experience */}
        </form>
        <Resume data={this.state}></Resume>
      </main>
    );
  }
}

export default Main;
