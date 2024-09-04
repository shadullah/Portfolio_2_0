import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { ThemeProvider } from "../context/useTheme";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  const lightMode = () => {
    setTheme("light");
  };
  const darkMode = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#00FFFF"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <ThemeProvider value={{ theme, lightMode, darkMode }}>
        <div className="">
          <Outlet></Outlet>
          <Home></Home>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Main;
