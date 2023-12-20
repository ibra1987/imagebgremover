"use client";
import bgRemovalSteps from "@/assets/content/bgRemovalSteps";
import { Feature } from "@/types";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const lastTwoSteps = bgRemovalSteps.slice(2, 4);
function SecondSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const slideVariant = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 20 },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={slideVariant}
      className="w-full mb-1 border shadow-xl flex flex-col md:flex-row justify-between items-center p-2 bg-white  rounded "
    >
      <div className="rounded bg-blue-300">
        <Image
          src="/images/bgRemoved_happy_man.png"
          width={350}
          height={200}
          alt="happy_man_boy"
          className="rounded"
        />
      </div>
      <div>
        {lastTwoSteps.map((step: Feature, index: number) => (
          <div key={step.title} className="m-4">
            <h3 className="text-blue-800 text-md  sm:text-xl font-bold p-2">
              {index + 3}. {step.title}
            </h3>
            <p className="indent-3 text-sm sm:text-lg">{step.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SecondSection;
