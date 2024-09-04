import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("product.json");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return [projects, loading];
};

export default useProjects;
