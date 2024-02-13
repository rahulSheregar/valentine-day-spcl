'use client'
import React from 'react';

const BackgroundContainer = ({ children, sourceName }) => {
  return (
    <div className="background-container" style={{backgroundImage: `url('${sourceName}')`, }}>
      {children}
      <style jsx>{`
        .background-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
          
        }
      `}</style>
    </div>
  );
};

export default BackgroundContainer;
