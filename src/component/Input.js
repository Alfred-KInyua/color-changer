import React from 'react';
import colorNames from 'colornames';

function Input({ color, setColor, setHexValue, isDark, setIsDark }) {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDark(!isDark)}>
        toggle text color
      </button>
    </form>
  );
}

export default Input;
