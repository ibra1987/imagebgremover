import bgRemovalSteps from "@/assets/content/bgRemovalSteps";
import { Feature } from "@/types";
import Image from "next/image";

const lastTwoSteps = bgRemovalSteps.slice(2, 4);
function SecondSection() {
  return (
    <div>
      <div className="w-full  flex justify-between items-center  shadow-2xl backdrop-blur-md rounded">
        <div className="rounded bg-yellow-400">
          <Image
            src="/images/bgRemoved_happy_man.png"
            width={500}
            height={200}
            alt="happy_man_boy"
            className="rounded"
          />
        </div>
        <div>
          {lastTwoSteps.map((step: Feature, index: number) => (
            <div key={step.title} className="m-4">
              <h3 className="text-blue-400 text-lg md:text-xl font-bold p-2">
                {index + 3}. {step.title}
              </h3>
              <p className="indent-3">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
