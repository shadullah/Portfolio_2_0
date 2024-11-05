import { SiDependabot } from "react-icons/si";
import "./About.css";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidPaint } from "react-icons/bi";
import { BsStack } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="flex items-center space-x-2 mx-6 md:mx-0">
        <h1 className="text-2xl md:text-4xl mr-4">About Me</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>
      <div className="block md:flex items-center justify-between my-12 mx-3 md:mx-0">
        <div className="md:w-1/3 my-6 text-9xl flex justify-center text-gray-200">
          <SiDependabot />
        </div>
        <article className="w-full text-xs md:text-base text-center md:text-end">
          Hello! My name is Shadullah and I enjoy creating things that live on
          the internet. My interest in web development started back in 2022 when
          the whole world got stucked with covid-19. Since then I am constantly
          Learing new technologies and exploring how to make applications more
          efficiently.
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="text-green-400 font-bold">Greenie Web</span>. My main
          focus these days is building accessible, inclusive products and
          digital experiences for a variety of clients.
          <br />
          <br />I also recently started learning Docker which play vital role to
          build a web app using{" "}
          <span className="text-green-400 font-bold">Node, Django & React</span>
          .
        </article>
      </div>

      {/* what do i do section */}

      <div className="flex items-center space-x-2 my-12 mx-6 md:mx-0">
        <h1 className="text-xl md:text-4xl mr-4">What Do I Do</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>

      {/* what do i do section */}
      <div className="my-12 mx-6 md:mx-0">
        <div className="block md:flex justify-between">
          <div className="flex flex-col-reverse md:flex-row items-center bg-gray-700 w-full md:w-1/2 m-2 p-6 space-x-4 rounded-lg">
            <div>
              <h3 className="text-xl md:text-3xl text-gray-200">
                Front-end Development
              </h3>
              <p className="text-sm mt-5 text-gray-300">
                I do Frontend with React, NextJs, Tailwind CSS, Material UI and
                More
              </p>
            </div>
            <div className="bg-black rounded-lg p-4 my-4 md:my-0">
              <MdOutlineScreenshotMonitor className="text-8xl text-green-400" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center bg-gray-700 w-full md:w-1/2 m-2 p-6 space-x-4 rounded-lg">
            <div>
              <h3 className="text-xl md:text-3xl text-gray-200">
                Back-end Development
              </h3>
              <p className="text-sm mt-5 text-gray-300">
                I do Backend with NodeJs, Django, Django-rest Framework,
                Mongoose
              </p>
            </div>
            <div className="bg-black rounded-lg p-4 my-4 md:my-0">
              {/* <img className="rounded-lg w-44" src={fullstack} alt="#" /> */}
              <FaLaptopCode className="text-8xl text-green-400" />
            </div>
          </div>
        </div>
        <div className="block md:flex justify-between">
          <div className="flex flex-col-reverse md:flex-row items-center bg-gray-700 w-full md:w-1/2 m-2 p-6 space-x-4 rounded-lg">
            <div>
              <h3 className="text-xl md:text-3xl text-gray-200">
                Full Stack Development
              </h3>
              <p className="text-sm mt-5 text-gray-300">
                Syncronizing Front-end and Back-end development is my
                crackerjacking skill
              </p>
            </div>
            <div className="bg-black rounded-lg p-4  my-4 md:my-0">
              {/* <img className="rounded-lg w-44" src={fullstack} alt="#" /> */}
              <BsStack className="text-8xl text-green-400" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center bg-gray-700 w-full md:w-1/2 m-2 p-6 space-x-4 rounded-lg">
            <div>
              <h3 className="text-xl md:text-3xl text-gray-200">Web Design</h3>
              <p className="text-sm mt-5 text-gray-300">
                Designing is my one of the favorite. I love to Design Web Pages
              </p>
            </div>
            <div className="bg-black rounded-lg p-4 my-4 md:my-0">
              {/* <img className="rounded-lg w-44" src={fullstack} alt="#" /> */}
              <BiSolidPaint className="text-8xl text-green-400" />
            </div>
          </div>
        </div>
      </div>
      {/* Education section */}

      <div className="flex items-center space-x-2 my-12 mx-6 md:mx-0">
        <h1 className="text-4xl mr-4">Education</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>
      <div>
        <div className="rightbox pl-2">
          <div className="rb-container">
            <ul className="rb">
              <li className="">
                <div className=" text-green-400 text-xs md:text-2xl">
                  B.Sc in Department of Mathematics
                </div>
                <div className="item-title dark:text-white text-gray-800 text-xl md:text-4xl">
                  Shahjalal University of Science & Technology
                </div>
              </li>
              <li className="">
                <div className="text-green-400 text-xs md:text-2xl">
                  Intermediate Science
                </div>
                <div className="item-title text-black dark:text-white text-xl md:text-4xl">
                  BAF Shaheen College Dhaka
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education section */}
    </div>
  );
};

export default About;
