import React from 'react';

function InputPerson(props) {
  const { name, address, email, contact, description } = props.data;
  const inputHandler = props.inputHandler;

  return (
    <fieldset>
      <legend>Personal Details</legend>

      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={inputHandler} />
      </div>

      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={inputHandler}
        />
      </div>

      <div>
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={contact}
          onChange={inputHandler}
        />
      </div>

      <div>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={inputHandler} />
      </div>

      <div>
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={inputHandler}
        />
      </div>
    </fieldset>
  );
}

export default InputPerson;
