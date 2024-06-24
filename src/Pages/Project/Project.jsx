import useProjects from "../../Hooks/useProjects";
import ProjectLoad from "./ProjectLoad";

const Project = () => {
  const [projects] = useProjects();
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl mr-4">Projects</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>
      {/* PROJECT CARD ADDING */}
      <div className="grid sm:grd-cols-1 lg:grid-cols-2 gap-10 p-16">
        {projects.map((project) => (
          <ProjectLoad key={project.id} project={project}></ProjectLoad>
        ))}
      </div>
    </div>
  );
};

export default Project;
