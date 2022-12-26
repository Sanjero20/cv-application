import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

import {
  saveAll,
  retrieveFromLocal,
  clearStorage,
} from './modules/saveToLocal.js';

import {
  defaultPersonData,
  defaultEducationData,
  defaultWorkExpData,
} from './data/defaultData';

let person = retrieveFromLocal('personalData');
const education = retrieveFromLocal('educationData');
const work = retrieveFromLocal('workExpData');

//
if (Array.isArray(person)) {
  person = defaultPersonData();
}

function App() {
  const [personalData, setPersonalData] = useState(person);
  const [educationData, setEducationData] = useState(education);
  const [workExpData, setWorkExpData] = useState(work);

  // Personal Event Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  // Education Event Handler
  const addEducation = () => {
    const newData = defaultEducationData();
    setEducationData([...educationData, newData]);
  };

  const removeEducation = (id) => {
    const list = educationData.filter((data) => data.id != id);
    setEducationData([...list]);
  };

  const educationInputHandler = (e, index) => {
    const { name, value } = e.target;
    const list = educationData;
    // Set value of the data based on in its index and key
    list[index][name] = value;
    setEducationData([...list]);
  };

  const clearEducationField = () => {
    console.log('lol');
    setEducationData([]);
  };

  // Work Event Handler
  const addWork = () => {
    const newData = defaultWorkExpData();
    setWorkExpData([...workExpData, newData]);
  };

  // Lifecycle
  useEffect(() => {
    const combined = { personalData, educationData, workExpData };
    return saveAll(combined);
  });

  return (
    <>
      <Header />

      <main>
        <Form
          personData={personalData}
          educationData={educationData}
          workExpData={workExpData}
          // Input Handlers
          inputHandler={inputHandler}
          educationInputHandler={educationInputHandler}
          // Education
          addEducation={addEducation}
          removeEducation={removeEducation}
          clearEducation={clearEducationField}
          // Work
          addWork={''}
          removeWork={''}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
