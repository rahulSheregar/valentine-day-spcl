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
      <iframe 
        style={{
          width: '100%', 
          maxWidth: '450px', 
          aspectRatio: '360/640', 
          height: 'auto', 
          display: 'block', 
          margin: '0 auto', 
          border: 'none',
        }}
        src="https://cdn.my7hos.com/content/9f04fcfb-2bdb-4422-83d7-6062a180b17b/posts/c734520a-59e9-421a-a15e-fef9475b5e89/d2f1518e-56d9-428d-be09-913368614b32.mp4" 
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      />
      {children}
    </div>
  );
};

export default BackgroundContainer;
