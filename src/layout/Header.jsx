import Logo from "../components/Logo";
import { HamburgerIcon } from "../helpers/icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />

      <div className="sm:hidden">
        <HamburgerIcon />
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-[55px]">
          <Link>How it works</Link>
          <Link>Blog</Link>
          <Link>Support</Link>
        </ul>
      </nav>
    </header>
  );
}

function Link({ href = "#", children }) {
  return (
    <li>
      <a href={href} className="font-medium text-2xl">
        {children}
      </a>
    </li>
  );
}
