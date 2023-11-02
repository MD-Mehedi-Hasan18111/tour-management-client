import Heading from "@/global/components/Shared/Heading";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Heading title="404" />
      <div>
        <div className="md:w-[400px] w-[450px] mx-auto text-center md:mt-[250px] mt-[100px]">
          <h3 className="md:text-[32px] text-[24px]">Page Not Found</h3>
          <h3 className="md:text-[50px] text-[30px]">404!</h3>
        </div>
      </div>
    </>
  );
};

export default NotFound;
