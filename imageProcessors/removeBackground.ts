
import imglyRemoveBackground from "@imgly/background-removal"



type FuctionResponse = {
    error:boolean,
    message:string,
    link?:string
}
export async function RemoveBackground(image: ArrayBuffer): Promise<FuctionResponse> {
  const currentTimestamp = new Date().getTime();

  try {
    // Read the input image
    const blob : Blob = await imglyRemoveBackground(image);
  
  const url =  URL.createObjectURL(blob)

    //const outputImagePath = `public/bgRemoved/${currentTimestamp}${image.name}`

    

    return {
        error:false,
        link:url,
        message:"successfully done"
    };
  } catch (error: any) {
    console.log(error)
    return{
        error:true,
        message:error.message

    }
  }
}
