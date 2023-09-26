import React, { useState } from 'react';

const DropDown = ({ title, children, openLogo, closeLogo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DropDown-collapse">
      <div className="DropDown-collapse-header">
        {title}
        <button onClick={toggleCollapse}>
          {isOpen ? closeLogo : openLogo}
        </button>
      </div>
      {isOpen && <div className="DropDown-collapse-content">{children}</div>}
    </div>
  );
};

export default DropDown;
