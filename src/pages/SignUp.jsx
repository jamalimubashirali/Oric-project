import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaUniversity, FaPhone, FaCheck, FaTimes } from 'react-icons/fa';
import { RiArrowRightLine } from 'react-icons/ri';
import logo from '../assets/muetlogo.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaCheckCircle, FaClock } from 'react-icons/fa';

const ProfessionalMUETSignupForm = () => {

  const [showPopup, setShowPopup] = useState(true);
  const [step, setStep] = useState(1);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    department: '',
    number: '',
    password: '',
    confirmPassword: ''
  });

  const [validation, setValidation] = useState({
    passwordStrength: { score: 0, message: '', isValid: false },
    isMUETEmail: false,
    passwordsMatch: false
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate email domain
    if (name === 'email') {
      const isMUET = value.endsWith('@muet.edu.pk') || value.endsWith('@faculty.muet.edu.pk');
      setValidation(prev => ({
        ...prev,
        isMUETEmail: isMUET
      }));
    }

    // Password validation
    if (name === 'password') {
      validatePassword(value);
    }

    // Confirm password match
    if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
      setValidation(prev => ({
        ...prev,
        passwordsMatch: formData.password === value
      }));
    }
  };

  const validatePassword = (password) => {
    let score = 0;
    let messages = [];
    
    if (password.length >= 8) score++;
    else messages.push("8+ characters");
    
    if (/[A-Z]/.test(password)) score++;
    else messages.push("uppercase letter");
    
    if (/[a-z]/.test(password)) score++;
    else messages.push("lowercase letter");
    
    if (/\d/.test(password)) score++;
    else messages.push("number");
    
    if (/[^A-Za-z0-9]/.test(password)) score++;
    else messages.push("special character");

    setValidation(prev => ({
      ...prev,
      passwordStrength: {
        score,
        message: messages.length ? `Needs: ${messages.join(', ')}` : 'Strong password',
        isValid: score >= 4
      }
    }));
  };

  const canContinue = () => {
    return validation.isMUETEmail && 
           validation.passwordStrength.isValid && 
           validation.passwordsMatch;
  };

  const handleSubmit = async () => {
    // e.preventDefault();
 
    try {
    
      const res=await axios.post('http://localhost:5000/api/auth/signup',formData)
      // console.log(res.data)

     if(res.data.success){
      toast.success('Wait until your data is confirmed by admin')
      setFormData('')
      navigate('/')
     }
    // await login(email, password);
    // const user = localStorage.getItem("user"); // Ensure user data is properly parsed
    // if (user?.role === "teacher") {
    //   navigate("/teacher-dashboard");
    // } else {
    //   navigate("/");
    // }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001a33] to-[#003366] p-24 mt-4">
      {/* Enhanced Popup Modal */}
<AnimatePresence>
  {showPopup && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md border border-blue-100"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center">
            <FaInfoCircle className="text-blue-600 text-xl" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-8">
          <div className="flex items-center mb-4">
            <img 
              src={logo} 
              alt="MUET Logo" 
              className="w-12 h-12 mr-3 object-contain"
            />
            <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Registration Notice
            </h3>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaCheckCircle className="text-green-500" />
              </div>
              <p className="ml-3">
                <span className="font-semibold">Only MUET faculty</span> can register (@muet.edu.pk or @faculty.muet.edu.pk)
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaClock className="text-blue-500" />
              </div>
              <p className="ml-3">
                <span className="font-semibold">Admin approval required</span> (usually within 24 hours)
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FaLock className="text-amber-500" />
              </div>
              <p className="ml-3">
                <span className="font-semibold">Secure portal</span> for authorized faculty members only
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
            <motion.button
              onClick={() => setShowPopup(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              I Understand
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Premium Side Panel */}
        <div className="hidden md:flex md:w-2/5 bg-gradient-to-b from-blue-700 to-cyan-600 relative overflow-hidden items-center justify-center p-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10" />
          
          <div className="relative z-10 text-center">
            <div className="w-24 h-24 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
              <img 
                src={logo}
                alt="MUET Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">MUET ORIC</h2>
            <p className="text-blue-100 text-lg mb-8">Research & Innovation Portal</p>
            
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all ${
                    step >= i 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'bg-white/10 text-white border border-white/20'
                  }`}>
                    {i}
                  </div>
                  <span className={`text-lg font-medium ${
                    step >= i ? 'text-white' : 'text-blue-100/70'
                  }`}>
                    {i === 1 ? 'Account Setup' : 'University Info'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-4/5 p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">MUET Registration</h3>
                  <p className="text-gray-500">Official university credentials required</p>
                </div>

                <div className="space-y-5">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaUser />
                    </div>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                  </div>

                  {/* Username Field */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaUser />
                    </div>
                    <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      type="text"
                      placeholder="Username"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                  </div>

                  {/* Email Field with MUET Validation */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaEnvelope />
                    </div>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="MUET Email (@muet.edu.pk)"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                    {formData.email && (
                      <div className="mt-1 flex items-center">
                        {validation.isMUETEmail ? (
                          <>
                            <FaCheck className="text-green-500 mr-1" />
                            <span className="text-xs text-green-500">Valid MUET email</span>
                          </>
                        ) : (
                          <>
                            <FaTimes className="text-red-500 mr-1" />
                            <span className="text-xs text-red-500">Must be @muet.edu.pk or @faculty.muet.edu.pk</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaLock />
                    </div>
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="Create Password"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs font-medium ${
                            validation.passwordStrength.score < 2 ? 'text-red-500' :
                            validation.passwordStrength.score < 4 ? 'text-yellow-500' : 'text-green-500'
                          }`}>
                            {validation.passwordStrength.message}
                          </span>
                          <span className="text-xs">
                            Strength: {validation.passwordStrength.score}/5
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${
                              validation.passwordStrength.score < 2 ? 'bg-red-500' :
                              validation.passwordStrength.score < 4 ? 'bg-yellow-500' : 'bg-green-500'
                            }`} 
                            style={{ width: `${(validation.passwordStrength.score / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaLock />
                    </div>
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                    {formData.confirmPassword && (
                      <div className="mt-1 flex items-center">
                        {validation.passwordsMatch ? (
                          <>
                            <FaCheck className="text-green-500 mr-1" />
                            <span className="text-xs text-green-500">Passwords match</span>
                          </>
                        ) : (
                          <>
                            <FaTimes className="text-red-500 mr-1" />
                            <span className="text-xs text-red-500">Passwords don't match</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={nextStep}
                    disabled={!canContinue()}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                      !canContinue() 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg shadow-md'
                    }`}
                  >
                    <span>Continue</span>
                    <RiArrowRightLine />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Department Information</h3>
                  <p className="text-gray-500">Verify your MUET affiliation</p>
                </div>

                <div className="space-y-5">
                  {/* Department Select */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaUniversity />
                    </div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg appearance-none transition-all"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="cse">Computer Systems Engineering</option>
                      <option value="ee">Electrical Engineering</option>
                      <option value="me">Mechanical Engineering</option>
                      <option value="ce">Civil Engineering</option>
                      <option value="chem">Chemical Engineering</option>
                      <option value="petroleum">Petroleum Engineering</option>
                      <option value="metallurgy">Metallurgy Engineering</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <FaPhone />
                    </div>
                    <input
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="pt-2">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <motion.button
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Back
                  </motion.button>
                  <motion.button
                  onClick={()=>handleSubmit()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium hover:shadow-lg transition-all shadow-md"
                  >
                    Complete Registration
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a  onClick={()=>{
                navigate('/login')
            }}className="text-blue-600 font-medium hover:underline cursor-pointer">
              Sign in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfessionalMUETSignupForm;