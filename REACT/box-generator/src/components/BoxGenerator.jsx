import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color.trim()) return;
    setBoxes([...boxes, color]);
    setColor('');
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8">Box Generator</h1>

      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-8">
        <label className="text-xl font-medium" htmlFor="colorInput">
          Color
        </label>
        <input
          id="colorInput"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-black px-4 py-2"
        />
        <button
          type="submit"
          className="bg-gray-200 px-6 py-2 border border-gray-400 rounded cursor-pointer hover:bg-gray-300"
        >
          Add
        </button>
      </form>

      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: boxColor }}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
