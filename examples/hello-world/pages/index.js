import Link from "next/link";
export default () => (
  <div>
    Hello World. <br />
    <br />
    <Link href="/about">
      <a>About this and then that</a>
    </Link>
    &nbsp;
    <br />
    <br />
    <Link href="/links">
      <a>More LInks</a>
    </Link>
  </div>
);
