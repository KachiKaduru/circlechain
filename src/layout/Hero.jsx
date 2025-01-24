import Button from "../components/Button";
import heroImg from "../images/hero-img.png";
import ellipseImg from "../images/Ellipse 4.png";

export default function Hero() {
  return (
    <section className="grid gap-12 pt-[74px] pb-[110px] lg:grid-cols-[0.6fr_0.4fr]">
      <div className="text-center lg:text-left relative">
        <h1 className="font-bold text-[32px] sm:text-5xl  md:text-7xl mb-1">
          Save, Buy and Sell Your blockchain asset
        </h1>

        <p className="font-medium text-xl sm:text-3xl md:text-4xl mb-12">
          The easy to manage and trade your cryptocurency asset
        </p>

        <div className="flex flex-col gap-7 w-full items-center md:flex-row md:justify-center lg:justify-start">
          <Button type="secondary">Connect Wallet</Button>
          <Button type="primary">Start Trading</Button>
        </div>

        <img
          src={ellipseImg}
          alt=""
          className="absolute top-[-10px] left-[-120px] md:top-[-200px] md:left-[-240px]"
        />
      </div>

      <div className="w-full h-full relative">
        <img src={heroImg} alt="" className="w-full h-[80%]" />

        <img src={ellipseImg} alt="" className="absolute top-0 right-0" />
      </div>
    </section>
  );
}
