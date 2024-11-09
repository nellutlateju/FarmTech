// routes/documentRoutes.js

const express = require("express");
const multer = require("multer");
const path = require("path");
const Document = require("../models/Documents");

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../uploads")); // Use "../uploads" to go up one directory and access the uploads folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });

// Admin Route: Upload document
// routes/documentRoutes.js

router.post("/upload", upload.single("document"), async (req, res) => {
    try {
      const doc = new Document({
        filename: req.file.filename,
        originalName: req.file.originalname,
      });
      await doc.save();
  
      res.status(200).json({ message: "File uploaded successfully", file: req.file });
    } catch (error) {
      console.error("Error uploading file:", error);
      // Send a JSON response with error status
      res.status(500).json({ error: "Failed to upload file" });
    }
  });
  

// Supplier Route: Retrieve document list
router.get("/", async (req, res) => {
    try {
      const documents = await Document.find().sort({ date: -1 });
      res.status(200).json(documents);
    } catch (error) {
      console.error("Error fetching documents:", error);
      res.status(500).json({ error: "Failed to fetch documents" });
    }
  });
  
// Optional: Document download route
router.get("/download/:filename", (req, res) => {
  const filepath = path.join(__dirname, "../uploads", req.params.filename);
  res.download(filepath, (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).json({ error: "Failed to download file" });
    }
  });
});

module.exports = router;
