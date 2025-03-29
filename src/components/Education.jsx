import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Education = () => {

        useEffect(() => {
                AOS.init();
            });

    const educationData = [
      {
        degree: "Diploma in Computer Technology",
        institution: "Pabna Polytechnic Institute",
        year: "2020 - 2024",
        location: "Pabna",
        details: "Focused on Web Development, Data Structures and Algorithms. Worked on multiple MERN stack projects.",
      },
      {
        degree: "Full-Stack Web Development Certification",
        institution: "Programming Hero",
        year: "2023",
        location: "Online",
        details: "Completed an extensive MERN stack development course, gaining hands-on experience in modern web technologies.",
      },
    ];
  
    return (
      <section id="education" className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-5 lg:p-0">
          <h2 className="lg:text-[28px] text-2xl font-bold text-[#C778DD] mb-6 text-center uppercase">
            #Education
          </h2>
  
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 border-gray" data-aos="fade-up"
              >
                <h3 className="lg:text-xl text-lg font-semibold text-[#C778DD]">
                  {edu.degree}
                </h3>
                <p className="lg:text-lg text-gray-400">{edu.institution}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>📅 {edu.year}</span>
                  <span>📍 {edu.location}</span>
                </div>
                <p className="mt-4 text-sm text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  