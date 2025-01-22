import featuresImg from "../images/Illustration.png";

const features = [
  {
    heading: "Access Token Market",
    subheading: "Buy and sell token anytime and anywhere",
  },
  {
    heading: "User Friendly Interface ",
    subheading: "Easy to navigate",
  },
  {
    heading: "Ownership Token control",
    subheading: "Be in control and own as many asset as possible",
  },
];

export default function Features() {
  return (
    <section>
      <div className="text-center">
        <h1 className="font-bold text-5xl">
          Global Decentralize currency based on blockchain technology
        </h1>

        <p className="text-xl text-green">Web3 is the latest efficient technology</p>
      </div>

      <div className="flex">
        <div>
          <img src={featuresImg} alt="Illustration" />
        </div>

        <div>
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
    <div className="bg-gradient-to-r from-[#C4C4C400] to-green rounded-xl">
      <h4 className="font-bold text-[32px]">{heading}</h4>
      <p className="font-medium text-xl text-dark">{subheading}</p>
    </div>
  );
}
