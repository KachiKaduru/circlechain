import MarketCard from "../components/MarketCard";
import { tokens } from "../helpers/data";

export default function MarketTrends() {
  return (
    <section className="md:mb-28">
      <h2 className="font-bold text-4xl sm:text-5xl text-center md:text-left mb-20">
        Market Trend
      </h2>

      <div className="flex flex-col items-center gap-[50px] md:flex-row">
        {tokens.map((token, index) => (
          <MarketCard token={token} key={index} />
        ))}
      </div>
    </section>
  );
}
