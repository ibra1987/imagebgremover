import features from "@/assets/content/features";
import { Feature } from "@/types";
import FeatureCard from "./FeatureCard";

function FeaturesContainer() {
  return (
    <section className="w-full flex justify-center  relative  ">
      <div className="w-full  relative  grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {features.map((keyFeature: Feature) => (
          <FeatureCard key={keyFeature.title} keyFeature={keyFeature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesContainer;
