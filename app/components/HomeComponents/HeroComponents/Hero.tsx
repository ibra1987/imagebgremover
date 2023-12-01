import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import CallToAction from "./CallToAction";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between py-20 px-4    bg-gray-100 rounded-md ">
      <div className="w-full  lg:w-2/3 flex flex-col justify-center space-y-10 items-center ">
        <Title />
        <Paragraph />
        <CallToAction />
      </div>
      <div className="hidden lg:flex justify-end bg-zinc-200 p-4 rounded-md  border-2 border-white ">
        <div className=" p-2  bg-zinc-100 shadow-md rounded-md">
          <Image
            alt="bg-removed"
            src="/images/bg-removed.png"
            width={500}
            height={600}
            className="rounded-md h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
