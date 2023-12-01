import Link from "next/link";

function CallToAction() {
  return (
    <button className="w-11/12 sm:w-1/2 rounded flex justify-center p-2 text-white text-xl bg-blue-600 hover:bg-blue-500 transition duration-200 ease-out">
      <Link href={"/upload "}>Upload a file</Link>
    </button>
  );
}

export default CallToAction;
