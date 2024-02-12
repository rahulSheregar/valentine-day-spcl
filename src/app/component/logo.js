'use client'
import React, { useState } from 'react';

const CenteredImage = ({ src }) => {
  const [width, setWidth] = useState(200); // Initial width
  const [height, setHeight] = useState(200); // Initial height

  const handleResize = (e) => {
    setWidth(e.target.offsetWidth);
    setHeight(e.target.offsetHeight);
  };

  return (
    <div className="image-container" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
      <img
        src={src}
        alt="Resizable Image"
        style={{ width: `100%`, height: `${height}px`, objectFit: 'contain' }}
        onMouseUp={handleResize}
        onTouchEnd={handleResize}
        draggable="false"
      />
    </div>
  );
};

export default CenteredImage;
