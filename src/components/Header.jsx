import React from 'react';

function Header({ preview, toggle, clearAll }) {
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

        <section className="btns ">
          {preview ? (
            <button className="btn" onClick={() => print()}>
              Save
            </button>
          ) : (
            <button className="btn" onClick={clearAll}>
              Clear All
            </button>
          )}

          {/* Always Show */}
          <button className="btn btn-preview" onClick={toggle}>
            {state}
          </button>
        </section>
      </div>
    </header>
  );
}

export default Header;
