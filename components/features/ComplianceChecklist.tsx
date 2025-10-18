'use client'

import { CheckSquare, Square, Plus } from 'lucide-react'

interface ChecklistItem {
  label: string
  checked: boolean
  nested?: boolean
}

export function ComplianceChecklist() {
  const items: ChecklistItem[] = [
    { label: 'Document ethics or Global Regulatory Bodies', checked: false },
    { label: 'Document (in Revisions', checked: false },
    { label: 'Status on Recalculate/Revises', checked: false },
    { label: 'EMA a Sections', checked: false, nested: true },
    { label: 'Refah Great Fescalos', checked: false },
  ]

  return (
    <div className="card animate-fade-in bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          <path
            d="M0,300 Q300,200 600,300 T1200,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Compliance Checklist</h2>
          <button className="w-8 h-8 bg-primary hover:bg-accent rounded-md flex items-center justify-center transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          {items.map((item, index) => (
            <label
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors ${
                item.nested ? 'ml-6' : ''
              }`}
            >
              <div className="mt-0.5">
                {item.checked ? (
                  <CheckSquare className="w-5 h-5 text-primary" />
                ) : (
                  <Square className="w-5 h-5 text-fg/30" />
                )}
              </div>
              <span className="text-sm text-fg/90 leading-relaxed">
                {item.label}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-6 text-xs text-fg/50 text-right">
          Framework Get Info on Results
        </div>
      </div>
    </div>
  )
}
