'use client'

import { CheckCircle2, Circle, ChevronRight } from 'lucide-react'

interface DocumentCategory {
  label: string
  checked: boolean
}

export function DocumentsOverview() {
  const categories: DocumentCategory[] = [
    { label: 'Documents Categories', checked: true },
    { label: 'Dice Factory', checked: false },
    { label: 'Tea Archives', checked: true },
    { label: 'Global Regulator/email', checked: false },
    { label: 'Central Legacy', checked: false },
  ]

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-primary">
          Managerational for the trials
        </h2>
        <button className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-md flex items-center justify-center transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-3">
        {categories.map((category, index) => (
          <label
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group"
          >
            <div className="relative">
              {category.checked ? (
                <CheckCircle2 className="w-5 h-5 text-primary" />
              ) : (
                <Circle className="w-5 h-5 text-fg/30 group-hover:text-fg/50" />
              )}
            </div>
            <span className={category.checked ? 'text-fg' : 'text-fg/70'}>
              {category.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
