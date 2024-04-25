const metrics = [
  { label: "Total Requests", value: "2.4M", change: "+12%", trend: "up" },
  { label: "Avg Response Time", value: "45ms", change: "-8%", trend: "down" },
  { label: "Active Users", value: "1,847", change: "+23%", trend: "up" },
  { label: "Error Rate", value: "0.02%", change: "-5%", trend: "down" },
];

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div key={m.label} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">{m.label}</p>
          <p className="text-2xl font-bold text-white mt-1">{m.value}</p>
          <span className={`text-sm ${m.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
            {m.change}
          </span>
        </div>
      ))}
    </div>
  );
}
