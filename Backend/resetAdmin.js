const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Update this path if your User model is elsewhere
const User = require('./models/User');

require('dotenv').config();

async function resetAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  // Delete all admins
  await User.deleteMany({ role: 'admin' });

  // Create new admin
  const admin = new User({
    email: 'admin@muet.edu.pk',
    password: 'admin',
    role: 'admin',
    name: 'Admin', // Add other required fields as per your schema
    username: 'admin',
    department: 'Administration/ORIC Office',
    number: '1234567890', // Example phone number, change as needed
    approved: true // Assuming admin accounts are always approved
  });

  await admin.save();
  console.log('Admin reset complete.');
  mongoose.disconnect();
}

resetAdmin().catch(err => {
  console.error(err);
  mongoose.disconnect();
});