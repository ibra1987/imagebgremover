




export default async function sendImagePrompt(prompt:string){

    const request  = await fetch("/api/icon-generator",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({prompt})
    })

    const response = await request.json()
    
    return response


}