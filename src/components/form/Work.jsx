import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.addField = this.props.addField;
    this.removeField = this.props.removeField;
    this.inputHandler = this.props.workInputHandler;
  }

  renderInputFields = (workArray) => {
    return workArray.map((work, index) => (
      <div className="work-field" key={work.id}>
        <div className="flex">
          <fieldset>
            <label htmlFor="">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={work.companyName}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="">Location</label>
            <input
              type="text"
              name="location"
              value={work.location}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>
        </div>

        <div className="flex">
          <fieldset>
            <label htmlFor="">From Year</label>
            <input
              type="text"
              name="fromYr"
              placeholder="YYYY"
              value={work.fromYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="">To Year</label>
            <input
              type="text"
              name="toYr"
              placeholder="YYYY or Present"
              value={work.toYr}
              onChange={(e) => this.inputHandler(e, index)}
            />
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="">Role </label>
          <input
            type="text"
            name="role"
            value={work.role}
            onChange={(e) => this.inputHandler(e, index)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor=""> Role Description</label>
          <textarea
            name="roleDescription"
            value={work.roleDescription}
            onChange={(e) => this.inputHandler(e, index)}
          ></textarea>
        </fieldset>

        <button
          type="button"
          className=" btn-remove"
          onClick={() => this.removeField(work.id)}
        >
          Remove
        </button>
      </div>
    ));
  };

  render() {
    const { workExperience } = this.props;

    return (
      <section className="work-experience">
        <h3 className="title">
          Work Experience <hr />
        </h3>

        {this.renderInputFields(workExperience)}

        <button type="button" className="btn btn-add" onClick={this.addField}>
          Add
        </button>
      </section>
    );
  }
}

export default Work;
