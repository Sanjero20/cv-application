import React from 'react';

function Education({ data }) {
  if (data.length <= 0) return;

  const renderEduc = () => {
    return data.map((info, index) => (
      <div key={index}>
        <div className="flex-space">
          <p className="name">
            {info.schoolName}{' '}
            <span> {info.location ? `- ${info.location}` : ''}</span>
          </p>

          <p className="year">
            {info.fromYr} - {info.toYr}
          </p>
        </div>
        <p className="course">{info.course}</p>
      </div>
    ));
  };

  return (
    <div className="education">
      <h3 className="section-title">Education</h3>
      <div className="details"> {renderEduc()}</div>
    </div>
  );
}

export default Education;
