import Button from "../components/Button";

export default function Subscribe() {
  return (
    <section>
      <div>
        <h2 className="font-bold text-4xl">Want to be aware of all update?</h2>
        <form action="">
          <input type="text" placeholder="Enter your email address" />
          <Button type="subscribe">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
