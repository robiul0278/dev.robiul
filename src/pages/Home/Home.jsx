import Contacts from "../../components/Contacts";
import Education from "../../components/Education";
import FanFacts from "../../components/FanFacts";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

function Home() {
    return (
        <div className="max-w-[1366px] mx-auto bg-gray-900">
           <Hero/>
           <Projects/>
           <Skills/>
           <FanFacts/>
           <Education/>
           <Contacts/>
        </div>
    );
}

export default Home;
