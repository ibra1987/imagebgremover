"use client";
import bgRemovalSteps from "@/assets/content/bgRemovalSteps";
import { Feature } from "@/types";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const firstTwoSteps = bgRemovalSteps.slice(0, 2);

function FirstSection() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const slideVariant = {
    hidden: { x: "-100%", opacity: 0 },
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
      className="w-full mb-1 border shadow-sm flex flex-col md:flex-row justify-between items-center p-2 bg-gray-50  rounded "
    >
      <div>
        {firstTwoSteps.map((step: Feature, index: number) => (
          <div key={step.title} className="m-4 ">
            <h3 className="text-black  text-md  sm:text-xl font-bold ">
              {index + 1}. {step.title}
            </h3>
            <p className="indent-3 p-2 w-full text-sm sm:text-lg ">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded  ">
        <Image
          src="/images/happy_man.jpg"
          width={300}
          height={200}
          alt="happy_man_boy"
          className="rounded"
        />
      </div>
    </motion.div>
  );
}

export default FirstSection;
