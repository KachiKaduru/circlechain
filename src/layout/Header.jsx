import Logo from "../components/Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />

      <nav>
        <ul className="flex gap-[55px]">
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
