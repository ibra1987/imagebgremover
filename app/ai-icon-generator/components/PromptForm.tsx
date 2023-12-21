"use client";
import { useState } from "react";
import iconSizes from "@/assets/content/iconSizes";
import sendImagePrompt from "@/httpFunctions/sendImagePrompt";

function PromptForm() {
  const [iconSize, setIconSize] = useState(iconSizes[0]);
  const [prompt,setprompt]=useState("")

  // handlers

  //select change handler

  const selectChangeHandler=(e:React.ChangeEvent<HTMLSelectElement>)=>{

    setIconSize(e.target.value)
  }

  // onchange 
 const onchange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setprompt(e.target.value)
  }

  // form submission
  const submit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    await sendImagePrompt(prompt)
}
  return (
    <form className="flex flex-col justify-start items-center space-y-3 " onSubmit={submit}>
      <textarea
      onChange={onchange}
        value={prompt}
        autoFocus={true}
        className="text-sm resize-none outline-none border p-2"
        rows={3}
        cols={80}
        placeholder="type something here"
      ></textarea>
      <select onChange={selectChangeHandler}  value={iconSize} className="border p-2 outline-none">
   
        {
            iconSizes.map((size:string)=>(
                <option key={size}>
                    {size}
                </option>
            ))
        }
      </select>
      <button

      className="bg-blue-500 hover:bg-blue-600 animation duration-150 ease-in du w-full sm:w-2/5 p-2 px-6 rounded text-white font-medium tracking-wider">
        Generate Icon
      </button>
    </form>
  );
}

export default PromptForm;
