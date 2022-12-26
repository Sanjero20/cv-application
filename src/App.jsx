import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

import Resume from './components/Resume';

import {
  saveAll,
  retrieveFromLocal,
  clearStorage,
} from './modules/saveToLocal.js';

import {
  defaultPersonData,
  defaultEducationData,
  defaultWorkExpData,
} from './modules/defaultData';

let person = retrieveFromLocal('personalData');
const education = retrieveFromLocal('educationData');
const work = retrieveFromLocal('workData');

// If Array, Create a default object structure
if (Array.isArray(person)) {
  person = defaultPersonData();
}

function App() {
  // State
  const [preview, setPreview] = useState(true);

  // Form Props
  const [personalData, setPersonalData] = useState(person);
  const [educationData, setEducationData] = useState(education);
  const [workExpData, setWorkExpData] = useState(work);

  // Preview Handler
  const togglePreview = () => {
    setPreview(!preview);
  };

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
    setEducationData([]);
  };

  // Work Event Handler
  const addWork = () => {
    const newData = defaultWorkExpData();
    setWorkExpData([...workExpData, newData]);
  };

  const removeWork = (id) => {
    const list = workExpData.filter((data) => data.id != id);
    setWorkExpData([...list]);
  };

  const workInputHandler = (e, index) => {
    const { name, value } = e.target;
    const list = workExpData;
    // Set value of the data based on in its index and key
    list[index][name] = value;
    setWorkExpData([...list]);
  };

  const clearWork = () => {
    setWorkExpData([]);
  };

  // Lifecycle
  useEffect(() => {
    // This will save all data on every render / change
    const combined = { personalData, educationData, workExpData };
    return saveAll(combined);
  });

  return (
    <>
      <Header preview={preview} toggle={togglePreview} />

      <main>
        {!preview ? (
          <Form
            personData={personalData}
            educationData={educationData}
            workExpData={workExpData}
            // Input Handlers
            inputHandler={inputHandler}
            educationInputHandler={educationInputHandler}
            workInputHandler={workInputHandler}
            // Education
            addEducation={addEducation}
            removeEducation={removeEducation}
            clearEducation={clearEducationField}
            // Work
            addWork={addWork}
            removeWork={removeWork}
            clearWork={clearWork}
          />
        ) : (
          <Resume
            personData={personalData}
            educationData={educationData}
            workExpData={workExpData}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
