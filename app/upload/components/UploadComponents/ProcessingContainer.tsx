"use client";

import { ChangeEvent, useRef, useState } from "react";

import imglyRemoveBackground, { Config } from "@imgly/background-removal";
import UploadForm from "./UploadForm";
import ProcessedImage from "./ProcessedImage";

const public_path = "http://localhost:3000/public";

function ProcessingContainer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [newImageUrl, setNewImageUrl] = useState("");

  // Handlers

  //onChange
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(false);
    setError("");
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      return;
    }
    setFile(null);
  };

  //handle download

  const handleDownload = () => {
    // Create an invisible link element
    const link = document.createElement("a");
    link.href = newImageUrl; // Set the image URL
    link.download = new Date().getTime() + "-" + file?.name; // Set the filename for the download

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document after the download
    document.body.removeChild(link);
    URL.revokeObjectURL(newImageUrl);
    resetFile()
  };

  // cancel Operation

  const cancel = () => {
    resetFile();
    setNewImageUrl("");
    URL.revokeObjectURL(newImageUrl);
    
  };

  //onSubmit
  const submit = async () => {
    setLoading(true);
    if (!file) {
      setError("Error: Please select a file ");
      setLoading(false);
      return;
    }

    try {
      // const formData = new FormData();
      // formData.append("userFile", file!, file?.name);
      const config: Config = {
        publicPath: public_path,
      };

      const buffer = await file.arrayBuffer();
      const result = await imglyRemoveBackground(buffer, config);
      const url = URL.createObjectURL(result);
      setNewImageUrl(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      
    }
  };

  // reset form
  const resetFile = () => {
    setFile(null);

    if (fileInputRef !== null && fileInputRef?.current) {
      fileInputRef!.current!.value = "";
    }
  };

  return (
    <>
      <UploadForm 
      file={file}
      fileInputRef={fileInputRef}
      submit={submit}
      resetFile={resetFile}
      onChange={onChange}
      error={error}
      loading={loading}
      />

        {
          newImageUrl && <ProcessedImage handleDownload={handleDownload} cancel={cancel} newImageUrl={newImageUrl}/>
        }
      
    </>
  );
}

export default ProcessingContainer;
