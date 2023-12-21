import generaIcon from "@/imageProcessors/generateIcon"
import { NextResponse } from "next/server"


export async function POST(request:Request){
  const body = await request.json()


  // check if prompt is sent 
  if(!body || !body.prompt){
     return NextResponse.json({
        error:true,
        message:"no prompt sent"
     })
  }

  await generaIcon(body.prompt)

  return NextResponse.json({
    success:true
  })
}