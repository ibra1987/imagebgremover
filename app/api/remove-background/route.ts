import { RemoveBackground } from "@/imageProcessors/removeBackground";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
   const formdata = await request.formData() || []
   // check if file has been sent
  if (!formdata) {
    return NextResponse.json({
      message: "no file sent",
      
    });
  }
  const image =  formdata.get('userFile')! as File

  const result =  await RemoveBackground(image)
  
    
  return NextResponse.json({
    data: result.message
  })
 
}
