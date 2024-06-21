import { MdOutlinePersonOutline } from "react-icons/md";
import Banner from "../Pages/Banner";
import { useState } from "react";
import About from "./About/About";
import Project from "./Project/Project";
import Footer from "./shared/Footer/Footer";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";

const Home = () => {
  const [current, setcurrent] = useState("Experience");

  const loadCompo = () => {
    if (current == "About") {
      return <About />;
    } else if (current == "Project") {
      return <Project />;
    } else if (current == "Contact") {
      return <Contact />;
    } else {
      return <Experience />;
    }
  };

  return (
    <div>
      <Banner />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-12">
          <div
            onClick={() => setcurrent("Experience")}
            className="bg-lime-600 text-center py-3 rounded-lg cursor-pointer"
          >
            <span className="flex justify-center">
              <MdOutlinePersonOutline className="text-3xl" />
            </span>

            <button className="text-2xl">Experience</button>
          </div>
          <div
            onClick={() => setcurrent("About")}
            className="bg-lime-600 text-center py-3 rounded-lg cursor-pointer"
          >
            <span className="flex justify-center">
              <MdOutlinePersonOutline className="text-3xl" />
            </span>

            <button className="text-2xl">About</button>
          </div>

          <div
            onClick={() => setcurrent("Project")}
            className="bg-lime-600 text-center py-3 rounded-lg cursor-pointer"
          >
            <span className="flex justify-center">
              <MdOutlinePersonOutline className="text-3xl" />
            </span>

            <button className="text-2xl">Projects</button>
          </div>
          <div
            onClick={() => setcurrent("Contact")}
            className="bg-lime-600 text-center py-3 rounded-lg cursor-pointer"
          >
            <span className="flex justify-center">
              <MdOutlinePersonOutline className="text-3xl" />
            </span>

            <button className="text-2xl">Contact</button>
          </div>
        </div>
        <div>{loadCompo()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
