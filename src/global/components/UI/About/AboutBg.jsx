import img from "../../../../../public/images/contact.jpeg";

export const AboutBg = () => {
  return (
    <div>
      <div
        className="w-full md:h-80 h-40 bg-no-repeat bg-center	bg-cover flex items-center justify-center text-white text-6xl font-bold"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        About us
      </div>
    </div>
  );
};
