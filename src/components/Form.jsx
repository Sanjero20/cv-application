import React from 'react';
import InputPerson from './form-section/InputPerson';
import InputEduc from './form-section/InputEduc';
import InputWork from './form-section/InputWork';

function Form(props) {
  // Datas
  const { personData, educationData, workExpData } = props;

  // Personal Handlers
  const { inputHandler } = props;

  // Education Event Handlers
  const { educationInputHandler, addEducation, removeEducation } = props;

  // Work Event Handlers
  const { workInputHandler, addWork, removeWork } = props;

  // Clear All methods
  const { clearEducation, clearWork } = props;

  return (
    <form className="Form" autoComplete="off">
      <InputPerson data={personData} inputHandler={inputHandler} />
      <InputEduc
        data={educationData}
        inputHandler={educationInputHandler}
        addEducation={addEducation}
        removeEducation={removeEducation}
        clearEducation={clearEducation}
      />

      <InputWork
        data={workExpData}
        inputHandler={workInputHandler}
        addWork={addWork}
        removeWork={removeWork}
        clearWork={clearWork}
      />
    </form>
  );
}

export default Form;
