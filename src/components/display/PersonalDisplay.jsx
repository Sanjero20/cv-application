import React, { Component } from 'react';

class PersonalDisplay extends Component {
  constructor(props) {
    super(props);
    this.renderPersonalInfo.bind();
  }

  renderSeparator(index, array) {
    if (index < array.length - 1) {
      return <hr className="separator" />;
    }
  }

  renderPersonalInfo(info) {
    const personalInfo = Object.values(info);

    // Filter out empty values
    const filtered = personalInfo.filter((info) => info != '');

    return filtered.map((info, index) => (
      <React.Fragment key={index}>
        <li>{info}</li>
        {this.renderSeparator(index, filtered)}
      </React.Fragment>
    ));
  }

  render() {
    const { name, description, ...info } = this.props.data;

    return (
      <section className="resume-personalInfo">
        <h1 className="name"> {name.toUpperCase()} </h1>
        <ul className="personal-info">{this.renderPersonalInfo(info)}</ul>
        <p className="description"> {description} </p>
      </section>
    );
  }
}

export default PersonalDisplay;
