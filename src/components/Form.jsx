import React from 'react';
import InputPerson from './form-section/InputPerson';
import InputEduc from './form-section/InputEduc';

function Form(props) {
  // Datas
  const { personData, educationData, workExpData } = props;

  // Input Handlers
  const { inputHandler, educationInputHandler } = props;

  // Event Handlers
  const { addEducation, removeEducation } = props;

  const { clearEducation } = props;

  return (
    <form className="Form" autoComplete="off">
      <InputPerson data={personData} inputHandler={inputHandler} />
      <InputEduc
        data={educationData}
        inputHandler={educationInputHandler}
        addEducation={addEducation}
        removeEducation={removeEducation}
        clearEducation={clearEducation}
      ></InputEduc>
    </form>
  );
}

export default Form;
