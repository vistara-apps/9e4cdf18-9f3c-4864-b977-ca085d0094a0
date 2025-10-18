export interface Document {
  documentId: string
  documentHash: string
  version: number
  title: string
  docType: 'Protocol' | 'ICF' | 'NDA' | 'Safety Report' | 'Ethics Approval'
  status: 'Draft' | 'Under Review' | 'Approved' | 'Rejected'
  owner: string
  metadataHash: string
  currentApprovers: string[]
  requiredApprovals: number
  createdAt: number
  updatedAt: number
}

export interface ApprovalTransaction {
  transactionHash: string
  documentId: string
  approver: string
  timestamp: number
  action: 'Signed' | 'Reviewed' | 'Rejected'
  commentsHash?: string
}

export interface Trial {
  trialId: string
  name: string
  sponsor: string
  regulatoryBody: string[]
  status: 'Planning' | 'Active' | 'Completed'
  documents: Document[]
}

export interface UserRole {
  fid: number
  walletAddress: string
  role: 'Admin' | 'Reviewer' | 'Signatory' | 'Auditor'
  associatedTrials: string[]
}

export interface ComplianceScore {
  documentId: string
  score: number
  issues: ComplianceIssue[]
  lastChecked: number
}

export interface ComplianceIssue {
  severity: 'critical' | 'warning' | 'info'
  description: string
  regulatoryBody: string
  suggestion?: string
}
