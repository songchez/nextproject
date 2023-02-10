import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Image width={100} height={100} src="/vercel.svg" alt="asdasd" />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 1rem;
          padding-bottom: 1rem;
          box-shadow: 10px 5px 30px hotpink;
        }
        nav a {
          font-weight: 550;
          font-size: 19px;
        }
        .active {
          color: hotpink;
        }
        nav div {
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </nav>
  );
}
