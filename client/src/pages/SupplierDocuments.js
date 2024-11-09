import React, { useState, useEffect } from 'react';

const SupplierDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/documents');
      const documents = await response.json();
      setDocuments(documents);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  return (
    <div>
      <h1>Available Documents</h1>
      <ul>
        {documents.map(doc => (
          <li key={doc._id}>
            <a
              href={`http://localhost:3000/api/v1/documents/download/${doc.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            > 
              {doc.originalName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierDocuments;
