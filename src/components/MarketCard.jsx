import { Arrow } from "../helpers/icons";
import styles from "./MarketCard.module.css";

export default function MarketCard({ token }) {
  const { name, symbol, icon, price, rate } = token;

  return (
    <div className={`${styles.card} rounded-[18px] w-fit`}>
      <div className="flex gap-3 items-center border-b border-b-red pb-4">
        <img src={icon} alt="token" />
        <p className="font-semibold text-lg">{symbol}</p>

        <p className="font-semibold text-xs uppercase bg-[#B6B6B64D] px-[6px] py-1">{name}</p>

        <div className="w-12 h-12 grid place-content-center ml-4">
          <Arrow />
        </div>
      </div>

      <div className="mt-4">
        <h5 className="font-medium text-2xl">{price}</h5>
        <p className="font-medium text-lg">{rate}</p>
      </div>
    </div>
  );
}
