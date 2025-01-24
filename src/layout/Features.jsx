import { features } from "../helpers/data";
import ellipseImg from "../images/Ellipse 4.png";
import featuresImg from "../images/Illustration.png";

export default function Features() {
  return (
    <section className="flex flex-col gap-7 mb-24">
      <div className="text-center">
        <h1 className="font-bold text-base sm:text-3xl md:text-5xl mb-3">
          Global Decentralize currency based on blockchain technology
        </h1>

        <p className="font-medium text-xs sm:text-xl text-green ">
          Web3 is the latest efficient technology
        </p>
      </div>

      <div className="grid gap-[74px] md:items-center lg:grid-cols-2">
        <div className="relative">
          <img src={featuresImg} alt="Illustration" />

          <img
            src={ellipseImg}
            alt=""
            className="hidden lg:block absolute top-[-160px] left-[-100px]"
          />
        </div>

        <div className="flex flex-col gap-7">
          {features.map((feature, index) => (
            <Feature key={index} heading={feature.heading} subheading={feature.subheading} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ heading, subheading }) {
  return (
    <div className="bg-gradient-to-r from-[#C4C4C400] to-green rounded-xl py-1 md:py-4 px-3 md:px-9 flex items-end">
      <div className=" w-[70%] md:w-full ml-auto text-right sm:grid sm:gap-3">
        <h4 className="font-bold text-base sm:text-[32px]">{heading}</h4>
        <p className="font-medium text-sm sm:text-xl text-dark w-[87%] ml-auto text-center">
          {subheading}
        </p>
      </div>
    </div>
  );
}
