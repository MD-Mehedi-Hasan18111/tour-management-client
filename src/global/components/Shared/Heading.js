import Head from "next/head";
import React from "react";

const Heading = ({ title }) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
      <title>{title}</title>
    </Head>
  );
};

export default Heading;
