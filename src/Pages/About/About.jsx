import { SiDependabot } from "react-icons/si";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl mr-4">About Me</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>
      <div className="flex items-center justify-between my-12">
        <div className="w-1/3 text-9xl flex justify-center text-gray-200">
          <SiDependabot />
        </div>
        <article className="w-full text-end">
          Hello! My name is Shadullah and I enjoy creating things that live on
          the internet. My interest in web development started back in 2022 when
          the whole world got stucked with covid-19. Since then I am constantly
          Learing new technologies and exploring how to make applications more
          efficiently.
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at{" "}
          <span className="text-cyan-400 font-bold">Greenie Web</span>. My main
          focus these days is building accessible, inclusive products and
          digital experiences for a variety of clients.
          <br />
          <br />I also recently started learning Docker which play vital role to
          build a web app using{" "}
          <span className="text-cyan-400 font-bold">Node, Django & React</span>.
        </article>
      </div>

      {/* what do i do section */}

      <div className="flex items-center space-x-2 my-12">
        <h1 className="text-4xl mr-4">What Do I Do</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>

      {/* what do i do section */}

      {/* Education section */}

      <div className="flex items-center space-x-2 my-12">
        <h1 className="text-4xl mr-4">Education</h1>
        <div className="h-1 w-32 bg-green-400"></div>
      </div>
      <div>
        <div className="rightbox">
          <div className="rb-container">
            <ul className="rb">
              <li className="">
                <div className=" text-green-400 text-2xl">
                  B.Sc in Department of Mathematics
                </div>
                <div className="item-title text-4xl whitespace-nowrap">
                  Shahjalal University of Science & Technology
                </div>
              </li>
              <li className="">
                <div className="text-green-400 text-2xl">
                  Intermediate Science
                </div>
                <div className="item-title text-4xl">
                  BAF Shaheen College Dhaka
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education section */}
    </div>
  );
};

export default About;
