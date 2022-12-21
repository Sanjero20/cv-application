import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.addField = this.props.addField;
    this.removeField = this.props.removeField;
  }

  renderInputFields = (workArray) => {
    return workArray.map((work, index) => (
      <div className="work-field" key={work.id}>
        <fieldset>
          <label htmlFor="">Company Name</label>
          <input type="text" name="companyName" />
        </fieldset>

        <fieldset>
          <label htmlFor="">Location</label>
          <input type="text" name="location" />
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
