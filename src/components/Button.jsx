export default function Button({ type = "primary", children }) {
  return (
    <button
      className={`rounded-[20px] font-bold text-dark text-base py-[17px] ${
        type === "primary" && "bg-white"
      } ${type === "secondary" && "bg-[#BBFFFF]"} ${type === "subscribe" && "bg-green"}`}
    >
      {children}
    </button>
  );
}
