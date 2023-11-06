import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// const axios = require("axios");

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     console.log(email, password);

  //     if (email && password) {
  //       const options = {
  //         method: "post",
  //         url: "http://localhost:3000/login",
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //         },
  //         data: {
  //           email,
  //           password,
  //         },
  //       };
  //       const response = await axios(options);
  //       if (response.status == "200") {
  //         router.push("/home");
  //       }
  //     }
  //   };

  useEffect(() => {
    // Prefetch the home page for faster transition
    router.prefetch("/home");
  }, []);
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Login Now
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div class=" w-full flex flex-col items-center">
            <h3 className="text-4xl font-bold my-6"> Login Now </h3>
            <form
              // onSubmit={handleSubmit}
              className="md:w-[70%] w-10/12 grid"
            >
              <input
                type="email"
                placeholder="Enter Your Email *"
                className="input input-bordered w-full "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered  w-full "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />{" "}
              <br />
              <button type="submit" className="btn btn-info md:px-40 px-6 ">
                Login
              </button>
              <p className="text-center my-4">
                {" "}
                <Link
                  href="/register"
                  className="btn btn-link mx-auto no-underline text-red-500"
                >
                  Forgot Password
                </Link>
              </p>
              <Link href="/register" className="btn btn-link ">
                Create An Account
              </Link>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
