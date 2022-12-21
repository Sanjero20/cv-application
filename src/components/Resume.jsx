import React, { Component } from 'react';
import PersonalDisplay from './display/PersonalDisplay';
import EducationDisplay from './display/EducationDisplay';

import '../styles/Resume.css';
import WorkDisplay from './display/WorkDisplay';

class Resume extends Component {
  render() {
    const { personalInfo, education, workExperience } = this.props.data;

    return (
      <div className="Resume">
        <PersonalDisplay data={personalInfo}></PersonalDisplay>
        <EducationDisplay data={education}></EducationDisplay>
        <WorkDisplay data={workExperience}></WorkDisplay>
      </div>
    );
  }
}

export default Resume;
