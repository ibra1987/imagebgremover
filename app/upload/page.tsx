import React from "react";
import UploadForm from "./components/UploadComponents/UploadForm";

function Page() {
  return (
    <main className="w-full pt-20">
      <h1 className="text-3xl w-full flex font-extrabold p-4 justify-center">
        Remove Image Background
      </h1>
      <UploadForm />
    </main>
  );
}

export default Page;
