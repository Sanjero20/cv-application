import React, { Component } from 'react';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { inputHandler } = this.props;

    return (
      <div>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="contact">Contact Number</label>
          <input type="tel" id="contact" onChange={inputHandler} />
        </fieldset>
      </div>
    );
  }
}

export default Personal;
