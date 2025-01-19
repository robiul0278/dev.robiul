/* eslint-disable react/prop-types */
import { LuSquareArrowOutUpRight } from "react-icons/lu"

const SmallCard = ({ project }) => {
    const {  technology, name, description, website, github } = project;
    return (
        
        <div className=" border-gray border-t-0  text-white max-w-sm">
            <div className="text-sm text-gray-400 flex space-x-2 border-t-0 border-b-2 border-[#ABB2BF] p-2">
                {technology}
            </div>
            
            <div className="px-2 pt-2">
                <h2 className="font-bold text-lg">{name}</h2>
                <p className="text-sm text-gray-400">{description}</p>
            </div>

            <div className="flex items-center space-x-2 p-2">
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
                    className="px-5 py-1.5 flex items-center justify-center space-x-2 text-white text-sm font-medium border-color hover:border-[#C778DD]">
                    <span>Repo</span>
                    <LuSquareArrowOutUpRight />
                </a>
            </div>
        </div>

    )
}

export default SmallCard;