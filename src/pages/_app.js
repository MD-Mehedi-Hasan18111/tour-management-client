import { store } from "@/global/redux/store";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { React, useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
