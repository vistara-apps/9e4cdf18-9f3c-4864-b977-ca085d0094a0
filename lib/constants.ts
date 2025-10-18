export const DOCUMENT_TYPES = [
  'Protocol',
  'ICF',
  'NDA',
  'Safety Report',
  'Ethics Approval',
] as const

export const DOCUMENT_STATUS = [
  'Draft',
  'Under Review',
  'Approved',
  'Rejected',
] as const

export const USER_ROLES = [
  'Admin',
  'Reviewer',
  'Signatory',
  'Auditor',
] as const

export const REGULATORY_BODIES = [
  'FDA',
  'EMA',
  'MHRA',
  'PMDA',
  'Health Canada',
] as const

export const TRIAL_STATUS = [
  'Planning',
  'Active',
  'Completed',
] as const

export const BASE_CHAIN_ID = 8453
export const BASE_TESTNET_CHAIN_ID = 84532

export const RPC_URLS = {
  mainnet: 'https://mainnet.base.org',
  testnet: 'https://sepolia.base.org',
} as const

export const EXPLORER_URL = 'https://basescan.org'
