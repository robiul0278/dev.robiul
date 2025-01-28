import { useEffect, useState } from "react";
import Card from './../../components/Card';
import LoadingPage from './../../components/LoadingPage';
import { useLocation } from "react-router-dom";
import SmallProjects from "./SmallProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(error)
  // Get the current path
  const location = useLocation();
  const currentPath = location.pathname;


  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects.json");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data); // Set projects data to state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setLoading(false);
      });
  }, []);
  return (
    <section className="relative">
      <div className="max-w-[1024px] mx-auto p-5 lg:p-0">
        {/* Title Section */}
        <div className="items-center justify-between  relative">
        <div className="">
          <span className="text-[#C778DD] text-[25px] font-semibold">{currentPath.charAt(0)}<span className=" text-white text-[22px] whitespace-nowrap">{currentPath.slice(1)}</span></span>
          <p className="text-sm pl-3">List of my projects</p>
        </div>

          <div className="flex items-center text-[26px] lg:text-[32px] mt-10">
            <span className="text-[#C778DD] font-semibold mr-1">#</span>
            <h2 className="font-bold text-white whitespace-nowrap">Complete-Works</h2>
            <hr className="flex-grow ml-3 border-t border-[#C778DD] lg:w-[212px]" />
          </div>
        </div>

        {/* Project Cards */}
        <div className="mt-5">
          {projects.length > 0 && !loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <LoadingPage />
          )}
        </div>

      </div>
      <SmallProjects/>
    </section>



  )
}

export default Projects;