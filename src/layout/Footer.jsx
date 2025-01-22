import Logo from "../components/Logo";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "../helpers/icons";

export default function Footer() {
  return (
    <footer className="flex">
      <div className="grid">
        <Logo />

        <p className="font-bold text-xl">
          Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia
          consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.
        </p>
      </div>

      <div className="">
        <Heading>Quick links</Heading>
        <ul>
          <Link>How it works</Link>
          <Link>Blog</Link>
          <Link>Support</Link>
        </ul>
      </div>

      <div>
        <Heading>Social media</Heading>

        <span className="flex gap-7">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <DiscordIcon />
          <TelegramIcon />
        </span>
      </div>
    </footer>
  );
}

function Heading({ children }) {
  return <h2 className="font-bold text-4xl">{children}</h2>;
}

function Link({ href = "#", children }) {
  return (
    <li>
      <a href={href} className="font-medium text-xl">
        {children}
      </a>
    </li>
  );
}
