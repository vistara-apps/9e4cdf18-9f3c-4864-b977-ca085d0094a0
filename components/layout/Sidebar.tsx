'use client'

import { Home, FileText, Shield, ClipboardCheck, Users, Archive, Settings2 } from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  icon: React.ReactNode
  label: string
  active?: boolean
  children?: { label: string; active?: boolean }[]
}

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Documents'])

  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Documents',
      active: true,
      children: [
        { label: 'System' },
        { label: 'Legal Ethical' },
        { label: 'Clinical Concern', active: true },
        { label: 'Manly Trials' },
        { label: 'Docs Segments' },
        { label: 'On Documents' },
      ],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      label: 'Proactionally',
    },
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      label: 'Checklist',
    },
    {
      icon: <Archive className="w-5 h-5" />,
      label: 'Google Active',
    },
  ]

  const toggleExpand = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  return (
    <aside className="w-64 bg-surface border-r border-white/5 min-h-screen p-4">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <div key={item.label}>
            <button
              onClick={() => item.children && toggleExpand(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-warning text-gray-900'
                  : 'text-fg hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
            {item.children && expandedItems.includes(item.label) && (
              <div className="ml-12 mt-2 space-y-1">
                {item.children.map((child) => (
                  <button
                    key={child.label}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                      child.active
                        ? 'text-primary font-medium'
                        : 'text-fg/70 hover:text-fg hover:bg-white/5'
                    }`}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
