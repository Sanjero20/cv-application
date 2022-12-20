import React, { Component } from 'react';
import PersonalDisplay from './display/PersonalDisplay';
import EducationDisplay from './display/EducationDisplay';

import '../styles/Resume.css';

class Resume extends Component {
  render() {
    const { personalInfo, education } = this.props.data;

    return (
      <div className="Resume">
        <PersonalDisplay data={personalInfo}></PersonalDisplay>
        <EducationDisplay data={education}></EducationDisplay>
        {/* Work Experience */}
      </div>
    );
  }
}

export default Resume;
