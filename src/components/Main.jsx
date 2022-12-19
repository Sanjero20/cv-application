import React, { Component } from 'react';
import Resume from './Resume';

import Personal from './form/Personal';
import Education from './form/Education';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.inputHandler.bind();

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
          schoolName: '',
        },
      ],
      workExperience: [],
    };
  }

  inputHandler = (e) => {
    const target = e.target.id;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [target]: e.target.value,
      },
    });
  };

  addEducField = () => {
    this.setState({
      education: [...this.state.education, { schoolName: '' }],
    });
  };

  render() {
    return (
      <main>
        <form id="cv-builder">
          <Personal inputHandler={this.inputHandler} />
          <Education
            education={this.state.education}
            addField={this.addEducField}
          />
          {/* Practical Experience */}
        </form>
        <Resume data={this.state}></Resume>
      </main>
    );
  }
}

export default Main;
