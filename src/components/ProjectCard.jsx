import { Link } from "react-router-dom";
import { projects } from "../constants";

export default function ProjectCard({
  projectType,
  projects,
  projectTitle,
  projectSubTitle,
  projectSubSubTitle,
}) {
  return (
    <>
      <div className="border-t my-10 py-6">
        <div className=" flex justify-center items-center">
          <h1 className="text-4xl font-bold">
            {projectTitle}{" "}
            <span className="blue-gradient_text font-semibol drop-shadow">
              {projectSubTitle}
            </span>{" "}
            {projectSubSubTitle}
          </h1>
        </div>

        <div>
          <div className="flex flex-wrap my-20 gap-16">
            {projects.map((project) => (
              <Link
                className="lg:w-[400px] w-full"
                key={project.name}
                to={`/${projectType}/${project.name}`}
              >
                <div className="block-container w-12 h-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />

                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="Project Icon"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-500">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
