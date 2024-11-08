// // App.js
// import React, { useState } from 'react';
// // import './App.css';

// function App() {
//   // State variables for selected options
//   const [crop, setCrop] = useState('');
//   const [insect, setInsect] = useState('');
//   const [images, setImages] = useState([]);
//   const [availableInsects, setAvailableInsects] = useState([]);
//   const [availableImages, setAvailableImages] = useState([]);

//   // Hardcoded crops, insects, and image options
//   const cropOptions = ['Wheat', 'Rice', 'Corn'];
  
//   const insectOptions = {
//     Wheat: ['Aphids', 'Rust Fungus', 'Armyworm'],
//     Rice: ['Brown Plant Hopper', 'Rice Blast', 'Stem Borer'],
//     Corn: ['Corn Borer', 'Leaf Blight', 'Cutworm']
//   };
  
//   const imageOptions = {
//     Aphids: ['Yellow spots', 'Curled leaves', 'Sticky residue'],
//     RustFungus: ['Rust-colored spots', 'Wilting'],
//     Armyworm: ['Chewed leaves', 'Stem damage'],
//     BrownPlantHopper: ['Yellowing leaves', 'Stunted growth'],
//     RiceBlast: ['Gray spots', 'Lesions on leaves'],
//     StemBorer: ['Holes in stem', 'Broken stems'],
//     CornBorer: ['Holes in leaves', 'Wilted plants'],
//     LeafBlight: ['Leaf spots', 'Yellowing edges'],
//     Cutworm: ['Cut plants', 'Fallen stems']
//   };

//   // Handle crop selection
//   const handleCropChange = (e) => {
//     const selectedCrop = e.target.value;
//     setCrop(selectedCrop);
//     setInsect(''); // Reset insect when crop changes
//     setAvailableInsects(insectOptions[selectedCrop] || []);
//     setImages([]); // Reset images
//     setAvailableImages([]);
//   };

//   // Handle insect selection
//   const handleInsectChange = (e) => {
//     const selectedInsect = e.target.value;
//     setInsect(selectedInsect);
//     setAvailableImages(imageOptions[selectedInsect] || []);
//   };

//   // Handle image selection
//   const handleImageChange = (e) => {
//     const selectedImages = Array.from(e.target.selectedOptions, option => option.value);
//     setImages(selectedImages);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Create a payload to send to backend
//     const payload = {
//       crop,
//       insect,
//       images
//     };
    
//     console.log("Submitting data:", payload);

//     // Send the payload to backend
//     // You can use fetch or axios to send a POST request here
//     fetch('/predict-disease', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Predicted disease:', data.disease);
//       // Display the predicted disease result to the user
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Plant Disease Prediction</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Crop Selection */}
//         <div>
//           <label>Select Crop:</label>
//           <select value={crop} onChange={handleCropChange}>
//             <option value="">-- Select Crop --</option>
//             {cropOptions.map((crop) => (
//               <option key={crop} value={crop}>
//                 {crop}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Insect Selection */}
//         {availableInsects.length > 0 && (
//           <div>
//             <label>Select Insect:</label>
//             <select value={insect} onChange={handleInsectChange}>
//               <option value="">-- Select Insect --</option>
//               {availableInsects.map((insect) => (
//                 <option key={insect} value={insect}>
//                   {insect}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Image Selection */}
//         {availableImages.length > 0 && (
//           <div>
//             <label>Select Images:</label>
//             <select multiple={true} value={images} onChange={handleImageChange}>
//               {availableImages.map((image) => (
//                 <option key={image} value={image}>
//                   {image}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Submit Button */}
//         <div>
//           <button type="submit">Predict Disease</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;




// // DiseasePrediction.js
// import React, { useState } from 'react';
// import './DiseasePrediction.css';


// function DiseasePrediction() {
//   const [crop, setCrop] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [disease, setDisease] = useState('');
//   const [availableImages, setAvailableImages] = useState([]);

//   // Hardcoded crops and image options with file paths
//   const cropOptions = ['Wheat', 'Rice', 'Corn'];

