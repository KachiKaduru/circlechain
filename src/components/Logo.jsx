import { LogoIcon } from "../helpers/icons";

export default function Logo({ className }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <LogoIcon />
      <h2 className="font-bold text-[32px] capitalize">circlechain</h2>
    </div>
  );
}
