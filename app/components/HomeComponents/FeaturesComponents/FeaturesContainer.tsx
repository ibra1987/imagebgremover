import features from "@/assets/content/features";
import { Feature } from "@/types";
import FeatureCard from "./FeatureCard";

function FeaturesContainer() {
  return (
    <section className="w-full md:w-4/5  flex justify-center   ">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 pb-24 ">
        {features.map((keyFeature: Feature, index) => (
          <FeatureCard
            key={keyFeature.title}
            keyFeature={keyFeature}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesContainer;
