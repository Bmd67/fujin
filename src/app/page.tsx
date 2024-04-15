import { Dashboard } from "@/components/dashboard/dashboard";
import { MetricCards } from "@/components/dashboard/metric-cards";
import { DataTable } from "@/components/dashboard/data-table";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Fujin Dashboard</h1>
          <p className="text-slate-400 mt-2">Real-time system monitoring</p>
        </header>
        <MetricCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <Dashboard />
          </div>
          <div>
            <DataTable />
          </div>
        </div>
      </div>
    </main>
  );
}
