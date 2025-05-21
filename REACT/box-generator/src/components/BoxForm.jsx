
import React, { useState } from 'react';

const BoxForm = ({ addBox }) => {
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color || !width || !height) return;

    addBox({ color, width: parseInt(width), height: parseInt(height) });
    setColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center mb-6">
      <label className="text-lg">Color</label>
      <input
        type="text"
        placeholder="e.g. red or #ff0000"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border px-2 py-1"
      />
      <label className="text-lg">Width</label>
      <input
        type="number"
        placeholder="px"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        className="border px-2 py-1 w-20"
      />
      <label className="text-lg">Height</label>
      <input
        type="number"
        placeholder="px"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="border px-2 py-1 w-20"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Add
      </button>
    </form>
  );
};

export default BoxForm;
