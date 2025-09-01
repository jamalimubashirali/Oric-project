// import mongoose from 'mongoose';
const mongoose=require('mongoose')

const ResearchSubmissionSchema = new mongoose.Schema({
  // Research Proposal Section
  proposalType: {
    type: String,
    // required: true,
    enum: ['HEC National', 'Non-HEC'],
    default:'HEC National'
  },
  researchGrantName: {
    type: String,
    // required: true
  },
  submissionDate: {
    type: String,
    // required: true
  },
  approvalStatus: {
    type: String,
    // required: true,
    enum: ['Approved', 'Not Approved'],
    default:'Not Approved'
  },
  piName: {
    type: String,
    // required: true
  },
  thematicArea: {
    type: String,
    // required: true
  },
  researchTitle: {
    type: String,
    // required: true
  },
  durationStart: {
    type: String,
    // required: true
  },
  durationEnd: {
    type: String,
    // required: true
  },
  fundingApplied: {
    type: Number
  },
  fundingApproved: {
    type: Number
  },
  collaborationPartner: {
    type: String
  },
  documents: [{
    type: String
  }],

  // Policy Advocacy Section
  governmentBody: {
    type: String
  },
  presentationDate: {
    type: String
  },
  facultyName: {
    type: String
  },
  advocacyArea: {
    type: String,
    enum: ['Technology', 'Law And Order', 'Economic Development', 'Social Progress', 'Technology Advancement', '']
  },
  advocacyDocuments: [{
    type: String
  }],

  // Research Links Section
  linkageType: {
    type: String
  },
  mouDate: {
    type: String
  },
  linkageScope: {
    type: String,
    enum: ['National', 'International', '']
  },
  hostInstitution: {
    type: String
  },
  collaboratingAgency: {
    type: String
  },
  studyField: {
    type: String
  },
  collaborationScope: {
    type: String
  },
  linkageSalientFeatures: {
    type: String
  },
  linkageDocuments: [{
    type: String
  }],

  // Contract Research Section
  contractThematicArea: {
    type: String
  },
  contractSignedDate: {
    type: String
  },
  contractPiName: {
    type: String
  },
  contractCoPiName: {
    type: String
  },
  sponsoringAgency: {
    type: String
  },
  contractScope: {
    type: String,
    enum: ['National', 'International', '']
  },
  industryCounterpart: {
    type: String
  },
  contractDurationStart: {
    type: String
  },
  contractDurationEnd: {
    type: String
  },
  approvedAmount: {
    type: Number
  },
  projectDeliverables: {
    type: String
  },
  contractDate: {
    type: String
  },
  contractDocuments: [{
    type: String
  }],

  // Civic Engagement Section
  eventTitle: {
    type: String
  },
  eventDate: {
    type: String
  },
  communityInvolved: {
    type: String
  },
  eventOutcome: {
    type: String
  },
  collaborationDeveloped: {
    type: String
  },
  csosEngaged: {
    type: String
  },
  sponsoringAgencyName: {
    type: String
  },
  eventArrangement: {
    type: String
  },
  disseminationMaterial: {
    type: String
  },
  eventRemarks: {
    type: String
  },
  eventDocuments: [{
    type: String
  }],

  // Consultancy Section
  consultancyTitle: {
    type: String
  },
  executionDate: {
    type: String
  },
  consultancyPiName: {
    type: String
  },
  companyDetails: {
    type: String
  },
  contractValue: {
    type: Number
  },
  projectTimelineStart: {
    type: String
  },
  projectTimelineEnd: {
    type: String
  },
  consultancyType: {
    type: String
  },
  deliverables: {
    type: String
  },
  oricPercentage: {
    type: String
  },
  consultancyRemarks: {
    type: String
  },
  consultancyDocuments: [{
    type: String
  }],

  // Research Papers Section
  paperTitle: {
    type: String
  },
  authors: {
    type: String
  },
  category: {
    type: String,
    enum: ['W', 'X', 'Y', '']
  },
  publicationDate: {
    type: String
  },
  authorid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  // Common Fields
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ResearchSubmission', ResearchSubmissionSchema);  