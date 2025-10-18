'use client'

import { TrendingUp, AlertCircle } from 'lucide-react'

interface ComplianceItem {
  id: number
  name: string
  compliance: number
  realTime: number
  checklist: number
  status: number
  region: string
  poolCounter?: number
}

export function ComplianceTracking() {
  const items: ComplianceItem[] = [
    { id: 1, name: 'Real Time', compliance: 8, realTime: 0, checklist: 0, status: 0, region: 'Real-time' },
    { id: 2, name: 'Dration', compliance: 0, realTime: 7, checklist: 0, status: 0, region: 'EMA' },
    { id: 3, name: 'Global Regulation', compliance: 0, realTime: 0, checklist: 0, status: 0, region: 'On Status' },
    { id: 4, name: 'Status', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 5, name: 'FDA', compliance: 0, realTime: 0, checklist: 2, status: 0, region: '' },
    { id: 6, name: 'FDA', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 7, name: 'Erda (Cres)', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 8, name: 'EMA', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 17, name: 'OML Opcodes', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 17, name: 'EMA', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '' },
    { id: 77, name: 'Mialese a EMA', compliance: 0, realTime: 0, checklist: 0, status: 0, region: '', poolCounter: 1 },
  ]

  const getBarWidth = (value: number) => {
    if (value === 0) return '0%'
    return `${Math.min(value * 10, 100)}%`
  }

  return (
    <div className="card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Compliance Tracking</h2>
        <div className="flex items-center gap-2 text-sm text-fg/70">
          <TrendingUp className="w-4 h-4 text-success" />
          <span>Real-time monitoring active</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Information</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Compliance</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Real-time</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Checklist</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">4.8.00 DSS</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Region</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-fg/70">Pool/Counter</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-fg/50 text-sm">{item.id}</span>
                    <span className="text-fg">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  {item.compliance > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300"
                          style={{ width: getBarWidth(item.compliance) }}
                        />
                      </div>
                      <span className="text-sm text-fg/70">{item.compliance}</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  {item.realTime > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-300"
                          style={{ width: getBarWidth(item.realTime) }}
                        />
                      </div>
                      <span className="text-sm text-fg/70">{item.realTime}</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  {item.checklist > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300"
                          style={{ width: getBarWidth(item.checklist) }}
                        />
                      </div>
                      <span className="text-sm text-fg/70">{item.checklist}</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  {item.status > 0 && (
                    <span className="badge badge-primary">{item.status}</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {item.region && (
                    <span className="text-sm text-fg/70">{item.region}</span>
                  )}
                </td>
                <td className="py-4 px-4">
                  {item.poolCounter && (
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-warning" />
                      <span className="text-sm text-fg/70">{item.poolCounter}</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-fg/70">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span>Compliance Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span>Real-time Updates</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full" />
            <span>Requires Attention</span>
          </div>
        </div>
        <button className="btn btn-secondary text-sm">
          Export Report
        </button>
      </div>
    </div>
  )
}
