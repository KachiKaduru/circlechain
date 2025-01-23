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
    <footer className="pb-6">
      <section className="flex flex-col gap-8 items-center mb-24">
        <div>
          <Logo className="justify-center" />

          <p className="font-bold text-xl text-center">
            Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.
          </p>
        </div>

        <div className="mb-6">
          <Heading>Quick links</Heading>
          <ul className="flex flex-col gap-8">
            <Link>How it works</Link>
            <Link>Blog</Link>
            <Link>Support</Link>
          </ul>
        </div>

        <div>
          <Heading>Social media</Heading>

          <span className="flex gap-7 w-fit mx-auto">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedinIcon />
            <DiscordIcon />
            <TelegramIcon />
          </span>
        </div>
      </section>

      <div className="w-full flex items-center justify-center">
        <p>&copy; 2022 Circlechain</p>
      </div>
    </footer>
  );
}

function Heading({ children }) {
  return <h2 className="font-bold text-3xl sm:text-4xl mb-9 text-center">{children}</h2>;
}

function Link({ href = "#", children }) {
  return (
    <li className="text-center">
      <a href={href} className="font-medium text-xl">
        {children}
      </a>
    </li>
  );
}
