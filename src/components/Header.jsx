import React from 'react';

function Header({ preview, toggle }) {
  let state;

  if (preview) {
    state = 'Edit';
  } else {
    state = 'Preview';
  }

  return (
    <header>
      <div>
        <h1 className="page-title">CV Creator</h1>
        <button className="btn-preview" onClick={toggle}>
          {' '}
          {state}{' '}
        </button>
      </div>
    </header>
  );
}

export default Header;
