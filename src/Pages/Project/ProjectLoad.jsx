import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./ProjectLoad.css";

// eslint-disable-next-line react/prop-types
const ProjectLoad = ({ project, index }) => {
  const isEven = index % 2 == 0;
  return (
    <div>
      <div
        className="my-6 bg-gray-700 p-6 flex"
        data-aos="flip-up"
        data-aos-duration="3000"
      >
        {isEven ? (
          <>
            <div>
              <div className="w-full h-64 overflow-hidden relative">
                <div className="h-full overflow-y-scroll scrollbar-hide">
                  <img
                    src={project?.img} // Replace with your image URL
                    alt="Scrollable"
                    className="w-full"
                  />
                </div>
              </div>
              {/* <img className="w-96" src={project?.img} alt="#" /> */}
            </div>
            <div className="">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <button className="">
                  <a href={project.live} target="blank">
                    <BsGithub className="text-2xl" />
                  </a>
                </button>
                <button className="bg-gray-400">
                  <a href={project.live} target="blank">
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <button className="">
                  <a href={project.live} target="blank">
                    <BsGithub className="text-2xl" />
                  </a>
                </button>
                <button className="bg-gray-400">
                  <a href={project.live} target="blank">
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </button>
              </div>
            </div>
            <div>
              <div className="w-full h-64 overflow-hidden relative">
                <div className="h-full overflow-y-scroll scrollbar-hide">
                  <img
                    src={project?.img} // Replace with your image URL
                    alt="Scrollable"
                    className="w-full"
                  />
                </div>
              </div>
              {/* <img className="w-96" src={project?.img} alt="#" /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectLoad;
