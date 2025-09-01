import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const CivicEngagementSection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Civic Engagement Events / Initiatives on Issues of Public Concern">
        <div className="mb-4">
          <label className="form-label">Title of Event / Initiative</label>
          <input 
            type="text" 
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter event title"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date of Event</label>
          <DatePicker
            selected={formData.eventDate}
            onChange={(date) => handleDateChange(date, 'eventDate')}
            className="form-input"
            placeholderText="Select event date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Component of community involved / addressed to</label>
          <input 
            type="text" 
            name="communityInvolved"
            value={formData.communityInvolved}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter community components"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Outcome (Case study, Policy advice or relevant)</label>
          <textarea 
            name="eventOutcome"
            value={formData.eventOutcome}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Describe the outcome"
            rows="3"
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="form-label">Collaboration developed (local authorities, government department)</label>
          <input 
            type="text" 
            name="collaborationDeveloped"
            value={formData.collaborationDeveloped}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter collaborations developed"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name the CSOs (Civil Society Organizations)/ NGOs engaged with</label>
          <input 
            type="text" 
            name="csosEngaged"
            value={formData.csosEngaged}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter engaged organizations"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Name of sponsoring agency (Grant Value/ Sponsors)</label>
          <input 
            type="text" 
            name="sponsoringAgencyName"
            value={formData.sponsoringAgencyName}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter sponsoring agency details"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Will be Arranged/ Participated</label>
          <input 
            type="text" 
            name="eventArrangement"
            value={formData.eventArrangement}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter arrangement details"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Dissemination/ outcome Material/ Literature</label>
          <input 
            type="text" 
            name="disseminationMaterial"
            value={formData.disseminationMaterial}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter dissemination details (Brochure, report, web link, etc.)"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Remarks</label>
          <textarea 
            name="eventRemarks"
            value={formData.eventRemarks}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter any additional remarks"
            rows="2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Brief Event Report / Brochures (PDF)</label>
          <input 
            type="file" 
            name="eventDocuments"
            onChange={(e) => handleFileChange(e, 'eventDocuments')}
            className="file-input"
            accept=".pdf,.doc,.docx"
            multiple
          />
          <p className="mt-1 text-sm text-neutral-500">Upload event documents in PDF/Word format</p>
        </div>
      </FormSection>
    </>
  );
};

export default CivicEngagementSection;