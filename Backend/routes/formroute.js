
const cloudinary = require('../config/cloudinary.js');
// import cloudinary from '../config/cloudinary.js'
// import express from 'express'
const express = require('express');
const multer= require('multer')
const  ResearchSubmission  = require('../models/ResearchSubmission.js');
const fs = require('fs');
const path = require('path');
const User =require('../models/User.js')
const mongoose=require('mongoose')
const { protect,adminOnly } = require('../middleware/authMiddleware');
// const authMiddleware= require('../middleware/authMiddleware.js')


const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const fileTypes = /pdf|doc|docx/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Error: File upload only supports PDF and Word documents!'));
  }
});

// Route to handle multi-part form data with file uploads
router.post(
    '/research-submissions',
    upload.fields([
      { name: 'documents', maxCount: 5 },
      { name: 'advocacyDocuments', maxCount: 5 },
      { name: 'linkageDocuments', maxCount: 5 },
      { name: 'contractDocuments', maxCount: 5 },
      { name: 'eventDocuments', maxCount: 5 },
      { name: 'consultancyDocuments', maxCount: 5 }
    ]),
    async (req, res) => {
      try {
        const formData = req.body;
        const author_id = new mongoose.Types.ObjectId(formData.authorid);



        // const user = await User.findById(author_id);

        // console.log(user)

        
  
        const uploadToCloudinary = async (filePath) => {
          try {
            const result = await cloudinary.uploader.upload(filePath, {
              resource_type: 'raw',  // Use 'raw' for non-image files like PDFs or DOCs
  public_id: 'my_public_doc', // Optional: custom public ID
  type: 'upload', // De
              folder: 'research_submissions'
            });
            fs.unlinkSync(filePath);
            return result.secure_url;
          } catch (err) {
            console.error('Cloudinary Upload Error:', err);
            throw new Error('Cloudinary upload failed');
          }
        };
  
        if (req.files && Object.keys(req.files).length > 0) {
          for (const fieldName of Object.keys(req.files)) {
            const fileArray = req.files[fieldName];
            const cloudUrls = [];
  
            for (const file of fileArray) {
              const cloudUrl = await uploadToCloudinary(file.path);
              cloudUrls.push(cloudUrl);
            }
  
            formData[fieldName] = cloudUrls;
          }
        }
  
        const dateFields = [
          'submissionDate', 'durationStart', 'durationEnd',
          'presentationDate', 'mouDate', 'contractSignedDate',
          'contractDurationStart', 'contractDurationEnd', 'contractDate',
          'eventDate', 'executionDate', 'projectTimelineStart',
          'projectTimelineEnd', 'publicationDate',
        ];
  
        dateFields.forEach(field => {
          if (formData[field]) {
            formData[field] = new Date(formData[field]);
          }
        });
  
        const numericFields = [
          'fundingApplied', 'fundingApproved', 'approvedAmount',
          'contractValue'
        ];
  
        numericFields.forEach(field => {
          if (formData[field]) {
            formData[field] = parseFloat(formData[field]);
          }
        });
  
        const newSubmission = new ResearchSubmission(formData);
       
        await newSubmission.save();
        await User.updateOne(
          { _id: author_id },
          { $addToSet: { MyResearch:newSubmission._id  } }

        )
        // user.push({$addtoset:{}})
        
        return res.status(201).json({
          success: true,
          message: 'Research submission saved successfully with Cloudinary URLs',
          data: newSubmission
        });
  
      } catch (error) {
        console.error('Error saving research submission:', error);
  
        if (!res.headersSent) {
          return res.status(500).json({
            success: false,
            message: 'Error saving research submission',
            error: error.message
          });
        }
      }
    }
  );
  

// Route to get all submissions
router.get('/research-submissions',protect,adminOnly, async (req, res) => {
  try {
    const submissions = await ResearchSubmission.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving research submissions',
      error: error.message
    });
  }
});


router.post('/research-delete', protect, adminOnly, async (req, res) => {
  const { _id } = req.body;

  try {
    // Step 1: Find the submission to get author ID
    const submission = await ResearchSubmission.findById(_id);
    if (!submission) {
      return res.status(404).json({ success: false, message: 'Submission not found' });
    }

    const authorId = submission.authorid;

    // Step 2: Remove the submission ID from user's MyResearch array
    await User.findByIdAndUpdate(
      authorId,
      { $pull: { MyResearch: _id } }
    );

    // Step 3: Delete the submission itself
    await ResearchSubmission.findByIdAndDelete(_id);

    // Step 4: Send success response
    res.status(200).json({
      success: true,
      message: 'Research deleted successfully',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting research submission',
      error: error.message
    });
  }
});

// Route to get a single submission by ID
router.get('/research-submissions/:id', async (req, res) => {
  try {
    const submission = await ResearchSubmission.findById(req.params.id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Research submission not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving research submission',
      error: error.message
    });
  }
});


router.get('/userresearch-submissions',protect, async (req, res) => {
  try {
    console.log("fuck",req.user._id)
    const submission = await ResearchSubmission.find({authorid:req.user._id});
    
    
    
    res.status(200).json({
      success: true,
      data: submission
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving research submission',
      error: error.message
    });
  }
});

module.exports = router;