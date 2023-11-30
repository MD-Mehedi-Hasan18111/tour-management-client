import { BiSolidBookAdd } from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { BsFillPassFill, BsFillTrophyFill } from "react-icons/bs";

const AboutWhy = () => {
  // const videoSrc =
  //   "https://www.youtube.com/watch?v=__mSgDEOyv8&pp=ygUWbmV4dCBqcyB0dXRvcmlhbCBzaG9ydA%3D%3D";
  return (
    <div>
      {/* <div
        className="w-full md:h-[600px] h-40 bg-no-repeat bg-center	bg-cover flex items-center justify-center text-white text-6xl font-bold"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        <VideoPlayer src={videoSrc} width="640" height="360" controls={true} />
        Explore, enjoy, experience
      </div> */}
      <p className="md:text-6xl text-4xl font-bold text-center">
        Travel you can trust
      </p>
      <p className="text-2xl font-bold text-center md:my-8 my-4">
        Why book with Bexper?
      </p>
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:basis-1/4 text-center p-8">
          <BsFillPassFill className="text-8xl mx-auto text-sky-700 bg-sky-200 p-4 rounded-full" />
          <div>
            <h4 className="text-2xl font-semibold my-3">
              Ultimate flexibility
            </h4>
            <p className="text-base">
              You're in control, with free cancellation and payment options to
              satisfy any plan or budget.
            </p>
          </div>
        </div>
        <div className="md:basis-1/4 text-center p-8">
          <FaSuitcaseRolling className="text-8xl mx-auto text-pink-700 bg-pink-200 p-4 rounded-full" />
          <div>
            <h4 className="text-2xl font-semibold my-3">
              Memorable experiences
            </h4>
            <p className="text-base">
              Browse and book tours and activities so incredible, you’ll want to
              tell your friends.
            </p>
          </div>
        </div>
        <div className="md:basis-1/4 text-center p-8">
          <BiSolidBookAdd className="text-8xl mx-auto text-yellow-700 bg-yellow-200 p-4 rounded-full" />
          <div>
            <h4 className="text-2xl font-semibold my-3">Quality at our core</h4>
            <p className="text-base">
              High quality standards. Millions of reviews. A Tripadvisor
              company.
            </p>
          </div>
        </div>
        <div className="md:basis-1/4 text-center p-8">
          <BsFillTrophyFill className="text-8xl mx-auto text-violet-700 bg-violet-200 p-4 rounded-full" />
          <div>
            <h4 className="text-2xl font-semibold my-3">
              Award winning support
            </h4>
            <p className="text-base">
              New price?New plan? No problem We're here to help, 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWhy;
