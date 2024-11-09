import React, { useState } from 'react';

const AdminUpload = () => {
  const [message, setMessage] = useState('');

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("document", e.target.elements.document.files[0]);
    // /api/v1/documents
    try {
      const response = await fetch('http://localhost:3000/api/v1/documents/upload', {
        method: 'POST',
        body: formData,
      });
  
      // Check if the response is successful and JSON-formatted
      if (!response.ok) {
        // If server returns an error status, display the status and text
        const errorText = await response.text();
        console.error("Server error:", errorText);
        setMessage(`Upload failed: ${response.status} - ${response.statusText}`);
      } else {
        const result = await response.json();
        setMessage(result.message || 'File uploaded successfully');
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage('Upload failed: Network error or server issue');
    }
  };
  

  return (
    <div>
      <h1>Admin Document Upload</h1>
      <form onSubmit={handleFileUpload} encType="multipart/form-data">
        <input type="file" name="document" required />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AdminUpload;
