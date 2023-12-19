"use client"

import Image from "next/image"

type ProcessedImageProps = {
    newImageUrl:string,
    handleDownload:()=>void,
    cancel:()=>void
}

function ProcessedImage({newImageUrl,handleDownload,cancel}:ProcessedImageProps) {
  return (
 <div className="animation duration-75 ease-in w-full flex flex-col sm:flex-row justify-center">
    <div className="border rounded w-full sm:w-1/3">
      <Image
        alt="bg_removed_image"
        src={newImageUrl}
        width={500}
        height={300}
      />
    </div>
    <div className="w-full sm:w-1/3 flex flex-col justify-center items-center space-y-3">
      <button
        className="bg-blue-500 hover:bg-blue-600 animation duration-150 ease-in text-white w-full sm:w-3/5 rounded p-2 font-bold tracking-wider"
        onClick={handleDownload}
      >
        Download
      </button>
      <span>Or</span>
      <button
        onClick={cancel}
        className="bg-gray-500 hover:bg-gray-600 animation duration-150 ease-in text-white font-bold tracking-wider w-full sm:w-3/5 rounded p-2"
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default ProcessedImage