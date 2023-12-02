import FeaturesContainer from "./components/HomeComponents/FeaturesComponents/FeaturesContainer";
import Hero from "./components/HomeComponents/HeroComponents/Hero";
import HowItWorksContainer from "./components/HomeComponents/HowItWorksComponents/HowItWorksContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 space-y-6 bg-white">
      <Hero />
      <h2 className="w-full text-center p-4 underline text-2xl font-extrabold ">
        Key Features
      </h2>
      <FeaturesContainer />
      <h2 className="w-full text-center underline p-4  text-2xl font-extrabold ">
        How It Works
      </h2>
      <HowItWorksContainer />
      <h2 className="w-full text-center underline p-4  text-2xl font-extrabold ">
        What They say
      </h2>
    </main>
  );
}
