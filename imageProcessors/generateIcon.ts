import OpenAI from "openai";
import axios from "axios"


export default async function generaIcon(prompt:string){

    const openAiId = process.env.OPENAI_ORG_ID || ""
    const openAiKey = process.env.OPENAI_API_KEY || ""

    console.log(openAiKey)

    const openai = new OpenAI({
        organization:openAiId,
        apiKey:openAiKey
    })

    const image = await openai.images.generate({
        model:'dall-e-3',
        prompt:prompt
    })

    console.log(image.data)

    
}