import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.formData.length) {
    return NextResponse.json({
      message: "file sent",
    });
  }
  return NextResponse.json({
    message: "no file sent",
    data: "j",
  });
}
