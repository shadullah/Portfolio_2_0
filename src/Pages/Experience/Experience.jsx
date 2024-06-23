import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { RiArrowDropRightFill } from "react-icons/ri";
import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Experience = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl mr-4">Experience</h1>
        <div className="h-1 w-32 bg-cyan-400"></div>
      </div>
      <div className="my-24">
        <div className="w-1/2 mx-auto flex justify-between space-x-8 items-start">
          <div className="side w-1/3">
            <p className="border-l-4 border-cyan-400 p-2">
              <button className="ml-3 text-sm font-medium text-cyan-400 whitespace-nowrap">
                Greenie Web
              </button>
            </p>
          </div>
          <div className="w-full space-y-4">
            <h3 className="text-xl font-semibold whitespace-nowrap">
              Software Developer Intern{" "}
              <a
                className="text-cyan-400 border-cyan-400 hover:border-b-2 hover:transition duration-500"
                href="https://greenieweb.co/"
                target="blank"
              >
                @ Greenie Web
              </a>
            </h3>
            <p className="text-sm">December 2022 - March 2023</p>
            <ul>
              <li className="flex items-start">
                {" "}
                <span className="text-cyan-400 text-3xl">
                  <RiArrowDropRightFill />
                </span>
                <p>Making desktop application with the help of ElectronJs</p>
              </li>
              <li className="flex items-start">
                {" "}
                <span className="text-cyan-400 text-3xl">
                  <RiArrowDropRightFill />
                </span>
                <p>Integrating ReactJs with ElectronJs application</p>
              </li>
              <li className="flex items-start">
                {" "}
                <span className="text-cyan-400 text-3xl">
                  <RiArrowDropRightFill />
                </span>
                <p>
                  With github, continuous integration & development were made
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl mr-4">Working Skills</h1>
        <div className="h-1 w-32 bg-cyan-400"></div>
      </div>
      <div className="my-12 flex items-center">
        <div className="w-1/2 m-6 space-y-4">
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <FaReact className="text-4xl font-extrabold" />
              <p className="font-bold">ReactJs</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-lime-400 rounded-md w-[450px] text-lime-800 font-bold text-right">
                80%
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <IoLogoJavascript className="text-4xl font-extrabold" />
              <p className="font-bold">Javascript</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-cyan-400 rounded-md w-[480px] text-cyan-800 font-bold text-right">
                85%
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiTailwindcss className="text-4xl font-extrabold" />
              <p className="font-bold">Tailwind CSS</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-orange-400 w-[530px] rounded-md text-orange-800 font-bold text-right">
                95%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <IoLogoCss3 className="text-4xl font-extrabold" />
              <p className="font-bold">CSS</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-violet-400 rounded-md w-[510px] text-violet-800 font-bold text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiMongodb className="text-4xl font-extrabold" />
              <p className="font-bold">MongoDB</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-purple-400 rounded-md w-[410px] text-purple-800 font-bold text-right">
                65%
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 m-6 space-y-4">
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <IoLogoPython className="text-4xl font-extrabold" />
              <p className="font-bold">Python</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-green-400 rounded-md w-[450px] text-green-800 font-bold text-right">
                80%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiDjango className="text-4xl font-extrabold" />
              <p className="font-bold">Django</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-yellow-400 rounded-md w-[480px] text-yellow-800 font-bold text-right">
                85%
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiDjango className="text-4xl font-extrabold" />
              <p className="font-bold">Django Rest Framwork</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-cyan-400 w-[440px] rounded-md text-cyan-800 font-bold text-right">
                75%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <FaNodeJs className="text-4xl font-extrabold" />

              <p className="font-bold">NodeJs</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-blue-400 w-[410px] rounded-md text-blue-800 font-bold text-right">
                65%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiPostgresql className="text-4xl font-extrabold" />

              <p className="font-bold">PostgreSQL</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-sky-400 w-[410px] rounded-md text-sky-800 font-bold text-right">
                65%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
