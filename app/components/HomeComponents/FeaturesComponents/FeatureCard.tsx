"use client";
import { Feature } from "@/types";
import { Bot, Gauge, Goal, ListFilter } from "lucide-react";
import React, { ReactNode, use, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type IconType = {
  actualIcon: () => React.ReactNode;
  colors: string;
  containerColors: string;
};

const icons: Record<string, IconType> = {
  gauge: {
    actualIcon: () => <Gauge />,
    colors: " text-blue-500",
    containerColors: " text-blue-500",
  },
  goal: {
    actualIcon: () => <Goal />,
    colors: " text-emerald-500",
    containerColors: " text-emerald-500",
  },
  bot: {
    actualIcon: () => <Bot />,
    colors: " text-yellow-500",
    containerColors: " text-yellow-500",
  },
  listFilter: {
    actualIcon: () => <ListFilter />,
    colors: " text-indigo-500",
    containerColors: "  text-indigo-500",
  },
};
function FeatureCard({
  keyFeature,
  index,
}: {
  keyFeature: Feature;
  index: number;
}) {
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index / 4 + 0.2 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

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
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="  p-3 rounded font-medium text-gray-500"
    >
      <div
        className={
          "w-full flex justify-center   items-center space-x-2 my-4 py-2 rounded text-md font-extrabold " +
          icons[keyFeature.icon as keyof Record<string, IconType>]
            .containerColors
        }
      >
        <span
          className={
            icons[keyFeature.icon as keyof Record<string, IconType>].colors
          }
        >
          {icons[
            keyFeature.icon as keyof Record<string, IconType>
          ].actualIcon()}
        </span>
        <h2>{keyFeature.title}</h2>
      </div>
      <p className="indent-3 text-sm">{keyFeature.desc}</p>
    </motion.div>
  );
}

export default FeatureCard;
