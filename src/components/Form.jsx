import React, { Component } from 'react';
import { Personal } from './form/Personal';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();
    this.createCV.bind();
    this.editValues = this.props.editValues;

    this.state = {
      name: '',
      email: '',
      contact: '',
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

  createCV = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.editValues(this.state);
  };

  render() {
    return (
      <form id="cv-builder">
        <Personal inputHandler={this.inputHandler}></Personal>
        {/* Educational Experience */}
        {/* Practical Experience */}
      </form>
    );
  }
}

export default Form;
