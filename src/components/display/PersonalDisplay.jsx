import React, { Component } from 'react';

class PersonalDisplay extends Component {
  constructor(props) {
    super(props);
    this.renderPersonalInfo.bind();
  }

  renderPersonalInfo() {
    const info = Object.values(this.props.data);
    const personalInfo = info.filter((el, index) => index > 0); // filter name
    return personalInfo.map((info, index) => (
      <>
        <li key={index}>{info}</li>
        <hr className="separator" />
      </>
    ));
  }

  render() {
    const { name, address, contact, email } = this.props.data;

    return (
      <>
        <h1 className="name"> {name} </h1>
        <ul className="personal-info">{this.renderPersonalInfo()}</ul>
        <h3 className="title">Description</h3>
        <hr />
        <p className="description"> {} </p>
      </>
    );
  }
}

export default PersonalDisplay;
