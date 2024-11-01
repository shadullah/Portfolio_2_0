import { RiArrowDropRightFill } from "react-icons/ri";
import Skills from "./Skills";

const Experience = () => {
  return (
    <div className="mx-6 md:mx-0">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl md:text-4xl mr-4">Experience</h1>
        <div className="h-1 w-32 bg-cyan-400"></div>
      </div>
      <div className="my-24 md-6 md:mx-0">
        <div className="w-full md:w-1/2 mx-auto block md:flex justify-between md:space-x-8 items-start">
          <div className="side w-1/3">
            <p className="border-l-4 border-cyan-400 p-2">
              <button className="ml-3 text-sm font-medium text-cyan-400 whitespace-nowrap">
                Greenie Web
              </button>
            </p>
          </div>
          <div className="w-full space-y-4">
            <h3 className="text-xl font-semibold">
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
        <h1 className="text-2xl md:text-4xl mr-2 md:mr-4">Working Skills</h1>
        <div className="h-1 w-32 bg-cyan-400"></div>
      </div>
      <Skills />
    </div>
  );
};

export default Experience;
