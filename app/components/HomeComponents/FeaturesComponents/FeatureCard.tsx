import { Feature } from "@/types";
import { Bot, Gauge, Goal, ListFilter } from "lucide-react";
import React, { ReactNode } from "react";

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
function FeatureCard({ keyFeature }: { keyFeature: Feature }) {
  return (
    <div className="p-2  shadow-sm  ">
      <div
        className={
          "w-full flex justify-center items-center space-x-2 my-4 py-2 rounded text-xl lg:text-3xl font-bold " +
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
    </div>
  );
}

export default FeatureCard;
