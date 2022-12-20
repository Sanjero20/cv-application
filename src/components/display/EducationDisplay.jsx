import React, { Component } from 'react';

class EducationDisplay extends Component {
  constructor(props) {
    super(props);
  }

  checkYear(from, to) {
    if (from || to) {
      return `${from} - ${to}`;
    }
  }

  checkLocation(location) {
    if (location) {
      return <span className="location"> - {location}</span>;
    }
  }

  renderEducation = (list) => {
    return list.map((info) => (
      <div key={info.id}>
        <p className="flex">
          <strong>
            {info.schoolName} {this.checkLocation(info.location)}
          </strong>
          <span>{this.checkYear(info.fromYr, info.toYr)}</span>
        </p>
        <p> {info.course} </p>
      </div>
    ));
  };

  render() {
    const education = this.props.data;

    // Will not display Education list if empty list
    if (education.length <= 0) return;

    return (
      <div className="resume-education">
        <h4>
          Education <hr />
        </h4>
        <div className="education-list">{this.renderEducation(education)}</div>
      </div>
    );
  }
}

export default EducationDisplay;
