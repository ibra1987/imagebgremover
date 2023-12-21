import { FaCheck } from "react-icons/fa6";
import PromptForm from "./components/PromptForm";

const liClass =" flex space-x-1 items-center"
function page() {
  return (
    <main className="w-full py-8 flex flex-col justify-start items-center">
        <h1 className="text-3xl font-bold">Generate free icons with the power of AI</h1>
        <ol className="m-8 text-sm">
            <li className={liClass}>
                <FaCheck className="text-emerald-400"/><span>Enter a prompt text.</span>
            </li>
            <li className={liClass}>
            <FaCheck className="text-emerald-400"/><span>Choose the size you want your icon to be.</span>
            </li>
            <li className={liClass}>
            <FaCheck className="text-emerald-400"/><span> Generate your free icon</span>
            </li>
        </ol>
        <PromptForm/>
    </main>
  )
}

export default page