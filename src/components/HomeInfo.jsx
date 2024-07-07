import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Daniel</span>
        👋
        <br />A Frontend Developer from Moldova 🇭🇷
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many clients
          <br /> doing my best to bring their ideas to life
          <br /> and by that I've picked up many skills along the way
        </p>

        <Link
          to="/about"
          className="neo-brutalism-white neo-btn flex items-center gap-0 hover:gap-10 transition-all duration-200 ease-in-out"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to their finish lines
          <br /> Curious about what I made?
        </p>

        <Link
          to="/projects"
          className="neo-brutalism-white neo-btn flex items-center gap-0 hover:gap-10 transition-all duration-200 ease-in-out"
        >
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link
          to="/contact"
          className="neo-brutalism-white neo-btn flex items-center gap-0 hover:gap-10 transition-all duration-200 ease-in-out"
        >
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
