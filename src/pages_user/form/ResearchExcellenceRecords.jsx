import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import SidebarWithNavbar from '../../components/Sidebar';
import { FaTrash, FaEye, FaSearch, FaFilter } from "react-icons/fa";

const ResearchExcellenceRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedRecord, setExpandedRecord] = useState(null);
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/submitform/research-submissions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRecords(response.data.data);
        // console.log(response.data.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching records:', error);
        toast.error('Failed to fetch records. Please try again.');
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  const toggleExpandRecord = (id) => {
    if (expandedRecord === id) {
      setExpandedRecord(null);
    } else {
      setExpandedRecord(id);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString; // Return as-is if formatting fails
    }
  };
  const handledelete = async (_id) => {
    try {
      const response = await axios.post('http://localhost:5000/api/submitform/research-delete', { _id }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // 👇 Filter out the deleted record
      setRecords(prevRecords => prevRecords.filter(record => record._id !== _id));

      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting record:', error);
      toast.error('Failed to delete record. Please try again.');
      setLoading(false);
    }
  };


  const renderRecordDetails = (record) => {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        {/* Research Proposal Section */}
        {record.researchTitle && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Research Proposal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Title:</span> {record.researchTitle}</p>
              <p><span className="font-medium">Type:</span> {record.proposalType}</p>
              <p><span className="font-medium">Grant Name:</span> {record.researchGrantName}</p>
              <p><span className="font-medium">Submission Date:</span> {formatDate(record.submissionDate)}</p>
              <p><span className="font-medium">Approval Status:</span> {record.approvalStatus}</p>
              <p><span className="font-medium">PI Name:</span> {record.piName}</p>
              <p><span className="font-medium">Thematic Area:</span> {record.thematicArea}</p>
              <p><span className="font-medium">Duration:</span> {formatDate(record.durationStart)} to {formatDate(record.durationEnd)}</p>
              <p><span className="font-medium">Funding Applied:</span> {record.fundingApplied}</p>
              <p><span className="font-medium">Funding Approved:</span> {record.fundingApproved}</p>
              <p><span className="font-medium">Collaboration Partner:</span> {record.collaborationPartner}</p>
            </div>
          </div>
        )}

        {/* Policy Advocacy Section */}
        {record.governmentBody && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Policy Advocacy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Government Body:</span> {record.governmentBody}</p>
              <p><span className="font-medium">Presentation Date:</span> {formatDate(record.presentationDate)}</p>
              <p><span className="font-medium">Faculty Name:</span> {record.facultyName}</p>
              <p><span className="font-medium">Advocacy Area:</span> {record.advocacyArea}</p>
            </div>
          </div>
        )}

        {/* Research Links Section */}
        {record.linkageType && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Research Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Linkage Type:</span> {record.linkageType}</p>
              <p><span className="font-medium">MOU Date:</span> {formatDate(record.mouDate)}</p>
              <p><span className="font-medium">Linkage Scope:</span> {record.linkageScope}</p>
              <p><span className="font-medium">Host Institution:</span> {record.hostInstitution}</p>
              <p><span className="font-medium">Collaborating Agency:</span> {record.collaboratingAgency}</p>
              <p><span className="font-medium">Study Field:</span> {record.studyField}</p>
              <p><span className="font-medium">Collaboration Scope:</span> {record.collaborationScope}</p>
              <p><span className="font-medium">Salient Features:</span> {record.linkageSalientFeatures}</p>
            </div>
          </div>
        )}

        {/* Contract Research Section */}
        {record.contractThematicArea && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Contract Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Thematic Area:</span> {record.contractThematicArea}</p>
              <p><span className="font-medium">Signed Date:</span> {formatDate(record.contractSignedDate)}</p>
              <p><span className="font-medium">PI Name:</span> {record.contractPiName}</p>
              <p><span className="font-medium">Co-PI Name:</span> {record.contractCoPiName}</p>
              <p><span className="font-medium">Sponsoring Agency:</span> {record.sponsoringAgency}</p>
              <p><span className="font-medium">Scope:</span> {record.contractScope}</p>
              <p><span className="font-medium">Industry Counterpart:</span> {record.industryCounterpart}</p>
              <p><span className="font-medium">Duration:</span> {formatDate(record.contractDurationStart)} to {formatDate(record.contractDurationEnd)}</p>
              <p><span className="font-medium">Approved Amount:</span> {record.approvedAmount}</p>
              <p><span className="font-medium">Project Deliverables:</span> {record.projectDeliverables}</p>
            </div>
          </div>
        )}

        {/* Civic Engagement Section */}
        {record.eventTitle && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Civic Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Event Title:</span> {record.eventTitle}</p>
              <p><span className="font-medium">Event Date:</span> {formatDate(record.eventDate)}</p>
              <p><span className="font-medium">Community Involved:</span> {record.communityInvolved}</p>
              <p><span className="font-medium">Event Outcome:</span> {record.eventOutcome}</p>
              <p><span className="font-medium">Collaboration Developed:</span> {record.collaborationDeveloped}</p>
              <p><span className="font-medium">CSOs Engaged:</span> {record.csosEngaged}</p>
              <p><span className="font-medium">Sponsoring Agency:</span> {record.sponsoringAgencyName}</p>
              <p><span className="font-medium">Event Arrangement:</span> {record.eventArrangement}</p>
              <p><span className="font-medium">Dissemination Material:</span> {record.disseminationMaterial}</p>
              <p><span className="font-medium">Remarks:</span> {record.eventRemarks}</p>
            </div>
          </div>
        )}

        {/* Consultancy Section */}
        {record.consultancyTitle && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Consultancy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Title:</span> {record.consultancyTitle}</p>
              <p><span className="font-medium">Execution Date:</span> {formatDate(record.executionDate)}</p>
              <p><span className="font-medium">PI Name:</span> {record.consultancyPiName}</p>
              <p><span className="font-medium">Company Details:</span> {record.companyDetails}</p>
              <p><span className="font-medium">Contract Value:</span> {record.contractValue}</p>
              <p><span className="font-medium">Timeline:</span> {formatDate(record.projectTimelineStart)} to {formatDate(record.projectTimelineEnd)}</p>
              <p><span className="font-medium">Type:</span> {record.consultancyType}</p>
              <p><span className="font-medium">Deliverables:</span> {record.deliverables}</p>
              <p><span className="font-medium">ORIC Percentage:</span> {record.oricPercentage}</p>
              <p><span className="font-medium">Remarks:</span> {record.consultancyRemarks}</p>
            </div>
          </div>
        )}

        {/* Research Papers Section */}
        {record.paperTitle && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary-700">Research Paper</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Title:</span> {record.paperTitle}</p>
              <p><span className="font-medium">Authors:</span> {record.authors}</p>
              <p><span className="font-medium">Category:</span> {record.category}</p>
              <p><span className="font-medium">Publication Date:</span> {formatDate(record.publicationDate)}</p>
            </div>
          </div>
        )}

        {/* Documents Section */}
        {(record.documents?.length > 0 ||
          record.advocacyDocuments?.length > 0 ||
          record.linkageDocuments?.length > 0 ||
          record.contractDocuments?.length > 0 ||
          record.eventDocuments?.length > 0 ||
          record.consultancyDocuments?.length > 0) && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Attached Documents</h3>
              <div className="flex flex-wrap gap-2">
                {record.documents?.map((doc, index) => (
                  <a
                    key={`proposal-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200"
                  >
                    Proposal Doc {index + 1}
                  </a>
                ))}
                {record.advocacyDocuments?.map((doc, index) => (
                  <a
                    key={`advocacy-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm hover:bg-green-200"
                  >
                    Advocacy Doc {index + 1}
                  </a>
                ))}
                {record.linkageDocuments?.map((doc, index) => (
                  <a
                    key={`linkage-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200"
                  >
                    Linkage Doc {index + 1}
                  </a>
                ))}
                {record.contractDocuments?.map((doc, index) => (
                  <a
                    key={`contract-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm hover:bg-yellow-200"
                  >
                    Contract Doc {index + 1}
                  </a>
                ))}
                {record.eventDocuments?.map((doc, index) => (
                  <a
                    key={`event-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm hover:bg-red-200"
                  >
                    Event Doc {index + 1}
                  </a>
                ))}
                {record.consultancyDocuments?.map((doc, index) => (
                  <a
                    key={`consultancy-doc-${index}`}
                    href={`http://localhost:5000/uploads/${doc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200"
                  >
                    Consultancy Doc {index + 1}
                  </a>
                ))}
              </div>
            </div>
          )}
      </div>
    );
  };

  return (
    <>
      <div className="flex max-w-full bg-white">
        <SidebarWithNavbar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="mx-auto rounded-lg p-6 w-full">
          <ToastContainer position="top-right" autoClose={5000} />

          <h1 className="text-2xl font-bold text-primary-800 mb-6">Research Excellence Records</h1>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : records.length === 0 ? (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
              No research excellence records found. Please submit some data using the form.
            </div>
          ) : (
            <div className="space-y-4">
              {records?.map((record) => (
                <div key={record._id} className="border  relative border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div
                    className="p-4 bg-gray-50  hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleExpandRecord(record._id)}
                  >
                    <div>
                      <h2 className="font-semibold text-lg">
                        {record.researchTitle || record.consultancyTitle || record.paperTitle || record.eventTitle || 'Research Record'}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {record.proposalType || record.linkageType || record.consultancyType || record.category || 'Research Activity'}
                      </p>
                    </div>
                    <div className='flex gap-x-6 '>
                      <div className='flex '>
                      <span className="text-sm text-gray-500">
                        {formatDate(record.submissionDate || record.contractSignedDate || record.eventDate || record.publicationDate || record.createdAt)}
                      </span>
                      <svg
                        className={`w-5 h-5 ml-2 text-gray-500 transform transition-transform ${expandedRecord === record._id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>


                      
                    
                    <button
                        onClick={() => handledelete(record._id)}
                        className="text-red-600   hover:text-red-900"
                      >
                        <FaTrash className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                      </div>
                    
                  </div>
                  

                  {expandedRecord === record._id && renderRecordDetails(record)}
                 
                </div>
                
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResearchExcellenceRecords;