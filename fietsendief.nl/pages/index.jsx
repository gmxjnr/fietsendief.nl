import Navbar from '../components/navbar';
import Footer from '../components/footer';

const projects = [
  {
    title: "Legal Products",
    description: "A Discord Server where you can buy FiveM scripts, Vehicles, and more.",
    tags: ["Discord Server", "LUA", "Freelancers"],
    image: "/images/project1.png",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, Next.js, and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/project2.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero-sectie */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black px-4">
          <h1 className="text-6xl font-extrabold mb-4 text-white">
            FIETSENDIEF
          </h1>
          <h2 className="text-2xl font-medium text-gray-400 mb-6">
            Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Building digital experiences with code and creativity
          </p>
          <a
            href="#projecten"
            className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
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

        {/* Projecten-sectie */}
        <section id="projecten" className="py-16 bg-gray-900 text-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
            <div className="relative">
          
              {/* Projectkaarten */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Projectkaart 1 */}
                <div className="project-card bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300">
                  <img src="/images/project1.png" alt="Project 1" className="rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold mb-2">ProtoGrammers</h3>
                  <p className="text-gray-400 mb-4">
                    (Currently in development)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Discord Server</span>
                    <span className="tag">PHP</span>
                    <span className="tag">Freelancers</span>
                  </div>
                </div>

                {/* Projectkaart 2 */}
                <div className="project-card bg-gradient-to-b from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300">
                  <img src="/images/project2.png" alt="Project 2" className="rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-gray-400 mb-4">
                    A personal portfolio website built with React, Next.js, and Tailwind CSS to showcase my projects and skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">React</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">Tailwind CSS</span>
                  </div>
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
            <a
              href="mailto:your-email@example.com"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
