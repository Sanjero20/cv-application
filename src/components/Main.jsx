import React, { Component } from 'react';
import Resume from './Resume';

import Personal from './form/Personal';
import Education from './form/Education';
import Work from './form/Work';

import uniqid from 'uniqid';
import {
  saveToLocalStorage,
  retrieveFromLocal,
  clearStorage,
} from '../modules/saveToLocal';

import '../styles/Form.css';

const retrievedData = retrieveFromLocal('state');

const defaultState = {
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

export class Main extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();
    this.addEducField.bind();
    this.educationInputHandler.bind();

    if (retrievedData) {
      this.state = retrievedData;
    } else {
      this.state = defaultState;
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
    const updatedEducList = list.filter((item) => item.id != id);
    this.setState(
      {
        education: updatedEducList,
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

  // Work Functions
  addWorkField = () => {
    const newValue = {
      id: uniqid(),
      companyName: '',
      location: '',
      role: '',
      roleDescription: '',
      fromYr: '',
      toYr: '',
    };

    this.setState(
      {
        workExperience: [...this.state.workExperience, newValue],
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  removeWorkField = (id) => {
    const list = this.state.workExperience;
    const updatedWorkList = list.filter((item) => item.id != id);

    this.setState(
      {
        workExperience: updatedWorkList,
      },
      () => saveToLocalStorage('state', this.state)
    );
  };

  workInputHandler = (e, index) => {
    const { name, value } = e.target;
    const workList = this.state.workExperience;

    workList[index][name] = value;

    this.setState(
      {
        workExperience: workList,
      },
      () => {
        saveToLocalStorage('state', this.state);
      }
    );
  };

  // Utility Functions
  removeAllState = () => {
    clearStorage();
    this.setState({ ...defaultState }, () => {
      saveToLocalStorage('state', this.state);
    });
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
          <Work
            workExperience={this.state.workExperience}
            workInputHandler={this.workInputHandler}
            addField={this.addWorkField}
            removeField={this.removeWorkField}
          ></Work>

          <button
            type="button"
            className="btn btn-clear"
            onClick={this.removeAllState}
          >
            Clear Form
          </button>
        </form>

        <Resume data={this.state}></Resume>
      </main>
    );
  }
}

export default Main;
