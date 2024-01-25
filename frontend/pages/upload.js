// pages/upload.js
import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  return (
    <div>
      <h1>Find Your Waifu</h1>
      <p>Upload image of your waifu</p>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Upload Image</h2>
        <p>{file ? file.name : 'Drag & drop an image here, or click to upload'}</p>
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default Upload;
