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

  return (
    <section className="Form">
      <InputPerson data={personData} inputHandler={inputHandler} />
      <InputEduc
        data={educationData}
        inputHandler={educationInputHandler}
        addEducation={addEducation}
        removeEducation={removeEducation}
      ></InputEduc>
    </section>
  );
}

export default Form;
