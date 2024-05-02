import React from 'react';

export default function Nav() {
  return (
    <>
      {/* Falske knapper */}
      <div>
        <button>Knapp 1</button>
        <button>Knapp 2</button>
      </div>

      {/* Falsk søkefelt */}
      <input type="text" placeholder="Søk..." />
    </>
  );
}
