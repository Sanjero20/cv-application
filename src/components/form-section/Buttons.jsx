import React from 'react';

function Buttons({ clear, add, name }) {
  return (
    <section className="buttons">
      <button type="button" className="btn-clear" onClick={clear}>
        Clear All
      </button>

      <button type="button" className="btn-add" onClick={add}>
        Add {name}
      </button>
    </section>
  );
}

export default Buttons;
