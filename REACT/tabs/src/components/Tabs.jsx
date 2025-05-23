import React, { useState } from "react";


const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container">
      {/* Headers */}
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content">
        {items[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs
