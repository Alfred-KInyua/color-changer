import React, { useState } from 'react';
import Input from './component/Input';
import Square from './component/Square';

const App = () => {
  const [color, setColor] = useState();

  const handleChangeColor = () => {};

  return (
    <>
      <Input color={color} setColor={setColor} />
      <Square />
    </>
  );
};
export default App;
