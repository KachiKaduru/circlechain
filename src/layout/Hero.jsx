import Button from "../components/Button";
import heroImg from "../images/hero-img.png";

export default function Hero() {
  return (
    <section>
      <div>
        <h1 className="font-bold text-7xl">Save, Buy and Sell Your blockchain asset</h1>

        <p className="font-medium text-4xl">
          The easy to manage and trade your cryptocurency asset
        </p>

        <div>
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
