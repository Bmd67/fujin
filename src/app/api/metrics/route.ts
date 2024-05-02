import { NextResponse } from "next/server";

export async function GET() {
  const metrics = {
    requests: Math.floor(Math.random() * 10000),
    latency: Math.floor(Math.random() * 100),
    users: Math.floor(Math.random() * 2000),
    errors: Math.random() * 0.1,
    timestamp: new Date().toISOString(),
  };
  return NextResponse.json(metrics);
}
