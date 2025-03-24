'use client'
import React from 'react';

const BackgroundContainer = ({ children, sourceName }) => {
  return (
    <div 
      className="background-container" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url('${sourceName}')`,
      }}
    >

      {children}
    </div>
  );
};

export default BackgroundContainer;
