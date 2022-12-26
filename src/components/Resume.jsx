import React from 'react';
import Person from './resume-section/Person';
import Education from './resume-section/Education';
import Experience from './resume-section/Experience';

function Resume({ personData, educationData, workExpData }) {
  return (
    <section className="Resume">
      <Person data={personData}></Person>
      <Education data={educationData} />
      <Experience data={workExpData} />
    </section>
  );
}

export default Resume;
