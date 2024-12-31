import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch('http://127.0.0.1:8000/api/helloFastApi');
  const data = await response.json();
  return NextResponse.json({ message: "Hello from Next.js 14.Hahaha", data: data });
 }
