import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';

const ResearchLinksSection = ({ formData, handleInputChange, handleDateChange, handleFileChange }) => {
  return (
    <>
      <FormSection title="Research Links Established with Other Universities">
        <div className="mb-4">
          <label className="form-label">Type of Linkage</label>
          <input 
            type="text" 
            name="linkageType"
            value={formData.linkageType}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Academic or Research"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Date of MoU/Agreement</label>
          <DatePicker
            selected={formData.mouDate}
            onChange={(date) => handleDateChange(date, 'mouDate')}
            className="form-input"
            placeholderText="Select MoU date"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Linkage Scope</label>
          <select 
            name="linkageScope" 
            value={formData.linkageScope}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select scope</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Name and Address with Country of Host Institution</label>
          <textarea 
            name="hostInstitution"
            value={formData.hostInstitution}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter host institution details"
            rows="3"
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="form-label">Name and Address with Country of Collaborating Agency/Institution</label>
          <textarea 
            name="collaboratingAgency"
            value={formData.collaboratingAgency}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter collaborating agency details"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Field of Study / Research (Broader Areas)</label>
          <input 
            type="text" 
            name="studyField"
            value={formData.studyField}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter field of study/research"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Scope of Collaboration</label>
          <textarea 
            name="collaborationScope"
            value={formData.collaborationScope}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Describe the scope of collaboration"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Salient Features of Linkage</label>
          <textarea 
            name="linkageSalientFeatures"
            value={formData.linkageSalientFeatures}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Describe salient features"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="form-label">Proof of MOU or Research Linkages (PDF)</label>
          <input 
            type="file" 
            name="linkageDocuments"
            onChange={(e) => handleFileChange(e, 'linkageDocuments')}
            className="file-input"
            accept=".pdf"
            multiple
          />
          <p className="mt-1 text-sm text-neutral-500">Upload MOU documents in PDF format</p>
        </div>
      </FormSection>
    </>
  );
};

export default ResearchLinksSection;