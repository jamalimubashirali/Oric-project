const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name:      { type: String, required: true }, // Full name
  username:  { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  department:{ type: String, required: true }, // e.g., CSE, EE, etc.
  number:    { type: String, required: true }, // Phone number
  role:      { type: String, enum: ['user', 'admin'], default: 'user' },
  approved:  { type: Boolean, default: false },
  liked:     [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  MyResearch:[{ type: mongoose.Schema.Types.ObjectId, ref: 'ResearchSubmission' }],

}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare entered password with hashed one
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
