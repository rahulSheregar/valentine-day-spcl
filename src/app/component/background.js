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
      // <iframe 
      //   style={{
      //     width: '100%', 
      //     maxWidth: '450px', 
      //     aspectRatio: '360/640', 
      //     height: 'auto', 
      //     display: 'block', 
      //     margin: '0 auto', 
      //     border: 'none',
      //   }}
      //   src="https://cdn.my7hos.com/content/9f04fcfb-2bdb-4422-83d7-6062a180b17b/posts/7074f607-7fac-435a-b039-c4c1e99d92b5/74527e9b-eed2-4c12-9d88-ba59cc79df69_77525c35-3a99-46ea-ac7d-7145840cf831.mp4"
      //   title="Video Player"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      //   allowFullScreen
      // />
      {children}
    </div>
  );
};

export default BackgroundContainer;
