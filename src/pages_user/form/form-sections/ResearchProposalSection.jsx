import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const ResearchProposalSection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Research Proposal Information">
        <div className="mb-4">
          <label className="form-label">Proposal Type</label>
          <select 
            name="proposalType" 
            value={formData.proposalType}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select a proposal type</option>
            <option value="HEC National">Research Proposal Submitted to HEC (National)</option>
            <option value="Non-HEC">Research Proposal Submitted to Non HEC (National & International)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Name Of Research Grant</label>
          <input 
            type="text" 
            name="researchGrantName"
            value={formData.researchGrantName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter name of research grant"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date Of Proposal Submission</label>
          <DatePicker
            selected={formData.submissionDate}
            onChange={(date) => handleDateChange(date, 'submissionDate')}
            className="form-input"
            placeholderText="Select submission date"
            dateFormat="MMMM d, yyyy"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Approval Status</label>
          <select 
            name="approvalStatus" 
            value={formData.approvalStatus}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="">Select approval status</option>
            <option value="Approved">Approved</option>
            <option value="Not Approved">Not Approved</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="form-label">Name of PI with Designation</label>
          <input 
            type="text" 
            name="piName"
            value={formData.piName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter PI name with designation"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Thematic Area</label>
          <input 
            type="text" 
            name="thematicArea"
            value={formData.thematicArea}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter thematic area"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Title Of Research Proposal</label>
          <input 
            type="text" 
            name="researchTitle"
            value={formData.researchTitle}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter research proposal title"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="form-label">Duration (Start Date)</label>
            <DatePicker
              selected={formData.durationStart}
              onChange={(date) => handleDateChange(date, 'durationStart')}
              className="form-input"
              placeholderText="Select start date"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
          <div>
            <label className="form-label">Duration (End Date)</label>
            <DatePicker
              selected={formData.durationEnd}
              onChange={(date) => handleDateChange(date, 'durationEnd')}
              className="form-input"
              placeholderText="Select end date"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="form-label">Total Funding Applied</label>
            <input 
              type="number" 
              name="fundingApplied"
              value={formData.fundingApplied}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter amount in PKR"
            />
          </div>
          <div>
            <label className="form-label">Total Funding Approved</label>
            <input 
              type="number" 
              name="fundingApproved"
              value={formData.fundingApproved}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter amount in PKR"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Collaboration Partner (Industry or Academia)</label>
          <input 
            type="text" 
            name="collaborationPartner"
            value={formData.collaborationPartner}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter collaboration partner details"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Proposal and Approval Letter (PDF)</label>
          <input 
            type="file" 
            name="documents"
            onChange={(e) => handleFileChange(e, 'documents')}
            className="file-input"
            accept=".pdf,.doc,.docx"
            multiple
          />
          <p className="mt-1 text-sm text-neutral-500">You can upload up to 5 files (PDF/Word format)</p>
        </div>
      </FormSection>
    </>
  );
};

export default ResearchProposalSection;