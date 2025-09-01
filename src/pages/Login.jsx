import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaUniversity, FaPhone, FaCheck, FaTimes } from 'react-icons/fa';
import { RiArrowRightLine } from 'react-icons/ri';
import logo from '../assets/muetlogo.png';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [step, setStep] = useState(1);
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
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
    return validation.isMUETEmail 
           
        //    validation.passwordsMatch;
  };

 const handleSubmit = async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);
    console.log(res.data.message);

    if (res.data.success) {
      toast.success('Login successful');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      if (res.data.user.role === 'admin') {
        navigate('/Dashboard');
      } else {
        navigate('/UserDashboard');
      }
    } else {
      toast.info(res.data.message); // Handles "Invalid credentials" and "Be patient..." cases
    }

  } catch (error) {
    console.error(error);
    toast.error('An error occurred during login');
  }
};


  return (
    <>
    {/* <ToastContainer/> */}
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001a33] to-[#003366] p-24 mt-4">
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
            
            
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-3/5 p-8 md:p-10">
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">MUET Login</h3>
                  <p className="text-gray-500">Official university credentials required</p>
                </div>

                <div className="space-y-5">
                  {/* Name Field */}
                

                  {/* Username Field */}
                 

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
                      placeholder="Enter Password"
                      className="w-full pl-10 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:ring-0 bg-gray-50 rounded-t-lg transition-all"
                      required
                    />
                  
                  </div>

                  {/* Confirm Password Field */}
                 
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={!canContinue()}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                      !canContinue() 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg shadow-md'
                    }`}
                  >
                    <span>Login</span>
                    <RiArrowRightLine />
                  </motion.button>
                </div>
              </motion.div>
            )}

           
          </AnimatePresence>

          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account create now ?{' '}
            <a  onClick={()=>{
                navigate('/signup')
            }} className="text-blue-600 font-medium hover:underline cursor-pointer">
              Sign up
            </a>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

// export default ProfessionalMUETSignupForm;

export default Login