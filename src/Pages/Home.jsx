import { MdOutlinePersonOutline } from "react-icons/md";
import Banner from "../Pages/Banner";
import { useState } from "react";
import About from "./About/About";
import Project from "./Project/Project";
import Footer from "./shared/Footer/Footer";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import { SiImessage } from "react-icons/si";
import { LuListTodo } from "react-icons/lu";
import { TbFileStack } from "react-icons/tb";

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
            className="py-2 px-6 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-900 transition font-medium duration-500 cursor-pointer text-center"
          >
            <span className="flex justify-center">
              <TbFileStack className="text-3xl" />
            </span>

            <button className="text-2xl">Experience</button>
          </div>
          <div
            onClick={() => setcurrent("About")}
            className="py-2 px-6 border-2 border-green-400 text-green-400 rounded hover:bg-green-900 transition font-medium duration-500 text-center cursor-pointer"
          >
            <span className="flex justify-center">
              <MdOutlinePersonOutline className="text-3xl" />
            </span>

            <button className="text-2xl">About</button>
          </div>

          <div
            onClick={() => setcurrent("Project")}
            className="py-2 px-6 border-2 border-pink-400 text-pink-400 rounded hover:bg-pink-900 transition font-medium duration-500 text-center cursor-pointer"
          >
            <span className="flex justify-center">
              <LuListTodo className="text-3xl" />
            </span>

            <button className="text-2xl">Projects</button>
          </div>
          <div
            onClick={() => setcurrent("Contact")}
            className="py-2 px-6 border-2 border-violet-400 text-violet-400 rounded hover:bg-violet-900 transition font-medium duration-500 text-center cursor-pointer"
          >
            <span className="flex justify-center">
              <SiImessage className="text-3xl" />
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
