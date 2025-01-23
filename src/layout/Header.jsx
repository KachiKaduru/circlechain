import { useState } from "react";
import Logo from "../components/Logo";
import { HamburgerIcon } from "../helpers/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    // setIsOpen((open) => !open);
  }

  return (
    <header className="flex justify-between items-center">
      <Logo />

      <div className={`${isOpen ? "hidden" : "block"} md:hidden`} onClick={handleClick}>
        <HamburgerIcon />
      </div>

      <nav className={`${isOpen ? "block open" : "hidden"} md:block `}>
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
