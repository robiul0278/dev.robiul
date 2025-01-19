import { useEffect, useState } from "react";
import Card from "./Card";
import { MdDoubleArrow } from "react-icons/md";
import LoadingPage from './LoadingPage';
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(error)

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
            <div className="max-w-[1024px] mx-auto mt-12">
                <div className="flex items-center justify-between text-[32px] relative">
                    {/* Title Section */}
                    <div className="flex items-center w-3/4">
                        <span className="text-[#C778DD] font-semibold mr-1">#</span>
                        <h2 className="font-bold text-white whitespace-nowrap">projects</h2>
                        <hr className="flex-grow ml-3 border-t border-[#C778DD] max-w-[512px]" />
                    </div>

                    {/* View All Section */}
                    <Link to="/projects"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center text-[16px] hover:text-[#C778DD] text-white space-x-2 cursor-pointer hover:underline">
                        <a>View all</a>
                        <MdDoubleArrow />
                    </Link>
                </div>

                {/* Project Cards */}
                <div className="mt-5">
                    {projects.length > 0 && !loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {projects.slice(0, 3).map((project) => (
                                <Card key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <LoadingPage />
                    )}
                </div>

            </div>
        </section>



    )
}

export default Projects;