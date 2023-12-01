import bgRemovalSteps from "@/assets/content/bgRemovalSteps";
import { Feature } from "@/types";
import Image from "next/image";

const firstTwoSteps = bgRemovalSteps.slice(0, 2);
function FirstSection() {
  return (
    <div className="w-full  flex justify-between items-center shadow-2xl backdrop-blur-md  rounded ">
      <div>
        {firstTwoSteps.map((step: Feature, index: number) => (
          <div key={step.title} className="m-4">
            <h3 className="text-blue-400 text-lg md:text-xl font-bold">
              {index + 1}. {step.title}
            </h3>
            <p className="indent-3 p-2">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded">
        <Image
          src="/images/happy_man.jpg"
          width={500}
          height={200}
          alt="happy_man_boy"
          className="rounded"
        />
      </div>
    </div>
  );
}

export default FirstSection;
