import React, { Component } from 'react';

export class Education extends Component {
  constructor(props) {
    super(props);
    this.addField = this.props.addField;
  }

  renderInputFields = (array) => {
    return array.map((name, index) => (
      <fieldset key={index}>
        <label htmlFor=""> School Name</label>
        <input type="text" />
      </fieldset>
    ));
  };

  render() {
    const { education } = this.props;

    return (
      <section>
        <h3 className="title">Education</h3>

        {/* Render education fields */}
        {this.renderInputFields(education)}
        <button type="button" onClick={this.addField}>
          Add
        </button>
      </section>
    );
  }
}

export default Education;
