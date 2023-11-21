import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Private = (WrappedComponent) => {
  return () => {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);

    if (!token) {
      router.push("/");
      return null;
    }

    return <WrappedComponent />;
  };
};

export default Private;
