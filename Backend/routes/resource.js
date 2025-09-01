// backend/routes/resource.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const streamifier = require('streamifier');
const cloudinary = require('../config/cloudinary');
const Resource = require('../models/Resource');
const Quiz = require('../models/Quiz');
const { protect } = require('../middleware/authMiddleware');

// Use memory storage so the file is kept in a buffer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files are allowed!'), false);
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 } // Limit: 5MB
});

router.post("/upload", protect, upload.single("file"), async (req, res) => {
  try {
    const { title, comment, subject, shareRequest, } = req.body;

    // Validate file presence
    if (!req.file) {
      return res.status(400).json({ message: "File is required!" });
    }

    // Validate file type (only PDFs allowed)
    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF files are allowed!" });
    }

    // Upload file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "study_vault", resource_type: "raw", access_mode: "public" },
        (error, resData) => (error ? reject(error) : resolve(resData))
      );
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    // Create a new resource in the database
    const resource = await Resource.create({
      title,
      comment,
      fileUrl: result.secure_url,
      fileType: req.file.mimetype,
      subject,
      author: req.user._id,
      approved: shareRequest === "true" ? false : true,
      private: false, // default value
    });

    // Handle Quiz Creation if Enabled
  

    res.status(201).json({
      message: "Resource uploaded successfully!",
      resource,
    
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});
router.get('/grouped', protect, async (req, res) => {
  try {
    // Fetch all resources, including subject and author details
    const resources = await Resource.find({approved:true})
      .populate('subject')
      .populate('quiz')        // So we can access subject.name
      .populate('author', 'username'); // e.g. author.username

    if(resources){
      res.json(resources)
    } 
      // res.status(200).json({ message: 'No resources found' });
  } catch (error) {
    console.error('Error fetching grouped resources:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get approved resources by subject
router.get('/subject/:subjectId', protect, async (req, res) => {
  try {
    const resources = await Resource.find({ subject: req.params.subjectId, approved: true });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
});

// Like a resource
router.post('/:id/like', protect, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if(resource){
      resource.likes += 1;
      await resource.save();
      res.json({ message: 'Resource liked', likes: resource.likes });
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error liking resource', error });
  }
});
router.get("/allres", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources" });
  }
});

router.post("/mycreated", async (req, res) => {
  const {userid}=req.body
  // console.log(userid)

  try {
    const resources = await Resource.find({author:userid,approved:true}).populate('subject')
    // console.log(resources)
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources" });
  }
});

router.post("/togglePrivacy", async (req, res) => {
  try {
    const { RID, private } = req.body;
    const updatedResource = await Resource.findByIdAndUpdate(
      RID,
      { private: private }, // Update the `private` field
      { new: true }
    );
    res.json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: "Error updating privacy status", error });
  }
});




module.exports = router;
