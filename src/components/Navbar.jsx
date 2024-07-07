import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:scale-110 transition-all ease-in-out duration-100"
        >
          <p className="blue-gradient_text">DS</p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 relative after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:rounded-md"
                : "text-black relative after:absolute after:w-0 after:hover:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:transition-all after:ease-in-out after:duration-150 after:rounded-md"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 relative after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:rounded-md"
                : "text-black relative after:absolute after:w-0 after:hover:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:transition-all after:ease-in-out after:duration-150 after:rounded-md"
            }
          >
            Projects
          </NavLink>
        </nav>
      </header>
    </>
  );
}
