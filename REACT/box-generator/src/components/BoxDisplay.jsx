
import React from 'react';

const BoxDisplay = ({ boxes, removeBox }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {boxes.map((box) => (
        <div
          key={box.id}
          style={{
            backgroundColor: box.color,
            width: `${box.width}px`,
            height: `${box.height}px`,
          }}
          className="relative"
        >
          <button
            onClick={() => removeBox(box.id)}
            className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-bl"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;
