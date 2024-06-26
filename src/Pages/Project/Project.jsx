import useProjects from "../../Hooks/useProjects";
import ProjectLoad from "./ProjectLoad";

const Project = () => {
  const [projects] = useProjects();
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl md:text-4xl mr-4">Some Things I’ve Built</h1>
        <div className="h-1 w-32 bg-pink-400"></div>
      </div>
      {/* PROJECT CARD ADDING */}
      <div className="p-6 md:p-16">
        {projects?.map((project, index) => (
          <ProjectLoad
            key={project.id}
            index={index}
            project={project}
          ></ProjectLoad>
        ))}
      </div>
    </div>
  );
};

export default Project;
