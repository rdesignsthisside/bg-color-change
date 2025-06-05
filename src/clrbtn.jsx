import React from 'react';

function ColorBtn({ colorName, setColor }) {
  return (
    <button
      onClick={() => setColor(colorName)}
      className='outline-none px-3 py-2 rounded-xl text-white'
      style={{ backgroundColor: colorName }}
    >
      {colorName}
    </button>
  );
}

export default ColorBtn;
