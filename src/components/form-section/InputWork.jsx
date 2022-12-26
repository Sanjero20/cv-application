import React from 'react';
import Buttons from './Buttons';

function InputWork(props) {
  const { data, addWork, clearWork } = props;

  return (
    <fieldset className="workExp">
      <h1 className="title"> Work Experience</h1>

      <div className="render-field">{renderInputField(data, props)}</div>

      <Buttons clear={clearWork} add={addWork} name="Work" />
    </fieldset>
  );
}

function renderInputField(list, props) {
  const { inputHandler, removeWork } = props;

  return list.map((work, index) => (
    <div className="input-fields" key={work.id}>
      <div className="inputs">
        {/* Company Name */}
        <div>
          <label>Company</label>
          <input
            type="text"
            name="companyName"
            value={work.companyName}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={work.location}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>

        {/* Year Started & Ended */}
        <div className="wrap">
          <div>
            <label>From Year</label>
            <input
              type="text"
              name="fromYr"
              value={work.fromYr}
              onChange={(e) => inputHandler(e, index)}
            />
          </div>

          <div>
            <label>To Year</label>
            <input
              type="text"
              name="toYr"
              value={work.toYr}
              onChange={(e) => inputHandler(e, index)}
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={work.role}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>

        {/* Role Description */}
        <div>
          <label>Your Task</label>
          <textarea
            type="text"
            name="roleDescription"
            value={work.roleDescription}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>
      </div>

      <button
        type="button"
        className="btn-x"
        onClick={(e) => removeWork(work.id)}
      >
        Remove
      </button>
    </div>
  ));
}

export default InputWork;
