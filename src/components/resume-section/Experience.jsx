import React from 'react';

function Experience({ data }) {
  const renderInfo = () => {
    return data.map((info, index) => (
      <div key={index}>
        <div className="flex-space">
          <p className="name">
            {info.companyName}
            <span> {info.location ? `- ${info.location}` : ''}</span>
          </p>

          <p className="year">
            {info.fromYr} - {info.toYr}
          </p>
        </div>

        <p className="role">
          <strong>{info.role.toUpperCase()}</strong>
        </p>

        <p className="desc">{info.roleDescription}</p>
      </div>
    ));
  };

  return (
    <div className="experience">
      <h3 className="section-title">Experience</h3>
      <div className="details">{renderInfo()}</div>
    </div>
  );
}

export default Experience;
