import Logo from "../components/Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />

      <nav>
        <ul className="flex gap-[55px]">
          <Link>How it works</Link>
          <Link>Blog</Link>
          <Link>Support</Link>
        </ul>
      </nav>
    </header>
  );
}

function Link({ target = "#", children }) {
  return (
    <li>
      <a href={target} className="font-medium text-2xl">
        {children}
      </a>
    </li>
  );
}
