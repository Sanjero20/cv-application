import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

import { defaultPersonData } from './data/defaultData';

const data = defaultPersonData();

function App() {
  const [personalData, setPersonalData] = useState(data);
  const [educationData, setEducationData] = useState([]);
  const [workExpData, setWorkExpData] = useState([]);

  // Personal Handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  // Lifecycle
  useEffect(() => {
    return console.table(personalData);
  });

  return (
    <>
      <Header />
      <Form
        personData={personalData}
        educationData={educationData}
        workExpData={workExpData}
        //
        inputHandler={inputHandler}
      />
      <Footer />
    </>
  );
}

export default App;
