import React from 'react';
import Palette from './palette';
import seedColor from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColor[4]}/>
    </div>
  );
}

export default App;
