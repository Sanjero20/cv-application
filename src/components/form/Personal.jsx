import React, { Component } from 'react';

class Personal extends Component {
  render() {
    const { inputHandler } = this.props;
    const { name, address, contact, email, description } =
      this.props.personalInfo;

    return (
      <section className="personal-info">
        <h3 className="title">
          Personal Info <hr />
        </h3>

        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={inputHandler} />
        </fieldset>

        <fieldset>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={inputHandler}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={inputHandler}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={inputHandler}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={inputHandler}
            placeholder="Tell something about yourself"
          ></textarea>
        </fieldset>
      </section>
    );
  }
}

export default Personal;
