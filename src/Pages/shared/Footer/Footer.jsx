const Footer = () => {
  return (
    <div>
      <svg
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FCDB9E"
          fillOpacity="1"
          d="M0,32L120,69.3C240,107,480,181,720,186.7C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <p
        // style={{ color: "#060B0C" }}
        className="text-gray-700 font-bold hover:text-cyan-600 py-6 text-center relative top-64"
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
