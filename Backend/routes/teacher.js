const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');
const Notification = require('../models/Notification');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const User = require('../models/User');

// Get pending resource requests for teacher review
router.get('/requests', protect, adminOnly, async (req, res) => {
  try {
    const Total_pending = await Resource.find({ approved: false });
    const Total_accepted = await Resource.find({ approved: true });
    const Total = await Resource.find();


    res.json({Total_pending,Total_accepted,Total });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
});

// Approve resource, award 5 XP to author, send notification
router.post('/approve/:resourceId', protect, adminOnly, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.resourceId);
    if(!resource) return res.status(404).json({ message: 'Resource not found' });
    resource.approved = true;
    await resource.save();
    const user = await User.findById(resource.author);
    await Notification.create({
      user: user._id,
      message: `Your resource "${resource.title}" has been approved. You earned 5 XP points!`
    });
    res.json({ message: 'Resource approved' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving resource', error });
  }
});

// Reject resource and notify student
router.post('/reject/:resourceId', protect, adminOnly, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.resourceId);
    // debugger
    // console.log(resource);

    
    if(!resource) return res.status(404).json({ message: 'Resource not found' });
    const result=await resource.deleteOne()
    await Notification.create({
      user: resource.author,
      message: `Your resource "${resource.title}" has been rejected.`
    });
    // console.log(result)

    res.json({ message: 'Resource rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting resource', error });
  }
});


router.get('/Register-requests', protect, adminOnly, async (req, res) => {
  try {
    const Total_pending = await User.find({ approved: false }).sort({ createdAt: -1 });

    res.json({Total_pending});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
});

router.post('/Register-approve/:studentId', protect, adminOnly, async (req, res) => {
  try {
    const reg = await User.findById(req.params.studentId);
    if(!reg) return res.status(404).json({ message: 'Student not found' });
    reg.approved = true;
    await reg.save();
   
    res.json({ message: 'Reg Request approved' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving resource', error });
  }
});


router.post('/Register-reject/:studentId', protect, adminOnly, async (req, res) => {
  try {
    
    console.log(req.params.studentId)
    const user = await User.findById(req.params.studentId);
    // debugger
    // console.log(resource);

    
    if(!user) return res.status(404).json({ message: 'Student not found' });
    console.log(user)
    const result=await user.deleteOne()

   
  

    res.json({ message: 'User Request rejected' });
  } catch (error) {
    res.status(500).json({ message: 'Error rejecting user', error });
  }
});
module.exports = router;
