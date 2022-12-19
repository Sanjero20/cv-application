import React, { Component } from 'react';
import Resume from './Resume';

import Personal from './form/Personal';
import Education from './form/Education';

import uniqid from 'uniqid';

import '../styles/Form.css';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();
    this.addEducField.bind();
    this.educationInputHandler.bind();

    this.state = {
      personalInfo: {
        name: '',
        address: '',
        contact: '',
        email: '',
        description: '',
      },
      education: [
        {
          id: uniqid(),
          schoolName: '',
          educationLevel: 'college',
          course: '',
          fromYr: '',
          toYr: '',
        },
      ],
      workExperience: [],
    };
  }

  // PersonalInfo Functions
  inputHandler = (e) => {
    const target = e.target.id;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [target]: e.target.value,
      },
    });
  };

  // Education Functions
  addEducField = () => {
    const newValue = {
      id: uniqid(),
      schoolName: '',
      educationLevel: 'college',
      course: '',
      fromYr: '',
      toYr: '',
    };

    this.setState({
      education: [...this.state.education, newValue],
    });
  };

  removeEducField = (id) => {
    const list = this.state.education;
    const updatedList = list.filter((item) => item.id != id);
    this.setState({
      education: updatedList,
    });
  };

  educationInputHandler = (e, index) => {
    const { name, value, type } = e.target;
    const educations = this.state.education;

    // Ignore if length is more than 4 digits (represents year)
    if (type == 'number' && value.length > 4) return;

    educations[index][name] = value;

    this.setState({
      education: educations,
    });
  };

  render() {
    return (
      <main>
        <form id="cv-builder">
          <Personal inputHandler={this.inputHandler} />
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
