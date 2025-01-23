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
    <footer className="pb-6 md:pt-24 md:pb-16">
      <section className="flex flex-col gap-8 items-center mb-24 md:grid md:grid-cols-3 md:items-start">
        <div className="grid gap-8">
          <Logo className="justify-center" />

          <p className="font-bold text-xl text-center md:text-left">
            Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.
          </p>
        </div>

        <div className="mb-6">
          <Heading>Quick links</Heading>
          <ul className="flex flex-col gap-8 md:items-start md:w-fit md:mx-auto">
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

      <div className="w-full flex items-center justify-center md:justify-end">
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
