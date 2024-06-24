import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return [projects, setProject];
};

export default useProjects;
