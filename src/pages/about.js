import Heading from "@/global/components/Shared/Heading";
import RootLayout from "@/global/layouts/RootLayout";
import React from "react";

const About = () => {
  return (
    <>
      <Heading title={"About"} />
      <RootLayout>
        <div>
          <h2>About Page</h2>
        </div>
      </RootLayout>
    </>
  );
};

export default About;
