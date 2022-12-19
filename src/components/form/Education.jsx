import React, { Component } from 'react';

export class Education extends Component {
  constructor(props) {
    super(props);
    this.addField = this.props.addField;
    this.inputHandler = this.props.educationInputHandler;
    this.currentYear = new Date().getFullYear();
  }

  renderInputFields = (educationArray) => {
    return educationArray.map((education, index) => (
      <div className="education-field" key={index}>
        <fieldset>
          <label htmlFor=""> School Name</label>
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={(e) => this.inputHandler(e, index)}
          />
        </fieldset>

        <div className="flex">
          <fieldset>
            <label htmlFor="">Education Level</label>
            <select
              name="educationLevel"
              id=""
              value={education.educationLevel}
              onChange={(e) => this.inputHandler(e, index)}
            >
              <option value="college">College</option>
              <option value="shs">Senior High School</option>
              <option value="highschool">Junior High School</option>
              <option value="elementary">Elementary</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="course">Course / Strand</label>
            <input
              name="course"
              type="text"
              value={education.course}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>
        </div>

        <div className="flex">
          <fieldset>
            <label> From Year </label>
            <input
              name="fromYr"
              type="number"
              min="1970"
              max={`${this.currentYear}`}
              placeholder="YYYY"
              value={education.fromYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>

          <fieldset>
            <label> To Year</label>
            <input
              name="toYr"
              type="number"
              min="1970"
              max={this.currentYear}
              placeholder="YYYY or Present"
              value={education.toYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>
        </div>
      </div>
    ));
  };

  render() {
    const { education } = this.props;

    return (
      <section className="education">
        <h3 className="title">Education</h3>

        {this.renderInputFields(education)}

        <button
          type="button"
          className="btn btn-addEducation"
          onClick={this.addField}
        >
          Add
        </button>
      </section>
    );
  }
}

export default Education;
