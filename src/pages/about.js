import Footer from "@/global/components/Shared/Footer";
import Heading from "@/global/components/Shared/Heading";
import { AboutBg } from "@/global/components/UI/About/AboutBg";
import AboutExperience from "@/global/components/UI/About/AboutExperience";
import AboutWhy from "@/global/components/UI/About/AboutWhy";
import Testimonials from "@/global/components/UI/About/Testimonials";
import RootLayout from "@/global/layouts/RootLayout";

const About = () => {
  return (
    <>
      <Heading title={"About"} />
      <RootLayout>
        <AboutBg />
        <AboutExperience />
        <AboutWhy />
        <Testimonials />
      </RootLayout>
      <Footer />
    </>
  );
};

export default About;
