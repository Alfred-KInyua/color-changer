import React from 'react';

const Square = ({ color, hexValue, isDark }) => {
  const mystyle = { backgroundColor: color, color: isDark ? '#000' : '#fff' };
  return (
    <div style={mystyle}>
      <p>{color ? color : 'Empty Value'} </p>
      <p>{hexValue ? hexValue : ''}</p>
    </div>
  );
};

export default Square;
