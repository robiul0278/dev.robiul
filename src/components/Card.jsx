/* eslint-disable react/prop-types */
import { LuSquareArrowOutUpRight } from "react-icons/lu"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";


const Card = ({ project }) => {
    const { image, technology, name, description, website, github } = project;

        useEffect(() => {
            AOS.init();
        });
    return (
        
        <div 
       data-aos="flip-left"
        className="border border-gray  text-white w-full hover:-translate-y-1 transition-all">
            <div className="relative bg-gray-800 h-48 overflow-hidden">
                <img
                    src={image}
                    alt="Project Image"
                    className="object-cover w-full h-full scrollImg"
                />
              
            </div>

            <div className="text-sm font-semibold text-gray-300 flex space-x-2 border-t border-b border-[#ABB2BF] p-2">
                {technology}
            </div>


            <div className="px-2 pt-2">
                <h2 className="font-semibold text-lg">{name}</h2>
                <p className="text-sm text-gray-400">{description?.slice(0, 85)}{description?.length > 85 && '...'}</p>
            </div>

            <div className="flex items-center space-x-2 p-3 ">
                <a href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-1.5 flex items-center justify-center space-x-2 text-white text-sm font-medium border border-color hover:border-[#C778DD]">
                    <span>Live</span>
                    <LuSquareArrowOutUpRight />
                </a>
                <a href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-1.5 flex items-center justify-center space-x-2 text-white text-sm font-medium border-color hover:text-[#C778DD]">
                    <span>Repo</span>
                    <LuSquareArrowOutUpRight />
                </a>
            </div>
        </div>

    )
}

export default Card