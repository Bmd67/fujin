"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  requests: Math.floor(Math.random() * 1000) + 200,
  latency: Math.floor(Math.random() * 100) + 20,
}));

export function Dashboard() {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4">Request Volume</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="hour" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Line type="monotone" dataKey="requests" stroke="#22d3ee" strokeWidth={2} />
          <Line type="monotone" dataKey="latency" stroke="#f43f5e" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
