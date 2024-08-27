import React, { useState } from 'react';

export default function SelectPhoto () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const isValidType = ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type);

    if (!isValidType) {
      setUploadMessage('Please select a valid image file (PNG, JPEG, JPG)');
      return;
    }

    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
    setUploadMessage('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select an image to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        body: formData,
      });


    if (response.success) {
      setUploadMessage('Image uploaded successfully!');
      setSelectedFile(null);
      setPreviewURL(null);
    } else {
      setUploadMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div className="image-upload-container text-left font-Inter border-none px-6 py-4 bg-gray-100 w-full rounded">
      <input type="file" accept="image/*" onChange={onFileChange} />
      {previewURL && (
        <img src={previewURL} alt="Preview" className="image-preview" />
      )}
      <button onClick={handleUpload}>Upload Image</button>
      {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
    </div>
  );
};
