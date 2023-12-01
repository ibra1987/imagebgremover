import FeaturesContainer from "./components/HomeComponents/FeaturesComponents/FeaturesContainer";
import Hero from "./components/HomeComponents/HeroComponents/Hero";
import HowItWorksContainer from "./components/HomeComponents/HowItWorksComponents/HowItWorksContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 space-y-6 bg-white">
      <Hero />
      <FeaturesContainer />
      <h2 className="w-full text-left p-4  text-4xl font-extrabold ">
        How It Works
      </h2>
      <HowItWorksContainer />
    </main>
  );
}
