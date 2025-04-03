'use client'
 import React, { useEffect } from 'react';
 
 export default function BackgroundContainer({ 
   children, 
   sourceName, 
   iframeSrc 
 }) {
   useEffect(() => {
     // Function to request camera permissions
     const requestCameraPermissions = async () => {
       try {
         // Request camera and microphone access
         await navigator.mediaDevices.getUserMedia({
           video: true,
           audio: true
         });
 
         // If in an iframe, notify parent about permissions
         if (window !== window.parent) {
           window.parent.postMessage({ 
             type: 'PERMISSIONS_OBTAINED' 
           }, '*');
         }
       } catch (error) {
         console.error('Camera permission error:', error);
 
         // Notify parent if in iframe about permission denial
         if (window !== window.parent) {
           window.parent.postMessage({ 
             type: 'PERMISSIONS_DENIED',
             error: error.message 
           }, '*');
         }
       }
     };
 
     // Attempt to get permissions
     requestCameraPermissions();
 
     // Add message listener for permission requests
     const handleMessage = (event) => {
       if (event.data.type === 'REQUEST_PERMISSIONS') {
         requestCameraPermissions();
       }
     };
 
     window.addEventListener('message', handleMessage);
 
     // Cleanup
     return () => {
       window.removeEventListener('message', handleMessage);
     };
   }, []);
 
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
        id="videoFrame"
        src={iframeSrc}
        title="Video Player"
        style={{
          width: '500px',
          height: '700px',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}
        allow="camera; microphone; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
