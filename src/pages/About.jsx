import { skills, experiences } from "../constants/index.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA.jsx";
import { useState } from "react";

export default function About() {
  const [textVisible, setTextVisible] = useState(null);

  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibol drop-shadow">
            Daniel
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Frontend Developer based in Moldova.</p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill, index) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div
                  className={`btn-front rounded-xl flex justify-center items-center relative `}
                  onMouseEnter={() => setTextVisible(index)}
                  onMouseLeave={() => setTextVisible(null)}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className={`w-1/2 h-1/2 object-contain ${
                      textVisible === index ? "blur-sm" : "blur-none"
                    }`}
                  />
                  <p
                    className={`absolute text-md  ${
                      textVisible === index ? "block" : "hidden"
                    }`}
                  >
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I have had the pleasure of working with a diverse range of clients
              over the past two years. Now, I'm eager to find a company where I
              can share my skills with the team and continue learning new
              things!
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-small"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
    </>
  );
}
