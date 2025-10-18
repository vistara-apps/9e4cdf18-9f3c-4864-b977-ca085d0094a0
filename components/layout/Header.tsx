'use client'

import { FileText, Bell, Settings2 } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-primary text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">TrialDocFlow</h1>
            <p className="text-sm text-blue-100">
              Managing legal, ethical and clinical documents for drug trials
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn bg-warning text-gray-900 hover:bg-yellow-400">
            Connect Wallet
          </button>
          <button className="btn bg-white/10 hover:bg-white/20 text-white">
            Serlo
          </button>
          <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
