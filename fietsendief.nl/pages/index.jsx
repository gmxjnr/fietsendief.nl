import { Analytics } from "@vercel/analytics/react"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const projects = [
  {
    title: "ProtoGrammers",
    description: "A Discord Server to sell FiveM Scripts. And more!",
    tags: ["LUA", "Python", "Discord Server", "FiveM", "JavaScript", "HTML/CSS"],
    image: "/images/project1.png",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, Next.js, and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/project2.png",
  },
];

const skills = [
  { name: "Python", level: 57, category: "languages" },
  { name: "C++", level: 15, category: "languages" },
  { name: "Lua", level: 37, category: "languages" },
  { name: "HTML/CSS", level: 83, category: "languages" },
  { name: "JavaScript", level: 57, category: "languages" },
  { name: "Git", level: 21, category: "tools" },
  { name: "VS Code", level: 100, category: "tools" },
  { name: "Next.js", level: 48, category: "tools" },
  { name: "React", level: 36, category: "tools" },
  { name: "Tailwind CSS", level: 37, category: "tools" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (!skillsSection) return;

      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Bereken de voortgang op basis van de zichtbaarheid van de sectie
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(
          0,
          Math.min(100, ((windowHeight - rect.top) / rect.height) * 100)
        );
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev); // Wissel tussen tonen en verbergen
    }, 3000); // Elke 3 seconden wisselen
    return () => clearInterval(interval); // Opruimen van de interval
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero-sectie */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black px-4">
          <h1
            className={`text-6xl font-extrabold mb-4 text-white ${
              showText ? "animate-fade-in-down" : "animate-fade-out-up"
            }`}
          >
            FIETSENDIEF
          </h1>
          <h2
            className={`text-2xl font-medium text-gray-400 mb-6 ${
              showText ? "animate-fade-in" : "animate-fade-out"
            }`}
          >
            Developer
          </h2>
          <p
            className={`text-gray-400 text-lg mb-8 ${
              showText ? "animate-fade-in" : "animate-fade-out"
            }`}
          >
            Building digital experiences with code and creativity
          </p>
          <a
            href="#projecten"
            className={`px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300 ${
              showText ? "animate-fade-in" : "animate-fade-out"
            }`}
          >
            View My Work
          </a>
        </section>

        {/* Scroll-indicator */}
        <div className="flex justify-center mt-8">
          <a href="#over-mij" className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Over mij-sectie */}
        <section id="over-mij" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-400 text-lg mb-6">
                Hello! I'm <span className="text-white font-bold">Milan</span>, a passionate developer focused on creating innovative digital solutions. With experience in modern web technologies like React, Next.js, and Tailwind CSS, I aim to build beautiful and functional applications.
              </p>
              <p className="text-gray-400 text-lg">
                I enjoy building projects that challenge me to learn new skills and push the boundaries of what I can create.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src="/images/avatar.gif"
                alt="Milan"
                className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Skills-sectie */}
        <section id="skills" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Linker kolom */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
                {skills
                  .filter((skill) => skill.category === "languages")
                  .map((skill, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <span className="w-1/4 text-sm font-medium">{skill.name}</span>
                      <div className="w-3/4 flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-200"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          ></div>
                        </div>
                        <span className="ml-4 text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Rechter kolom */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Tools & Frameworks</h3>
                {skills
                  .filter((skill) => skill.category === "tools")
                  .map((skill, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <span className="w-1/4 text-sm font-medium">{skill.name}</span>
                      <div className="w-3/4 flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-200"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          ></div>
                        </div>
                        <span className="ml-4 text-sm text-gray-400">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projecten-sectie */}
        <section id="projecten" className="py-16 bg-gray-900 text-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
            <div className="relative">
              <div className="relative w-full max-w-3xl mx-auto">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-slide-in">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-gray-400 mb-4">{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={prevProject}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextProject}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact-sectie */}
        <section id="contact" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-400 mb-4">
              Have a question or want to work together? Send me a message!
            </p>
            <div className="flex justify-center items-center gap-4">
              {/* Contact Me Button */}
              <a
                href="mailto:contact@milanramakers.nl"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Contact Me
              </a>

              {/* Social Media Icons */}
              <a
                href="https://github.com/gmxjnr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/milan-ramakers-02618422a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/milanbtw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>
