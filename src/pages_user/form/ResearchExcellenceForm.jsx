import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormSection from './FormSection';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';

// Form sections
import ResearchProposalSection from './form-sections/ResearchProposalSection';
import PolicyAdvocacySection from './form-sections/PolicyAdvocacySection';
import ResearchLinksSection from './form-sections/ResearchLinksSection';
import ContractResearchSection from './form-sections/ContractResearchSection';
import CivicEngagementSection from './form-sections/CivicEngagementSection';
import ConsultancySection from './form-sections/ConsultancySection';
import ResearchPapersSection from './form-sections/ResearchPapersSection';
import SidebarWithNavbar from '../../components/Sidebar';

const ResearchExcellenceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
   const [sidebarOpen, setSidebarOpen] = useState(false); // Closed by default on mobile
  const totalSteps = 7;
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user._id)


  // Initialize form state
  const [formData, setFormData] = useState({
    // Research Proposal Section
    proposalType: '',
    researchGrantName: '',
    submissionDate: '',
    approvalStatus: '',
    piName: '',
    thematicArea: '',
    researchTitle: '',
    durationStart: '',
    durationEnd: '',
    fundingApplied: '',
    fundingApproved: '',
    collaborationPartner: '',
    documents: [],
    
    // Policy Advocacy Section
    governmentBody: '',
    presentationDate: '',
    facultyName: '',
    advocacyArea: '',
    advocacyDocuments: [],
    
    // Research Links Section
    linkageType: '',
    mouDate: '',
    linkageScope: '',
    hostInstitution: '',
    collaboratingAgency: '',
    studyField: '',
    collaborationScope: '',
    linkageSalientFeatures: '',
    linkageDocuments: [],
    
    // Contract Research Section
    contractThematicArea: '',
    contractSignedDate: '',
    contractPiName: '',
    contractCoPiName: '',
    sponsoringAgency: '',
    contractScope: '',
    industryCounterpart: '',
    contractDurationStart: '',
    contractDurationEnd: '',
    approvedAmount: '',
    projectDeliverables: '',
    contractDate: '',
    contractDocuments: [],
    
    // Civic Engagement Section
    eventTitle: '',
    eventDate: null,
    communityInvolved: '',
    eventOutcome: '',
    collaborationDeveloped: '',
    csosEngaged: '',
    sponsoringAgencyName: '',
    eventArrangement: '',
    disseminationMaterial: '',
    eventRemarks: '',
    eventDocuments: [],
    
    // Consultancy Section
    consultancyTitle: '',
    executionDate: null,
    consultancyPiName: '',
    companyDetails: '',
    contractValue: '',
    projectTimelineStart: null,
    projectTimelineEnd: null,
    consultancyType: '',
    deliverables: '',
    oricPercentage: '',
    consultancyRemarks: '',
    consultancyDocuments: [],
    
    // Research Papers Section
    paperTitle: '',
    authors: '',
    category: '',
    publicationDate: null,
    authorid:user._id
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleDateChange = (date, fieldName) => {
  //   setFormData({ ...formData, [fieldName]: date });
  
    
const handleDateChange = (date, fieldName) => {
  // Format the date to 'MM/DD/YYYY' format
  const formattedDate = date ? format(date, 'MM/dd/yyyy') : null;
  setFormData({ ...formData, [fieldName]: formattedDate });
  console.log(date,fieldName)
};
  // };

  const handleFileChange = (e, fieldName) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, [fieldName]: [...(formData[fieldName] || []), ...files] });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    try {
      // In a production environment, we would use FormData to handle file uploads
      const formDataToSend = new FormData();
      
      // Append all form fields to formData
      Object.keys(formData).forEach(key => {
        if (key.includes('Documents')) {
          // Handle file arrays
          formData[key].forEach(file => {
            formDataToSend.append(key, file);
          });
        } else if (formData[key] instanceof Date) {
          // Handle dates
          formDataToSend.append(key, formData[key].toISOString());
        } else {
          // Handle regular fields
          formDataToSend.append(key, formData[key]);
        }

      });

      // In this demo, we're not making an actual API call to avoid setup requirements
      // In a real environment, uncomment this code and point it to your backend
      
      
      const response = await axios.post('http://localhost:5000/api/submitform/research-submissions', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    // console.log("",response)

      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      
      toast.success('Research excellence data submitted successfully!');
      
      // Reset form after successful submission
      // setFormData({...initialFormState});
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ResearchProposalSection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 2:
        return (
          <PolicyAdvocacySection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 3:
        return (
          <ResearchLinksSection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 4:
        return (
          <ContractResearchSection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 5:
        return (
          <CivicEngagementSection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 6:
        return (
          <ConsultancySection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
            handleFileChange={handleFileChange}
          />
        );
      case 7:
        return (
          <ResearchPapersSection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            handleDateChange={handleDateChange}
          />
        );
      default:
        return null;
    }
  };

  return (<>
<div className='flex max-w-full  bg-white '>
<SidebarWithNavbar  
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
    <div className=" mx-auto rounded-lg  p-20">
      <ToastContainer position="top-right" autoClose={5000} />
     
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-primary-800">
            Step {currentStep} of {totalSteps}
          </h2>
          <div className="text-sm text-neutral-500">
            {currentStep === 1 && "Research Proposal Information"}
            {currentStep === 2 && "Policy Advocacy"}
            {currentStep === 3 && "Research Links"}
            {currentStep === 4 && "Contract Research"}
            {currentStep === 5 && "Civic Engagement"}
            {currentStep === 6 && "Consultancy Contracts"}
            {currentStep === 7 && "Research Papers"}
          </div>
        </div>
        
        <div className="w-full bg-neutral-200 rounded-full h-2.5">
          <div 
            className="bg-primary-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>

        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="btn-secondary"
              disabled={isSubmitting}
            >
              Previous
            </button>
          )}
          
          <div className="ml-auto">
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default ResearchExcellenceForm;