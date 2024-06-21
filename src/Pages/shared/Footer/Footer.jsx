const Footer = () => {
  return (
    <div>
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ecc781"
          fillOpacity="1"
          d="M0,96L120,128C240,160,480,224,720,224C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <p
        // style={{ color: "#060B0C" }}
        className="text-gray-700 font-bold hover:text-red-600 py-6 text-center relative top-64"
      >
        Built & Designed By{" "}
        <span className="">
          <a href="/">Shad Ullah</a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
