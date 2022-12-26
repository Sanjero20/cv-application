import React from 'react';

function Buttons({ clear, add }) {
  return (
    <section className="buttons">
      <button type="button" className="btn-clear" onClick={clear}>
        Clear All
      </button>

      <button type="button" className="btn-add" onClick={add}>
        Add {}
      </button>
    </section>
  );
}

export default Buttons;
