import img from "../../../../../public/images/contact.jpeg";

const ContactBg = () => {
  return (
    <div>
      <div
        class="w-full md:h-80 h-40 bg-no-repeat bg-center	bg-cover flex items-center justify-center text-white text-6xl font-bold"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default ContactBg;
