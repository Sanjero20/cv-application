import React from 'react';

function Person({ data }) {
  const { name, description, ...otherInfo } = data;

  const renderInfo = () => {
    const list = Object.values(otherInfo);

    // Filter out empty values
    const filtered = list.filter((data) => data != '');

    return filtered.map((info, index) => (
      <React.Fragment key={index}>
        <li>{info}</li>
        {index < filtered.length - 1 ? <hr /> : ''}
      </React.Fragment>
    ));
  };

  return (
    <div>
      <h1 className="name">{name.toUpperCase()}</h1>
      <ul> {renderInfo(otherInfo)} </ul>
      <p className="description"> {description} </p>
    </div>
  );
}
export default Person;
