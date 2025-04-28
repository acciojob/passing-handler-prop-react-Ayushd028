import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor } = props;
  const [bgStyle, setBgStyle] = useState({ background: "" });

  const handleClick = () => {
    applyColor(setBgStyle);
  };

  return (
    <div 
      className="fix-box" 
      onClick={handleClick} 
      style={bgStyle}
    >
    </div>
  );
}

export default Selection;
