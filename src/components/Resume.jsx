import React, { Component } from 'react';
import PersonalDisplay from './display/PersonalDisplay';

import '../styles/Resume.css';

class Resume extends Component {
  render() {
    const { personalInfo } = this.props.data;

    return (
      <div className="Resume">
        <PersonalDisplay data={personalInfo}></PersonalDisplay>
        {/* Work Experience */}
        {/* Education  */}
      </div>
    );
  }
}

export default Resume;
