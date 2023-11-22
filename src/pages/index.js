import Footer from "@/global/components/Shared/Footer";
import Heading from "@/global/components/Shared/Heading";
import Banner from "@/global/components/UI/Home/Banner";
import BestOffer from "@/global/components/UI/Home/BestOffer";
import MakeHappy from "@/global/components/UI/Home/MakeHappy";
import Newsletter from "@/global/components/UI/Home/Newsletter";
import OurBlog from "@/global/components/UI/Home/OurBlog";
import TopTour from "@/global/components/UI/Home/TopTour";
import RootLayout from "@/global/layouts/RootLayout";

const Home = () => {
  return (
    <>
      <Heading title={"Home"} />
      <RootLayout>
        <Banner />
        <BestOffer />
        <TopTour />
        {/* <OurFeatured /> */}
        <MakeHappy />
        {/* <Subscribers /> */}
        <OurBlog />
        <Newsletter />
      </RootLayout>
      <Footer />
    </>
  );
};

export default Home;
