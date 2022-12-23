import React from 'react';

function InputEduc(props) {
  const { educationList } = props;

  return (
    <fieldset className="education">
      <h1 className="title">Education Details</h1>

      <div className="render-field">{renderInputField([{}, {}, {}])}</div>

      <section className="buttons">
        <button className="btn-clear">Clear All </button>
        <button className="btn-add">Add Education</button>
      </section>
    </fieldset>
  );
}

function renderInputField(list) {
  return list.map((education, index) => (
    <div className="input-fields" key={index}>
      <div className="inputs">
        {/* School Name */}
        <div>
          <label>School Name</label>
          <input type="text" name="schoolName" />
        </div>
        {/* School Location */}
        <div>
          <label>Location</label>
          <input type="text" name="location" />
        </div>
        {/* Course Taken */}
        <div>
          <label>Course Taken</label>
          <input type="text" name="course" />
        </div>

        {/* Year Started & Ender */}

        <div className="wrap">
          <div>
            <label>From Year</label>
            <input type="text" name="course" />
          </div>

          <div>
            <label>To Year</label>
            <input type="text" name="course" />
          </div>
        </div>
      </div>
      {/* Remove Button */}
      <button className="btn-x"> Remove </button>
    </div>
  ));
}

export default InputEduc;
