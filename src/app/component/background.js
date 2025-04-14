'use client'
 import React, { useEffect } from 'react';
 
 export default function BackgroundContainer({ 
   children, 
   sourceName, 
   iframeSrc 
 }) {
   // useEffect(() => {
   //   // Function to request camera permissions
   //   const requestCameraPermissions = async () => {
   //     try {
   //       // Request camera and microphone access
   //       await navigator.mediaDevices.getUserMedia({
   //         video: true,
   //         audio: true
   //       });
 
   //       // If in an iframe, notify parent about permissions
   //       if (window !== window.parent) {
   //         window.parent.postMessage({ 
   //           type: 'PERMISSIONS_OBTAINED' 
   //         }, '*');
   //       }
   //     } catch (error) {
   //       console.error('Camera permission error:', error);
 
   //       // Notify parent if in iframe about permission denial
   //       if (window !== window.parent) {
   //         window.parent.postMessage({ 
   //           type: 'PERMISSIONS_DENIED',
   //           error: error.message 
   //         }, '*');
   //       }
   //     }
   //   };
 
   //   // Attempt to get permissions
   //   requestCameraPermissions();
 
   //   // Add message listener for permission requests
   //   const handleMessage = (event) => {
   //     if (event.data.type === 'REQUEST_PERMISSIONS') {
   //       requestCameraPermissions();
   //     }
   //   };
 
   //   window.addEventListener('message', handleMessage);
 
   //   // Cleanup
   //   return () => {
   //     window.removeEventListener('message', handleMessage);
   //   };
   // }, []);
 
  return (
    <div 
      className="background-container" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url('${sourceName}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
      
         <iframe
          width="560"
          height="315"
          src="https://app.test-videospan.com/embed/cba88210-4faf-4b48-8ab2-4c1d60af74b5/3bc09d159a43d2ccfb57?autoplay=1"
          title="Video Player"
          frameborder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
    </div>
  );
}
