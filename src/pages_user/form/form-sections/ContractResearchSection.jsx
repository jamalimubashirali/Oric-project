import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const ContractResearchSection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Contract Research Awarded by Industry or Government Organizations">
        <div className="mb-4">
          <label className="form-label">Thematic Areas and Title of Research Proposal</label>
          <input 
            type="text" 
            name="contractThematicArea"
            value={formData.contractThematicArea}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter thematic area and title"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date of Contract Signed</label>
          <DatePicker
            selected={formData.contractSignedDate}
            onChange={(date) => handleDateChange(date, 'contractSignedDate')}
            className="form-input"
            placeholderText="Select contract signed date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name of PI with Designation, Department</label>
          <input 
            type="text" 
            name="contractPiName"
            value={formData.contractPiName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter PI name with designation and department"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name of Co-PI with Designation, Department & University</label>
          <input 
            type="text" 
            name="contractCoPiName"
            value={formData.contractCoPiName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter Co-PI details (if other than parent HEI)"
          />
        </div>
        
        <div className="mb-4">
          <label className="form-label">Sponsoring Agency Name and Address & Country</label>
          <textarea 
            name="sponsoringAgency"
            value={formData.sponsoringAgency}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter sponsoring agency details"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Scope</label>
          <select 
            name="contractScope" 
            value={formData.contractScope}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select scope</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Counterpart from Industry (address with country)</label>
          <textarea 
            name="industryCounterpart"
            value={formData.industryCounterpart}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter industry counterpart details"
            rows="3"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="form-label">Duration (Start Date)</label>
            <DatePicker
              selected={formData.contractDurationStart}
              onChange={(date) => handleDateChange(date, 'contractDurationStart')}
              className="form-input"
              placeholderText="Select start date"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div>
            <label className="form-label">Duration (End Date)</label>
            <DatePicker
              selected={formData.contractDurationEnd}
              onChange={(date) => handleDateChange(date, 'contractDurationEnd')}
              className="form-input"
              placeholderText="Select end date"
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Total Amount Approved</label>
          <input 
            type="number" 
            name="approvedAmount"
            value={formData.approvedAmount}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter amount in PKR"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Project Expected Deliverables and Outcomes</label>
          <textarea 
            name="projectDeliverables"
            value={formData.projectDeliverables}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Describe expected deliverables and outcomes"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Date of Contract</label>
          <DatePicker
            selected={formData.contractDate}
            onChange={(date) => handleDateChange(date, 'contractDate')}
            className="form-input"
            placeholderText="Select contract date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Contract Research Agreement Copy (PDF)</label>
          <input 
            type="file" 
            name="contractDocuments"
            onChange={(e) => handleFileChange(e, 'contractDocuments')}
            className="file-input"
            accept=".pdf"
            multiple
          />
          <p className="mt-1 text-sm text-neutral-500">Upload contract documents in PDF format</p>
        </div>
      </FormSection>
    </>
  );
};

export default ContractResearchSection;
