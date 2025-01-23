import Button from "../components/Button";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <section className="py-[50px] md:pb-24 md:border-b-2 md:border-[#73FDAA5C]">
      <div
        className={`max-w-5xl mx-auto px-[18px] py-5 rounded-[10px] ${styles.form} md:pt-8 md:pb-16 md:pl-8 md:pr-7`}
      >
        <h2 className="font-bold text-base sm:text-4xl w-fit mx-auto mb-8">
          Want to be aware of all update?
        </h2>
        <form action="" className="w-full flex flex-col gap-9 items-center md:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full text-base px-1 py-3 rounded-[10px] text-dark"
          />
          <Button type="subscribe">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
