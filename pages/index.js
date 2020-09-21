import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = ({ name }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Nav /> */}
    <h1>{name}</h1>
  </div>
);
// This gets called on every request
export async function getServerSideProps() {
  let awbeci = "123456";
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { name: "zhangwei" } };
}
export default Home;
