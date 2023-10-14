import React, { useState } from "react";


function Collapse({ isOpenByDefault, title, text, icon }) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? "open" : ""}`}>
      <div className="collapse-title">
        {title}
        <span
          className={`arrow ${isOpen ? "rotate" : ""}`}
          onClick={toggleCollapse}
        >
          {icon}
        </span>
      </div>
      <div
        className="collapse-text"
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 1s ease-in-out",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Collapse;
