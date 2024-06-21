import { MdOutlineFileDownload, MdPhoneIphone } from "react-icons/md";
import two from "../images/crop.jpg";
import { RiMailSendFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
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
                <p>
                  <FaFacebookSquare />
                </p>
                <p>
                  <FaGithub />
                </p>
                <p>
                  <FaLinkedin />
                </p>
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
              <h1 className="text-3xl font-medium">
                I am a Full Stack Developer
              </h1>
              <div>
                <a
                  href="https://drive.google.com/file/d/1_cdjfbe5UMUBxIa6R_jvCFGppjPgaXpT/view"
                  target="blank"
                >
                  <button className="animated-button1 flex items-center border-cyan-800 border-2 px-5 py-4 rounded-md text-cyan-400 mt-6 font-medium">
                    <MdOutlineFileDownload className="mr-2" />
                    Download Resume
                  </button>
                </a>
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
