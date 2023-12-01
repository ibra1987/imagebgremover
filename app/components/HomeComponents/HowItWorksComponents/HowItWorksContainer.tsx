import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function HowItWorksContainer() {
  return (
    <section className="w-full md:w-4/5 flex flex-col space-y-8 text-sm md:text-base text-gray-600  rounded">
      <FirstSection />

      <SecondSection />
    </section>
  );
}

export default HowItWorksContainer;
