import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import CallToAction from "./CallToAction";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between py-20 px-4  bg-red-400 rounded-md ">
      <div className="w-full  flex flex-col justify-center space-y-10 items-center ">
        <Title />
        <Paragraph />
        <CallToAction />
      </div>
      <div className="hidden lg:flex justify-end   rounded-md border-1 border-red-300   bg-white  ">
        <div className="p-2  bg-red-300 shadow-xl   rounded-md">
          <Image
            alt="bg-removed"
            src="/images/bg-removed.png"
            width={700}
            height={600}
            className="rounded-md h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
