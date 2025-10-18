import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { DocumentsOverview } from '@/components/features/DocumentsOverview'
import { ComplianceTracking } from '@/components/features/ComplianceTracking'
import { ComplianceChecklist } from '@/components/features/ComplianceChecklist'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DocumentsOverview />
              <ComplianceChecklist />
            </div>
            <ComplianceTracking />
          </div>
        </main>
      </div>
    </div>
  )
}
