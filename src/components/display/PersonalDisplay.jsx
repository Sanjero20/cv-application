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

  renderPersonalInfo() {
    const info = Object.values(this.props.data);
    const personalInfo = info.slice(1, 4);
    return personalInfo.map((info, index) => (
      <React.Fragment key={index}>
        <li>{info}</li>
        {this.renderSeparator(index, personalInfo)}
      </React.Fragment>
    ));
  }

  render() {
    const { name, description } = this.props.data;

    return (
      <>
        <h1 className="name"> {name} </h1>
        <hr />

        <ul className="personal-info">{this.renderPersonalInfo()}</ul>

        <h3 className="title">Description</h3>
        <p className="description"> {description} </p>
      </>
    );
  }
}

export default PersonalDisplay;
