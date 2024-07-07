import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants";
import CTA from "../components/CTA";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function ProjectPage() {
  const { projectType, projectName } = useParams();
  const project = projects[projectType]?.find((p) => p.name === projectName);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <section className="max-container">
      <div className="w-[80%]">
        <h1 className="text-5xl mb-2 font-bold">{project.name}</h1>
        <p>{project.description}</p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {project.screens.map((screen, index) => (
            <VerticalTimelineElement
              key={screen.image}
              // icon={
              //   <div className="flex justify-center items-center w-full h-full">
              //     <img
              //       src={experience.icon}
              //       alt={experience.company_name}
              //       className="w-[60%] h-[60%] object-contain"
              //     />
              //   </div>
              // }
              iconStyle={{ background: project.styleBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: project.styleBg,
                boxShadow: "none",
              }}
            >
              <div className="flex flex-col justify-center">
                <div className="mb-5">
                  <p className="font-bold">{screen.description}</p>
                </div>

                <img
                  className="w-[90%] cursor-pointer"
                  src={screen.image}
                  alt={`Screenshot ${index + 1}`}
                  onClick={() => openModal(screen.image)}
                />
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className="w-full flex justify-center items-center my-10 ">
        {project.link && (
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 text-2xl hover:scale-125 transition-all duration-200 ease-in-out hover:text-shadow-glow "
          >
            Live Link
          </Link>
        )}
      </div>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        center
        showCloseIcon={false}
      >
        <img
          src={selectedImage}
          alt="Enlarged Screenshot"
          className="w-full h-auto"
        />
      </Modal>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}
