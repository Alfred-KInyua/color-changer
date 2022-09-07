import React, { useState } from 'react';

import Square from './component/Square';
import Input from './component/Input';

function App() {
  const [color, setColor] = useState();
  const [hexValue, setHexValue] = useState();
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <Square color={color} hexValue={hexValue} isDark={isDark} />
      <Input
        color={color}
        setColor={setColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </>
  );
}

export default App;
