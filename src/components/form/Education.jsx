import React, { Component } from 'react';

export class Education extends Component {
  constructor(props) {
    super(props);

    this.addField = this.props.addField;
    this.removeField = this.props.removeField;
    this.inputHandler = this.props.educationInputHandler;
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
              <option value="College">College</option>
              <option value="Senior High School">Senior High School</option>
              <option value="Highschool">Junior High School</option>
              <option value="Elementary">Elementary</option>
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
              type="text"
              placeholder="YYYY"
              value={education.fromYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>

          <fieldset>
            <label> To Year</label>
            <input
              name="toYr"
              type="text"
              placeholder="YYYY or Present"
              value={education.toYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>
        </div>

        <button
          type="button"
          className=" btn-remove"
          onClick={() => this.removeField(education.id)}
        >
          Remove
        </button>
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
