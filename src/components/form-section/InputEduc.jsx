import React from 'react';

import Buttons from './Buttons';

function InputEduc(props) {
  const { data, addEducation, clearEducation } = props;

  return (
    <fieldset className="education">
      <h1 className="title">Education Details</h1>

      <div className="render-field">{renderInputField(data, props)}</div>

      <Buttons
        clear={clearEducation}
        add={addEducation}
        name="Education"
      ></Buttons>
    </fieldset>
  );
}

function renderInputField(list, props) {
  const { inputHandler, removeEducation } = props;

  return list.map((education, index) => (
    <div className="input-fields" key={education.id}>
      <div className="inputs">
        {/* School Name */}
        <div>
          <label>School Name</label>
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>
        {/* School Location */}
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={education.location}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>
        {/* Course Taken */}
        <div>
          <label>Course Taken</label>
          <input
            type="text"
            name="course"
            value={education.course}
            onChange={(e) => inputHandler(e, index)}
          />
        </div>

        {/* Year Started & Ender */}
        <div className="wrap">
          <div>
            <label>From Year</label>
            <input
              type="text"
              name="fromYr"
              value={education.fromYr}
              onChange={(e) => inputHandler(e, index)}
            />
          </div>

          <div>
            <label>To Year</label>
            <input
              type="text"
              name="toYr"
              value={education.toYr}
              onChange={(e) => inputHandler(e, index)}
            />
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        type="button"
        className="btn-x"
        onClick={() => removeEducation(education.id)}
      >
        Remove
      </button>
    </div>
  ));
}

export default InputEduc;
