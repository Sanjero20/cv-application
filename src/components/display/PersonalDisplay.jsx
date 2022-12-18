import React, { Component } from 'react';

class PersonalDisplay extends Component {
  constructor(props) {
    super(props);
    this.renderPersonalInfo.bind();
  }

  renderPersonalInfo() {
    const info = Object.values(this.props.data);
    const personalInfo = info.slice(1, 4);
    return personalInfo.map((info, index) => (
      <React.Fragment key={index}>
        <li>{info}</li>
        <hr className="separator" />
      </React.Fragment>
    ));
  }

  render() {
    const { name, description } = this.props.data;

    return (
      <>
        <h1 className="name"> {name} </h1>
        <ul className="personal-info">{this.renderPersonalInfo()}</ul>
        <h3 className="title">Description</h3>
        <hr />
        <p className="description"> {description} </p>
      </>
    );
  }
}

export default PersonalDisplay;
