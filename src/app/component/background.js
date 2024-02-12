'use client'
import React from 'react';

const BackgroundContainer = ({ children }) => {
  return (
    <div className="background-container">
      {children}
      <style jsx>{`
        .background-container {
          position: relative;
          width: 100%;
          height: 100vh;
          background-image: url('/heart-animation.gif');
          background-size: cover;
          background-position: center;
          /* Add other styles as needed */
        }
      `}</style>
    </div>
  );
};

export default BackgroundContainer;
