import Contacts from "../../components/Contacts";
import FanFacts from "../../components/FanFacts";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

function Home() {
    return (
        <div className="max-w-[1366px] mx-auto bg-[#282C33]">
           <Hero/>
           <Projects/>
           <Skills/>
           <FanFacts/>
           <Contacts/>
        </div>
    );
}

export default Home;
