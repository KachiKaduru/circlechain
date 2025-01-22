import styles from "./MarketCard.module.css";

export default function MarketCard({ token }) {
  const { name, symbol, icon, price, rate } = token;

  return (
    <div className={styles.card}>
      <div className="flex gap-3 items-center rounded-[18px]">
        <img src={icon} alt="token" />
        <p className="font-semibold text-lg">{symbol}</p>

        <p className="font-semibold text-xs uppercase">{name}</p>

        <p className="">&rarr;</p>
      </div>

      <div>
        <h5>{price}</h5>
        <p>{rate}</p>
      </div>
    </div>
  );
}
