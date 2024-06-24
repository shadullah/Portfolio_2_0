import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectLoad = ({ project }) => {
  const { id } = project;
  //   console.log(project);
  let navigate = useNavigate();

  return (
    <div>
      <div
        className="card bg-base-100 shadow-xl image-full"
        data-aos="flip-up"
        data-aos-duration="3000"
      >
        <figure>
          <img src={project?.img} alt="#" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.name}</h2>
          <p>{project.desc}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/${id}`)}
              className="btn btn-warning"
            >
              Details
            </button>
            <button className="btn btn-warning">
              <a href={project.live} target="blank">
                Visit Site
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLoad;
