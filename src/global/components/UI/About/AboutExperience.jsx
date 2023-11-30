import img from "../../../../../public/images/bg.png";

const AboutExperience = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-center bg-screen md:my-10 my-4"
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      <div className="md:flex md:flex-row flex-col md:gap-y-16 gap-y-0 md:gap-6">
        <div className="md:basis-1/2 w-full my-auto md:text-start text-center">
          <div className=" md:px-32 md:pt-32 md:pb-16 px-4 pt-4 pb-4">
            <h2 className="text-4xl font-semibold">Our Experience</h2>
            <h2 className="md:text-3xl text-2xl font-bold">
              We make it easier for everyone to experience the world
            </h2>
            <h5 className="text-xl font-bold md:mt-0 mt-4">
              Take your longest vacation yet!
            </h5>
            <p className="text-gray-500">
              Travelling to all corners of the world is getting easier and
              easier. We live in a global village, but how well do we know and
              understand each other? Here is a simple test. Imagine you have
              arranged a meeting at 4 p.m . What time should you expect your
              foreign business colleagues to arrive?
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-around mb-16">
            <div className="text-center">
              <p className="font-bold md:text-2xl text-4xl">
                Happy <br /> customer
              </p>
              <h3 className="text-sky-400 font-bold md:text-4xl text-6xl">
                45K+
              </h3>
            </div>
            <div className="text-center md:my-0 my-6">
              <p className="font-bold md:text-2xl text-4xl">
                Destination <br /> collaboration
              </p>
              <h3 className="text-sky-400 font-bold md:text-4xl text-6xl">
                290+
              </h3>
            </div>
            <div className="text-center">
              <p className="font-bold  md:text-2xl text-4xl">
                Years <br /> experience
              </p>
              <h3 className="text-sky-400 font-bold md:text-4xl text-6xl">
                20+
              </h3>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 w-full">
          <div className="flex md:flex-row flex-col">
            <div className="basis-1/2 ">
              <img
                src="../../../../../images/about1.webp"
                alt="about1"
                className="p-5 hover:scale-105 "
              />
              <img
                src="../../../../../images/about2.jpg"
                alt="about2"
                className="p-5 hover:scale-105"
              />
            </div>
            <div className="basis-1/2 mt-16">
              <img
                src="../../../../../images/about3.webp"
                alt="about3"
                className="p-5 hover:scale-105"
              />
              <img
                src="../../../../../images/about4.jpg"
                alt="about4"
                className="p-5 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExperience;
