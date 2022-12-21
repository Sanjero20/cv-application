import React, { Component } from 'react';
import { checkYear, checkLocation } from '../../modules/check';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }

  renderEducation = (list) => {
    return list.map((info) => (
      <div key={info.id}>
        <div className="space-between">
          <strong>
            {info.schoolName} {checkLocation(info.location)}
          </strong>
          <p>{checkYear(info.fromYr, info.toYr)}</p>
        </div>
        <p> {info.course} </p>
      </div>
    ));
  };

  render() {
    const education = this.props.data;

    // Will not display Education list if empty list
    if (education.length <= 0) return;

    return (
      <section className="resume-education">
        <h4>
          Education <hr />
        </h4>
        <div className="education-list">{this.renderEducation(education)}</div>
      </section>
    );
  }
}

export default EducationDisplay;
