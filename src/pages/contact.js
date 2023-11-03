import Footer from "@/global/components/Shared/Footer";
import Heading from "@/global/components/Shared/Heading";
import ContactBg from "@/global/components/UI/Contact/ContactBg";
import ContactForm from "@/global/components/UI/Contact/ContactForm";
import ContactMap from "@/global/components/UI/Contact/ContactMap";
import RootLayout from "@/global/layouts/RootLayout";
import React from "react";

const contact = () => {
  return (
    <>
      <Heading title={"Contact"} />
      <RootLayout>
        <ContactBg />
        <ContactForm />
        <ContactMap />
      </RootLayout>
      <Footer />
    </>
  );
};

export default contact;
