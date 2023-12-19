export default async function sendFile(formdata: FormData) {
  //check if file is indeed sent
  if (!formdata.get("userFile")) {
    return 
  }
  const newRequest = await fetch("/api/remove-background", {
    method: "POST",
    body: formdata,
   
  });

  const response = await newRequest.json();

  return response;
}
