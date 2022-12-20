import React, { Component } from 'react';
import Resume from './Resume';

import Personal from './form/Personal';
import Education from './form/Education';

import uniqid from 'uniqid';
import { saveToLocalStorage, retrieveFromLocal } from '../modules/saveToLocal';

import '../styles/Form.css';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();
    this.addEducField.bind();
    this.educationInputHandler.bind();

    const retrievedData = retrieveFromLocal('state');

    if (retrievedData) {
      this.state = retrievedData;
    } else {
      this.state = {
        personalInfo: {
          name: '',
          address: '',
          contact: '',
          email: '',
          description: '',
        },
        education: [],
        workExperience: [],
      };

      saveToLocalStorage('state', this.state);
    }
  }

  // PersonalInfo Functions
  inputHandler = (e) => {
    const target = e.target.id;
    this.setState(
      {
        personalInfo: {
          ...this.state.personalInfo,
          [target]: e.target.value,
        },
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  // Education Functions
  addEducField = () => {
    const newValue = {
      id: uniqid(),
      schoolName: '',
      location: '',
      course: '',
      fromYr: '',
      toYr: '',
    };

    this.setState(
      {
        education: [...this.state.education, newValue],
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  removeEducField = (id) => {
    const list = this.state.education;
    const updatedList = list.filter((item) => item.id != id);
    this.setState(
      {
        education: updatedList,
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  educationInputHandler = (e, index) => {
    const { name, value } = e.target;
    const educations = this.state.education;

    educations[index][name] = value;

    this.setState(
      {
        education: educations,
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <main>
        <form onSubmit={this.submitForm} id="cv-builder">
          <Personal
            personalInfo={this.state.personalInfo}
            inputHandler={this.inputHandler}
          />
          <Education
            education={this.state.education}
            educationInputHandler={this.educationInputHandler}
            addField={this.addEducField}
            removeField={this.removeEducField}
          />
          {/* Practical Experience */}
        </form>
        <Resume data={this.state}></Resume>
      </main>
    );
  }
}

export default Main;
