import Button from "../components/Button";
import heroImg from "../images/hero-img.png";

export default function Hero() {
  return (
    <section className="grid gap-12 pt-[74px] pb-[110px] md:grid-cols-[0.6fr_0.4fr]">
      <div className="text-center md:text-left">
        <h1 className="font-bold text-[32px] sm:text-7xl mb-1">
          Save, Buy and Sell Your blockchain asset
        </h1>

        <p className="font-medium text-xl sm:text-4xl mb-12">
          The easy to manage and trade your cryptocurency asset
        </p>

        <div className="flex flex-col gap-7 w-full items-center md:flex-row">
          <Button type="secondary">Connect Wallet</Button>
          <Button type="primary">Start Trading</Button>
        </div>
      </div>

      <div className="w-full h-full">
        <img src={heroImg} alt="" className="w-full h-[80%]" />
      </div>
    </section>
  );
}
