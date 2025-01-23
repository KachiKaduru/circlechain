import Button from "../components/Button";
import heroImg from "../images/hero-img.png";

export default function Hero() {
  return (
    <section className="grid gap-12 pt-[74px] pb-[110px]">
      <div className="text-center">
        <h1 className="font-bold text-[32px] sm:text-7xl mb-1">
          Save, Buy and Sell Your blockchain asset
        </h1>

        <p className="font-medium text-xl sm:text-4xl mb-12">
          The easy to manage and trade your cryptocurency asset
        </p>

        <div className="grid gap-7 justify-center">
          <Button type="secondary">Connect Wallet</Button>
          <Button type="primary">Start Trading</Button>
        </div>
      </div>

      <div>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}
