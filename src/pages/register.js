import Footer from "@/global/components/Shared/Footer";
import Heading from "@/global/components/Shared/Heading";
import Register from "@/global/components/Shared/register";
import RootLayout from "@/global/layouts/RootLayout";
import React from "react";

const register = () => {
  return (
    <>
      <Heading title={"Register"} />
      <RootLayout>
        <Register />
      </RootLayout>
      <Footer />
    </>
  );
};

export default register;
