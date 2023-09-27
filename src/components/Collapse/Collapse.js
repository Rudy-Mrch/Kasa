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
      {isOpen && <div className="collapse-text">{text}</div>}
    </div>
  );
}

export default Collapse;
