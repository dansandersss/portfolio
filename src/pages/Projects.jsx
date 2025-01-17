import { projects } from "../constants/index";
import { arrow } from "../assets/icons/";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibol drop-shadow">
            Projects
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've undertaken numerous projects over the years, and these are the
            ones I hold closest to my heart. They are categorized by the
            techniques used to create them. <br /> <br /> Your collaboration is
            highly valued!
          </p>
        </div>

        <ProjectCard
          projectType="vanilla"
          projects={projects.vanilla}
          projectTitle="Vanilla"
          projectSubTitle="HTML/CSS"
          projectSubSubTitle="and Javascript"
        />

        <ProjectCard
          projectType="reactJs"
          projects={projects.reactJs}
          projectTitle="React.js"
          projectSubTitle="Projects"
          projectSubSubTitle="and more"
        />

        <ProjectCard
          projectType="reactNative"
          projects={projects.reactNative}
          projectTitle="React"
          projectSubTitle="Native"
          projectSubSubTitle="and more"
        />

        <ProjectCard
          projectType="nextJs"
          projects={projects.nextJs}
          projectTitle="Next.Js"
          projectSubTitle="Projects"
          projectSubSubTitle="and more"
        />

        {/* <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
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
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <hr className="border-slate-200" />
        <CTA />
      </section>
    </>
  );
}
