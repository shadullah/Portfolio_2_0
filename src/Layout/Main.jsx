import { Outlet } from "react-router-dom";
import Navabar from "../Pages/Navabar";
import Home from "../Pages/Home";
import Banner from "../Pages/Banner";

const Main = () => {
  return (
    <div className="">
      <Outlet></Outlet>
      <Banner />
      {/* <Navabar></Navabar> */}
      <Home></Home>
    </div>
  );
};

export default Main;
