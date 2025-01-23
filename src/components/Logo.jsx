import { LogoIcon } from "../helpers/icons";

export default function Logo({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-[50px] h-[50px] flex items-center">
        <LogoIcon />
      </div>
      <h2 className="font-bold text-[32px] capitalize">circlechain</h2>
    </div>
  );
}
