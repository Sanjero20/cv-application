import React, { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
  renderPersonalInfo() {
    const { address, contact, email } = this.props.data;
    const personalInfo = [address, contact, email];

    return personalInfo.map((info, index) => (
      <li key={`${index}`}> {info} | </li>
    ));
  }

  render() {
    const { name } = this.props.data;

    return (
      <div className="Resume">
        <h1 className="name"> {name} </h1>
        <hr className="separator" />

        <ul className="personal-info">{this.renderPersonalInfo()}</ul>

        <h3>Description</h3>
        <hr />
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste
          vitae, magni ut ad cum totam doloribus? Ex accusamus architecto,
          corrupti iure assumenda quia, illo earum id, adipisci iste
          dignissimos!
        </p>
      </div>
    );
  }
}

export default Resume;
