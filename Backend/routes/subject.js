const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Get all subjects (or only those granted access)
router.get('/getallsub', protect, async (req, res) => {
  try {
    const subjects = await Subject.find().populate({path:'teacher',model:'User',})
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subjects', error });
  }
});

// Teacher creates a new subject
router.post('/createsubject', protect, adminOnly, async (req, res) => {
  const { name } = req.body;
  try {
    const subject = await Subject.create({ name, teacher: req.user._id });
    res.json({ message: 'Subject created', subject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subject', error });
  }
});

module.exports = router;
