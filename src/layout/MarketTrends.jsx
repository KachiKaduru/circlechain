import MarketCard from "../components/MarketCard";
import { tokens } from "../helpers/data";

export default function MarketTrends() {
  return (
    <section>
      <h2 className="font-bold text-4xl sm:text-5xl text-center">Market Trend</h2>

      <div>
        {tokens.map((token, index) => (
          <MarketCard token={token} key={index} />
        ))}
      </div>
    </section>
  );
}
