import { MdOutlineFileDownload, MdPhoneIphone } from "react-icons/md";
import two from "../images/crop.jpg";
import { RiMailSendFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import lgo from "../assets/logo.png";
import { useTheme } from "../context/useTheme";

const Banner = () => {
  const { theme, lightMode, darkMode } = useTheme();

  const handleDownloadClick = () => {
    window.open(
      "https://drive.google.com/file/d/14ptUKQPQqSNd8RoSFp4soi9B5flzCRLT/view?usp=sharing",
      "_blank"
    );
  };

  const changeTheme = (e) => {
    const darkChecked = e.currentTarget.checked;
    if (darkChecked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <div className="h-screen max-w-[1200px] mx-auto">
        <div>
          <div className="my-2 block md:flex justify-between items-center text-center">
            <div>
              <h1 className="italic font-extrabold text-3xl">
                <img className="w-16" src={lgo} alt="" />
              </h1>
            </div>
            <div className="hidden md:flex items-center">
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
              <div className="flex items-center space-x-4 ml-2">
                {/* <button
                  onClick={changeTheme}
                  className="text-xl bg-gray-700 p-3 rounded-full"
                  value={theme === "dark"}
                >
                  <MdDarkMode />
                </button> */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={changeTheme}
                    checked={theme === "dark"}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                  {/* <span className="ml-3 text-sm font-medium text-gray-900">
                    Toggle Theme
                  </span> */}
                </label>
              </div>
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className=" text-center block md:flex justify-between items-center my-12">
          <div className="w-full md:w-1/2">
            <div>
              <div className="flex justify-center text-xl md:text-3xl space-x-12 my-12">
                <a href="https://www.facebook.com/" target="blank">
                  <button className=" hover:text-blue-600 transition duration-500">
                    <FaFacebookSquare />
                  </button>
                </a>
                <a href="https://github.com/shadullah" target="blank">
                  <button className=" hover:text-gray-400 transition duration-500">
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
            <div className="space-y-8">
              <div className="">
                <h3 className="text-cyan-400 text-sm md:text-xl">
                  Hi&#128075;, my name is,
                </h3>
              </div>
              <p className="text-2xl md:text-6xl font-extrabold pb-6">
                Shadullah Sakib
              </p>
              <TypeAnimation
                sequence={[
                  "I am a Software Developer",
                  1000,
                  "I am a Full Stack Developer",
                  1000,
                  "I am a Backend Developer",
                  1000,
                ]}
                speed={50}
                className="text-xs md:text-3xl"
                repeat={Infinity}
              />
              <div>
                <button
                  onClick={handleDownloadClick}
                  className="mx-auto py-3 px-2 md:px-6 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-900 transition font-medium duration-500 text-center cursor-pointer flex items-center my-6"
                >
                  <MdOutlineFileDownload className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-full mx-auto w-48 md:w-96"
              src={two}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
