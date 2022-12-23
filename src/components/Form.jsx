import React from 'react';
import InputPerson from './form-section/InputPerson';

function Form({ personData, educationData, workExpData, inputHandler }) {
  return (
    <section className="Form">
      <InputPerson data={personData} inputHandler={inputHandler} />
    </section>
  );
}

export default Form;
