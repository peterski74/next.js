import Link from "next/link";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About this</a>
    </Link>
  </div>
);