//   const imageOptions = {
//     Wheat: [
//       { image: 'Yellow spots', filePath: '../images/diseasepredict/yellowspot.jpeg', disease: 'Aphids' },
//       { image: 'Curled leaves', filePath: '/images/wheat/curled_leaves.jpg', disease: 'Aphids' },
//       { image: 'Rust-colored spots', filePath: '/images/wheat/rust_colored_spots.jpg', disease: 'Rust Fungus' },
//       { image: 'Chewed leaves', filePath: '/images/wheat/chewed_leaves.jpg', disease: 'Armyworm' }
//     ],
//     Rice: [
//       { image: 'Yellowing leaves', filePath: '/images/rice/yellowing_leaves.jpg', disease: 'Brown Plant Hopper' },
//       { image: 'Gray spots', filePath: '/images/rice/gray_spots.jpg', disease: 'Rice Blast' },
//       { image: 'Holes in stem', filePath: '/images/rice/holes_in_stem.jpg', disease: 'Stem Borer' }
//     ],
//     Corn: [
//       { image: 'Holes in leaves', filePath: '/images/corn/holes_in_leaves.jpg', disease: 'Corn Borer' },
//       { image: 'Leaf spots', filePath: '/images/corn/leaf_spots.jpg', disease: 'Leaf Blight' },
//       { image: 'Cut plants', filePath: '/images/corn/cut_plants.jpg', disease: 'Cutworm' }
//     ]
//   };

//   // Handle crop selection
//   const handleCropChange = (e) => {
//     const selectedCrop = e.target.value;
//     setCrop(selectedCrop);
//     setAvailableImages(imageOptions[selectedCrop] || []);
//     setSelectedImage(null); // Reset selected image
//     setDisease(''); // Reset disease
//   };

//   // Handle image selection by clicking the image
//   const handleImageClick = (imageObj) => {
//     setSelectedImage(imageObj.filePath);
//     setDisease(imageObj.disease);
//   };

//   return (
//     <div className="DiseasePrediction">
//       <h1>Plant Disease Prediction</h1>
      
//       {/* Crop Selection */}
//       <div>
//         <label>Select Crop:</label>
//         <select value={crop} onChange={handleCropChange}>
//           <option value="">-- Select Crop --</option>
//           {cropOptions.map((crop) => (
//             <option key={crop} value={crop}>
//               {crop}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Image Selection */}
//       {availableImages.length > 0 && (
//         <div>
//           <h2>Select Image:</h2>
//           <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
//             {availableImages.map((imgObj) => (
//               <img
//                 key={imgObj.image}
//                 src={imgObj.filePath}
//                 alt={imgObj.image}
//                 style={{ width: '150px', cursor: 'pointer', border: selectedImage === imgObj.filePath ? '3px solid blue' : '1px solid gray' }}
//                 onClick={() => handleImageClick(imgObj)}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Display Disease */}
//       {disease && (
//         <div>
//           <h3>Predicted Disease: {disease}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DiseasePrediction;



import React, { useState } from 'react';
import './DiseasePrediction.css';

// Define crop options and images (without full paths)
const cropOptions = ['Wheat', 'Rice', 'Corn'];

const imageOptions = {
  Wheat: [
    { image: 'Yellow spots', fileName: 'yellowspot.jpeg', disease: 'Aphids' },
    { image: 'Curled leaves', fileName: 'Curled leaves.jpeg', disease: 'Aphids' },
    { image: 'Rust-colored spots', fileName: 'Rust-colored spots.jpeg', disease: 'Rust Fungus' },
    { image: 'Chewed leaves', fileName: 'Chewed leaves.jpeg', disease: 'Armyworm' }
  ],
  // Add Rice and Corn images in similar structure as Wheat
};

function DiseasePrediction() {
  const [crop, setCrop] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [disease, setDisease] = useState('');
  const [availableImages, setAvailableImages] = useState([]);

  // Handle crop selection
  const handleCropChange = (e) => {
    const selectedCrop = e.target.value;
    setCrop(selectedCrop);
    setAvailableImages(imageOptions[selectedCrop] || []);
    setSelectedImage(null); // Reset selected image
    setDisease(''); // Reset disease
  };

  // Handle image selection by clicking the image
  const handleImageClick = (imageObj) => {
    setSelectedImage(imageObj.fileName);
    setDisease(imageObj.disease);
  };

  return (
    <div className="DiseasePrediction">
      <h1>Plant Disease Prediction</h1>
      
      {/* Crop Selection */}
      <div>
        <label>Select Crop:</label>
        <select value={crop} onChange={handleCropChange}>
          <option value="">-- Select Crop --</option>
          {cropOptions.map((crop) => (
            <option key={crop} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {/* Image Selection */}
      {availableImages.length > 0 && (
        <div>
          <h2>Select Image:</h2>
          <div className="image-grid">
            {availableImages.map((imgObj) => (
              <div 
                key={imgObj.image} 
                className={`image-container ${selectedImage === imgObj.fileName ? 'selected' : ''}`}
                onClick={() => handleImageClick(imgObj)}
              >
                <img 
                  src={`./diseasepredict/${crop.toLowerCase()}/${imgObj.fileName}`} 
                  alt={imgObj.image} 
                />
                <p>{imgObj.image}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display Disease */}
      {disease && (
        <div>
          <h3>Predicted Disease: {disease}</h3>
        </div>
      )}
    </div>
  );
}

export default DiseasePrediction;
