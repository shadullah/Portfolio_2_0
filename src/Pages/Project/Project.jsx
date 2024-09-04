import { InfinitySpin } from "react-loader-spinner";
import useProjects from "../../Hooks/useProjects";
import ProjectLoad from "./ProjectLoad";

const Project = () => {
  const [projects, loading] = useProjects();

  // useEffect(() => {
  //   setTimeout(() => {
  //     !loading;
  //   }, 3000);
  // });

  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl md:text-4xl mr-4">Some Things I’ve Built</h1>
        <div className="h-1 w-32 bg-pink-400"></div>
      </div>
      {/* PROJECT CARD ADDING */}
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <InfinitySpin
              visible={true}
              width="200"
              color="#4fa94d"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </>
      ) : (
        <>
          <div className="p-6 md:p-16">
            {projects?.map((project, index) => (
              <ProjectLoad
                key={project.id}
                index={index}
                project={project}
              ></ProjectLoad>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
