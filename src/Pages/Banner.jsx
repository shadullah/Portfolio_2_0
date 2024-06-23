import { MdOutlineFileDownload, MdPhoneIphone } from "react-icons/md";
import two from "../images/crop.jpg";
import { RiMailSendFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const handleDownloadClick = () => {
    window.open(
      "https://drive.google.com/file/d/1_cdjfbe5UMUBxIa6R_jvCFGppjPgaXpT/view",
      "_blank"
    );
  };

  return (
    <>
      <div className="h-screen max-w-[1200px] mx-auto">
        <div>
          <div className="my-2 flex justify-between items-center text-center">
            <div>
              <h1 className="italic font-extrabold text-3xl">$</h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-4 mr-2">
                <span className="text-xl text-pink-400">
                  <MdPhoneIphone />
                </span>
                <p className="text-xs"> +8801629837675</p>
              </div>
              <div className="flex items-center space-x-4 mr-2">
                <span className="text-xl text-lime-400">
                  <RiMailSendFill />
                </span>
                <p className="text-xs">shadullahsad9@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4 ">
                <span className="text-xl text-cyan-400">
                  <ImLocation />
                </span>
                <p className="text-xs">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className="flex justify-between items-center my-12">
          <div className="w-1/2">
            <div>
              <div className="flex text-3xl space-x-12 my-12">
                <a href="https://www.facebook.com/" target="blank">
                  <button className=" hover:text-blue-400 transition duration-500">
                    <FaFacebookSquare />
                  </button>
                </a>
                <a href="https://github.com/shadullah" target="blank">
                  <button className=" hover:text-blue-400 transition duration-500">
                    <FaGithub />
                  </button>
                </a>
                <a
                  href="https://linkedin.com/in/shadullahsakib/"
                  target="blank"
                >
                  <button className=" hover:text-blue-600 transition duration-500">
                    <FaLinkedin />
                  </button>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* <div className="h-1 w-20 bg-gray-500"></div> */}
                <h3 className="text-cyan-400 text-xl">
                  Hi&#128075;, my name is,
                </h3>
              </div>
              <p className="text-6xl font-extrabold">Shadullah Sakib</p>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "I am a Software Developer",
                  1000,
                  "I am a Full Stack Developer",
                  1000,
                  "I am a Beckend Developer",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
              <div>
                <button
                  onClick={handleDownloadClick}
                  className="py-3 px-6 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-900 transition font-medium duration-500 text-center cursor-pointer flex items-center"
                >
                  <MdOutlineFileDownload className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 my-12">
            <img className="home-img mx-auto w-96" src={two} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
