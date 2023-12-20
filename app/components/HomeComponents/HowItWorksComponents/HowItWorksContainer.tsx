import {
 
  LucideArrowRight,
} from "lucide-react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function HowItWorksContainer() {
  return (
    <section className="w-full p-4 md:p-10 xl:p-24 shadow-md bg-blue-300  flex flex-col overflow-hidden items-center text-sm md:text-base text-gray-600  rounded">
      <FirstSection />
      <SecondSection />
      <button className="flex items-center justify-center space-x-4 bg-yellow-300 my-6 p-2 font-bold rounded shadow-xl drop-shadow-md tracking-wider hover:bg-yellow-500 transition-all duration-150 ease-out w-full md:w-2/5 text-lg">
        Get Started <LucideArrowRight className="text-xs" />
      </button>
    </section>
  );
}

export default HowItWorksContainer;
