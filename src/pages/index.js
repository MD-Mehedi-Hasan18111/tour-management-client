import Heading from "@/global/components/Shared/Heading";
import Banner from "@/global/components/UI/Home/Banner";
import RootLayout from "@/global/layouts/RootLayout";

const Home = () => {
  return (
    <>
      <Heading title={"Home"} />
      <RootLayout>
        <Banner />
      </RootLayout>
    </>
  );
};

export default Home;
