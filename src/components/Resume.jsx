import React, { Component } from 'react';
import '../styles/Resume.css';

import PersonalDisplay from './display/PersonalDisplay';

class Resume extends Component {
  render() {
    const { personalInfo } = this.props.data;

    return (
      <div className="Resume">
        <PersonalDisplay data={personalInfo}></PersonalDisplay>
        {/* Skills */}
        {/* Work Experience */}
        {/* Education  */}
      </div>
    );
  }
}

export default Resume;
