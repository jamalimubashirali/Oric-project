import React from 'react';
import FormSection from '../FormSection';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns'; // Import date-fns for formatting

const ResearchPapersSection = ({ formData, handleInputChange, handleDateChange }) => {

  const handleDateChangeWrapper = (date, fieldName) => {
    // If the date is selected, format it to 'yyyy-MM-dd' format
    const formattedDate = date ? format(date, 'yyyy-MM-dd') : null;
    handleDateChange(formattedDate, fieldName); // Update the date in the parent component state
  };

  return (
    <>
      <FormSection title="Research Papers Published in W, X and Y Category">
        <div className="mb-4">
          <label className="form-label">Title of Research</label>
          <input 
            type="text" 
            name="paperTitle"
            value={formData.paperTitle}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter research paper title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Authors</label>
          <input 
            type="text" 
            name="authors"
            value={formData.authors}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter authors' names"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Category</label>
          <select 
            name="category" 
            value={formData.category}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select category</option>
            <option value="W">W</option>
            <option value="X">X</option>
            <option value="Y">Y</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Date of Publication</label>
          <DatePicker
            selected={formData.publicationDate ? new Date(formData.publicationDate) : null} // Ensure it's a valid date
            onChange={(date) => handleDateChangeWrapper(date, 'publicationDate')}
            className="form-input"
            placeholderText="Select publication date"
            dateFormat="MMMM d, yyyy" // Display format (but will save in 'yyyy-MM-dd')
          />
        </div>
      </FormSection>
    </>
  );
};

export default ResearchPapersSection;
