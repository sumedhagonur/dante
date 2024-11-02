import React, { useState, useRef } from "react";
import utMapImage from "../images/utmap.png";
function Map() {
  const [utmap, setutmap] = useState(utMapImage);
  const imageRef = useRef(null);

  const handleImageClick = (event) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Calculate percentage
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      console.log(`Clicked at ${xPercent.toFixed(2)}% x ${yPercent.toFixed(2)}%`);
    }
  };

  return (
    <img 
      ref={imageRef}
      src={utmap} 
      onClick={handleImageClick} 
      alt="UT Map" 
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}

export default Map;