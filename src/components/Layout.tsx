import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./Navber";
import React from "react";

export default function Layout({ children }) {
  const obj = { "/": "Home", "/about": "About" };
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{obj[router.pathname]} | Next Movies</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
