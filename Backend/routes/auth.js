const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Resource = require('../models/Resource');


// Sign Up – note password must be at least 5 characters and include a number
router.post('/signup', async (req, res) => {
  const { name, username, email, password, department, number } = req.body;

  try {
    // Check for existing user by email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({success:false, message: 'User with this email or username already exists.' });
    }

    // Create user (mongoose pre-save will hash the password)
    const user = await User.create({
      name,
      username,
      email,
      password,
      department,
      number
    });

    res.status(201).json({success:true, message: '✅ Account created successfully!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: '❌ Server error while signing up.', error });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }

    if (!user.approved) {
      return res.json({ success: false, message: 'Be patient your account verification is still in process' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }

    console.log('Login successful for user:', user.username);

    // Success
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user, message: 'Login success', success: true });

  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});


router.get('/user/:userid', async (req, res) => {
    // const { email, password } = req.body;
    try {
      const user = await User.findById(req.params.userid ).populate({path:'liked',model:'Resource',})
      if(user ){
        res.json({ user });
      } else {
        res.status(401).json({ message: 'user not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error find user', error });
    }
  });

  router.post('/addtofav', async (req, res) => {
    const {userid,RId} = req.body;
    
    try {
      const user = await User.findById(userid)
      if(user.liked.includes(RId)){

           await  user.updateOne({$pull:{liked:RId}})
    await user.save()
    return res.status(200).json({message:"Rources removed successfully ",user})
      } else {
        console.log('aded')
        await  user.updateOne({$addToSet:{liked:RId}})

            await user.save() 
            return res.status(200).json({message:"Resources added to fav successfully "})
      }
    } catch (error) {
      res.status(500).json({ message: 'Error find user', error });
    }
  });

  router.post('/removefromfav', async (req, res) => {
    const {userid,RId} = req.body;
    
    try {
      const user = await User.findById(userid)
      if(user.liked.includes(RId)){

           await  user.updateOne({$pull:{liked:RId}})
    await user.save()
    return res.status(200).json({message:"Rources removed successfully ",user})
      } else {
        console.log('aded')
        await  user.updateOne({$addToSet:{liked:RId}})

            await user.save() 
            return res.status(200).json({message:"Resources added to fav successfully "})
      }
    } catch (error) {
      res.status(500).json({ message: 'Error find user', error });
    }
  });

  router.post('/delete', async (req, res) => {
    const {RID } = req.body;

    try {

      const resource = await Resource.findOneAndDelete({_id:RID});
    
  
      res.json({ message: 'Resource deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error rejecting resource', error });
    }
  });

  router.put('/makeprivate', async (req, res) => {
    const {RID } = req.body;

    try {

      const resource = await Resource.findByIdAndUpdate(
        RID, 
        { private: true },  // Update the `private` field to `true` (or `false` if needed)
        { new: true }  // Return the updated document
    );
    
  
      res.json({ message: 'Resource is now private' });
    } catch (error) {
      res.status(500).json({ message: 'Error rejecting resource', error });
    }
  });

//   if(user.bookmark.includes(postID)) {
//     await  user.updateOne({$pull:{bookmark:postID}})
//     await user.save()
//     return res.status(200).json({message:"Post removed  bookmarked successfully ",user})

// }else{
//    await  user.updateOne({$addToSet:{bookmark:postID}})
//     await user.save()
//     return res.status(200).json({message:"Post bookmarked successfully ",user})

// }
router.get("/getStudents",  async (req, res) => {
  try {
    const Total_Users = await User.find({ role: "user"}).select("-password").populate({path:'MyResearch',model:'ResearchSubmission'})
    const Total_approved_Users = await User.find({ role: "user" ,approved:true}).select("username email").populate({path:'MyResearch',model:'ResearchSubmission'})
    const Total_pending_Users = await User.find({ role: "user" ,approved:false}).select("username email").populate({path:'MyResearch',model:'ResearchSubmission'})


    res.status(200).json({
      Total_Users,
      Total_approved_Users,
      Total_pending_Users
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

router.post("/getByUser", async (req, res) => {
  try {
    const { userId } = req.body;
    const resources = await Resource.find({ author: userId }).populate({path:'subject',model:'Subject'})
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ error: "Error fetching resources" });
  }
});

router.post("/deleteuser", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId)

    // Delete student resources first
    await Resource.deleteMany({ author: userId });

    // Delete student account
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting student" });
  }
});

router.post("/profile", async (req, res) => {
  const {UserID}=req.body;
 
  try {
    const user = await User.findById(UserID)
    if (!user) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching student data" });
  }
});
module.exports = router;
