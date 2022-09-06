import React from 'react';

const Color = () => {
  return (
    <form className="form">
      <textarea className="textarea"></textarea>
      <br />
      <input
        type="text"
        placeholder="input color"
        value={color}
        onChange={() => {}}
      />
    </form>
  );
};
export default Color;
