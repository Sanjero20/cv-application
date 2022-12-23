import React from 'react';
import InputPerson from './form-section/InputPerson';
import InputEduc from './form-section/InputEduc';

function Form({ personData, educationData, workExpData, inputHandler }) {
  return (
    <section className="Form">
      <InputPerson data={personData} inputHandler={inputHandler} />
      <InputEduc></InputEduc>
    </section>
  );
}

export default Form;
