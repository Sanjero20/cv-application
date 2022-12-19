import React, { Component } from 'react';

class Personal extends Component {
  render() {
    const { inputHandler } = this.props;

    return (
      <div>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="contact">Contact Number</label>
          <input type="tel" id="contact" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={inputHandler}
            placeholder="Tell something about yourself"
          ></textarea>
        </fieldset>
      </div>
    );
  }
}

export default Personal;
