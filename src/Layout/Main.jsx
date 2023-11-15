import { Outlet } from "react-router-dom";
import Navabar from "../Pages/Navabar";
import Home from "../Pages/Home";

const Main = () => {
    return (
        <div className="">
            <Outlet></Outlet>
            <Navabar></Navabar>
            <Home></Home>
        </div>
    );
};

export default Main;