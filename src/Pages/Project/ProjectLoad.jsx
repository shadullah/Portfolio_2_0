import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./ProjectLoad.css";
import { RiArrowDropRightFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const ProjectLoad = ({ project, index }) => {
  const isEven = index % 2 == 0;
  return (
    <div>
      <div
        className="my-6 p-0 md:p-6 block md:flex items-center"
        data-aos="flip-up"
        data-aos-duration="3000"
      >
        {isEven ? (
          <>
            <div className="w-full md:w-8/12 h-36 md:h-96 overflow-hidden relative shadow-pink-400/25 shadow-xl rounded-lg my-12 md:my-0">
              <div className="h-full overflow-y-scroll scrollbar-hide">
                <img src={project?.img} alt="Scrollable" className="w-full" />
              </div>
            </div>

            <div className="text-center md:text-right w-full md:w-4/12 space-y-3">
              <p className="font-medium text-xs md:text-sm text-pink-500">
                Featured Project
              </p>
              <h2 className="text-xl md:text-3xl font-bold">{project.name}</h2>
              <p className="text-sm">{project.desc}</p>
              <ul className=" shadow-lg shadow-pink-300/25 bg-gray-600/50 p-4 text-left text-md">
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project.one}</p>
                </li>
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project.two}</p>
                </li>
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project.three}</p>
                </li>
              </ul>
              <p className="text-sm md:text-lg mt-6 p-3">{project.techs}</p>
              <div className="space-x-6">
                <button className="text-blue-200">
                  <a href={project.client} title="Github" target="blank">
                    <BsGithub className="text-xl" />
                  </a>
                </button>
                <button className="text-blue-200">
                  <a href={project.live} title="Live Link" target="blank">
                    <FaArrowUpRightFromSquare className="text-lg" />
                  </a>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-center md:text-left w-full md:w-4/12 space-y-3 my-12 md:my-0">
              <p className="font-medium text-xs md:text-sm text-pink-500">
                Featured Project
              </p>
              <h2 className="text-xl md:text-3xl font-bold">{project?.name}</h2>
              <p className="text-sm">{project?.desc}</p>
              <ul className="relative bg-gray-600/50 p-4 text-right text-md shadow-lg shadow-pink-300/25">
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project?.one}</p>
                </li>
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project?.two}</p>
                </li>
                <li className="flex items-start">
                  {" "}
                  <span className="text-pink-400 text-3xl">
                    <RiArrowDropRightFill />
                  </span>
                  <p className="text-sm md:text-base">{project?.three}</p>
                </li>
              </ul>
              <p className="text-sm md:text-lg mt-6 p-3">{project.techs}</p>
              <div className="space-x-6">
                <button className="text-blue-200">
                  <a href={project.client} title="Github" target="blank">
                    <BsGithub className="text-xl" />
                  </a>
                </button>
                <button className="text-blue-200">
                  <a href={project.live} title="Live Link" target="blank">
                    <FaArrowUpRightFromSquare className="text-lg" />
                  </a>
                </button>
              </div>
            </div>

            <div className="w-full md:w-8/12 h-36 md:h-96 overflow-hidden relative shadow-xl shadow-pink-400/25 rounded-lg my-6 md:my-0">
              <div className="h-full overflow-y-scroll scrollbar-hide">
                <img
                  src={project?.img} // Replace with your image URL
                  alt="Scrollable"
                  className="w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectLoad;
