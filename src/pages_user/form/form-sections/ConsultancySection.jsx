import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const ConsultancySection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Consultancy Contracts Executed through ORIC with Industry, Commerce or Government">
        <div className="mb-4">
          <label className="form-label">Title of Project</label>
          <input 
            type="text" 
            name="consultancyTitle"
            value={formData.consultancyTitle}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter project title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date of Execution</label>
          <DatePicker
            selected={formData.executionDate}
            onChange={(date) => handleDateChange(date, 'executionDate')}
            className="form-input"
            placeholderText="Select execution date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name of PI with Designation, Department</label>
          <input 
            type="text" 
            name="consultancyPiName"
            value={formData.consultancyPiName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter PI details"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Company Details (Name, Country, etc.)</label>
          <textarea 
            name="companyDetails"
            value={formData.companyDetails}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter company details"
            rows="3"
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="form-label">Contract Value (PKR Millions)</label>
          <input 
            type="number" 
            name="contractValue"
            value={formData.contractValue}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter contract value"
            step="0.01"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="form-label">Project Timelines (Start)</label>
            <DatePicker
              selected={formData.projectTimelineStart}
              onChange={(date) => handleDateChange(date, 'projectTimelineStart')}
              className="form-input"
              placeholderText="Select start date"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div>
            <label className="form-label">Project Timelines (End)</label>
            <DatePicker
              selected={formData.projectTimelineEnd}
              onChange={(date) => handleDateChange(date, 'projectTimelineEnd')}
              className="form-input"
              placeholderText="Select end date"
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Type of Consultancy Services</label>
          <input 
            type="text" 
            name="consultancyType"
            value={formData.consultancyType}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Feasibility, Prototype Development, Testing, Analysis etc."
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Key Deliverables out of the Consultancy Contract</label>
          <textarea 
            name="deliverables"
            value={formData.deliverables}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter key deliverables"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">ORIC Percentage (if any)</label>
          <input 
            type="text" 
            name="oricPercentage"
            value={formData.oricPercentage}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter ORIC percentage"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Remarks</label>
          <textarea 
            name="consultancyRemarks"
            value={formData.consultancyRemarks}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter remarks"
            rows="2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Contract Copy (PDF)</label>
          <input 
            type="file" 
            name="consultancyDocuments"
            onChange={(e) => handleFileChange(e, 'consultancyDocuments')}
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

export default ConsultancySection;
