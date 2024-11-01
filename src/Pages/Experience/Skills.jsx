import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="frontend block md:flex justify-between items-center m-3 space-x-6">
        <div className="w-1/2 flex justify-center items-center bg-cyan-600 p-12">
          <p className="text-center text-7xl font-bold text-white">UI</p>
        </div>
        <div className="w-1/2 space-y-4">
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <FaReact className="text-4xl font-extrabold" />
              <p className="font-bold">ReactJs</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-lime-400 rounded-md w-64 md:w-[530px] text-lime-800 font-bold text-right">
                90%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <RiNextjsFill className="text-4xl font-extrabold" />
              <p className="font-bold">Next Js</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-lime-400 rounded-md w-56 md:w-[450px] text-lime-800 font-bold text-right">
                80%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <SiTailwindcss className="text-4xl font-extrabold" />
              <p className="font-bold">Tailwind CSS</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-orange-400 w-64 md:w-[530px] rounded-md text-orange-800 font-bold text-right">
                95%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  fill="#0073E6"
                  fillRule="evenodd"
                  d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-bold">Material UI</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-orange-400 w-42 md:w-[350px] rounded-md text-orange-800 font-bold text-right">
                50%
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-3 ">
              <FaBootstrap className="text-4xl font-extrabold" />
              <p className="font-bold">Bootstrap</p>
            </div>
            <div className="bg-gray-400 rounded-md">
              <div className="bg-orange-400 w-64 md:w-[530px] rounded-md text-orange-800 font-bold text-right">
                98%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;