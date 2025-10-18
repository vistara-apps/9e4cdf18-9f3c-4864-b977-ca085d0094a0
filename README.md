# TrialDocFlow

Onchain regulatory document management for drug trials with real-time compliance and immutable audit trails.

## Features

- **Decentralized Document Repository**: Secure, tamper-proof storage and versioning using IPFS and Base blockchain
- **Collaborative Review Workflows**: Multi-party signature and approval processes with Farcaster integration
- **Automated Compliance Scoring**: AI-powered checks against FDA/EMA requirements
- **Immutable Audit Logs**: Complete transparency and unalterable audit trails

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit, Coinbase Wallet
- **Social Layer**: Farcaster Mini Apps
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Add your OnchainKit API key to `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
trialdocflow/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # OnchainKit & React Query providers
│   └── globals.css        # Global styles with BASE theme
├── components/
│   ├── layout/            # Layout components (Header, Sidebar)
│   ├── features/          # Feature components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── types.ts           # TypeScript type definitions
│   └── constants.ts       # App constants
└── public/
    └── .well-known/
        └── farcaster.json # Farcaster manifest
```

## Key Components

- **DocumentsOverview**: Manage document categories and versions
- **ComplianceChecklist**: Track regulatory requirements
- **ComplianceTracking**: Real-time compliance monitoring dashboard

## Deployment

This app is optimized for deployment on Vercel or any Next.js-compatible platform.

## License

MIT
