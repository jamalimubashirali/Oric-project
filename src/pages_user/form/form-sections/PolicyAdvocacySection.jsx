import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const PolicyAdvocacySection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Policy Advocacy or Case Studies Presented to Government Department">
        <div className="mb-4">
          <label className="form-label">Name of Government Body Presented</label>
          <input 
            type="text" 
            name="governmentBody"
            value={formData?.governmentBody || ''}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter government body name"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date Of Presentation</label>
          <DatePicker
            selected={formData?.presentationDate || new Date()} // Default to current date if not present
            onChange={(date) => handleDateChange(date, 'presentationDate')}
            className="form-input"
            placeholderText="Select presentation date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name With Faculty</label>
          <input 
            type="text" 
            name="facultyName"
            value={formData.facultyName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter faculty name"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Area Advocated</label>
          <select 
            name="advocacyArea" 
            value={formData.advocacyArea}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select advocacy area</option>
            <option value="Technology">Technology</option>
            <option value="Law And Order">Law And Order</option>
            <option value="Economic Development">Economic Development</option>
            <option value="Social Progress">Social Progress</option>
            <option value="Technology Advancement">Technology Advancement</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="form-label">Proof Of Advocacy (PDF/Word)</label>
          <input 
            type="file" 
            name="advocacyDocuments"
            onChange={(e) => handleFileChange(e, 'advocacyDocuments')}
            className="file-input"
            accept=".pdf,.doc,.docx"
            multiple
          />
          <p className="mt-1 text-sm text-neutral-500">Upload supporting documents in PDF or Word format</p>
        </div>
      </FormSection>
    </>
  );
};

export default PolicyAdvocacySection;
