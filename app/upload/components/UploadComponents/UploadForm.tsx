"use client";

import sendFile from "@/httpFunctions/sendFile";
import { XIcon } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";

function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>();

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

  //onSubmit
  const Submit = async () => {
    setLoading(true);
    if (!file) {
      setError("Error: Please select a file ");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userFile", file!, file?.name);
      const response = await sendFile(formData);
      console.log(response);
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
      <div className="w-full  mx-auto  flex flex-col justify-start items-center ">
        <label
          htmlFor="filePicker"
          className="w-full text-center hover:cursor-pointer bg-gray-700 p-10 outline-none border-2 border-gray-200 hover:bg-gray-900 transition-colors delay-75 ease-in-out  text-medium flex flex-col justify-start items-center "
        >
          <h2 className="  font-extrabold tracking-wider text-2xl text-gray-200">
            Select Your File
          </h2>
        </label>
        <input
          ref={fileInputRef}
          id="filePicker"
          className={"w-full bg-white outline-none rounded  font-medium hidden"}
          type={"file"}
          placeholder=""
          name={"filePicker"}
          onChange={onChange}
          multiple={false}
        />
        {file?.name && (
          <div className="w-full flex justify-start space-x-2 text-gray-600 font-medium p-2">
            File Selected:{" "}
            <span className="ml-2 text-gray-900">{file?.name}</span>
            <button onClick={resetFile}>
              <XIcon className="text-sm text-red-500 cursor-pointer " />{" "}
            </button>
          </div>
        )}
        {error && (
          <div className="w-full m-4 md:w-1/3 mx-auto text-sm font-bold tracking-wider text-red-500 hover:text-red-600  bg-red-100 p-2">
            {error}
          </div>
        )}

        <button
          onClick={Submit}
          disabled={loading || error.length > 0}
          className={
            loading
              ? " w-full  lg:w-1/4 bg-red-400 py-2 text-gray-100 tracking-wide m-6 transition-all duration-200 ease-out rounded font-bold"
              : "w-full lg:w-1/4 bg-red-600 hover:bg-red-700 py-2 text-gray-100 tracking-wide m-6 transition-all duration-200 ease-out rounded font-bold"
          }
        >
          {loading ? "processing ..." : "Remove Background"}
        </button>
      </div>
    </>
  );
}

export default UploadForm;
