export default async function sendFile(formdata: FormData) {
  //check if file is indeed sent
  if (!formdata.get("userFile")) {
    return false;
  }

  const newRequest = await fetch("/api/remove-background", {
    method: "POST",
    body: formdata,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const response = await newRequest.json();

  return response;
}
