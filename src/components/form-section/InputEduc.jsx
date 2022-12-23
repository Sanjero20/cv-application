import React from 'react';

function InputEduc(props) {
  const { data, addEducation } = props;

  return (
    <fieldset className="education">
      <h1 className="title">Education Details</h1>

      <div className="render-field">{renderInputField(data, props)}</div>

      <section className="buttons">
        <button className="btn-clear">Clear All </button>
        <button className="btn-add" onClick={addEducation}>
          Add Education
        </button>
      </section>
    </fieldset>
  );
}

function renderInputField(list, props) {
  const { inputHandler, removeEducation } = props;

  return list.map((education, index) => (
    <div className="input-fields" key={index}>
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
      <button className="btn-x" onClick={() => removeEducation(education.id)}>
        Remove
      </button>
    </div>
  ));
}

export default InputEduc;
