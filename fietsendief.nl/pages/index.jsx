import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero-sectie */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black px-4">
          <h1 className="text-5xl font-extrabold mb-4 animate-zoom-in">
            Welkom op mijn portfolio!
          </h1>
          <p className="text-gray-400 text-lg mb-6 animate-slide-in">
            Ik ben Milan, een ontwikkelaar met een passie voor technologie en design.
          </p>
          <a
            href="#projecten"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 pulse-button"
          >
            Bekijk mijn projecten
          </a>
        </section>

        {/* Over mij-sectie */}
        <section id="over-mij" className="py-16 bg-gray-800 text-white animate-fade-in-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Over mij</h2>
            <p className="text-gray-400 text-lg">
              Ik ben een full-stack ontwikkelaar met ervaring in moderne webtechnologieën zoals React, Next.js en Tailwind CSS. Mijn doel is om mooie en functionele applicaties te bouwen.
            </p>
          </div>
        </section>

        {/* Projecten-sectie */}
        <section id="projecten" className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Mijn Projecten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg project-card">
                <img src="/images/project1.png" alt="Project 1" className="rounded-lg" />
                <h3 className="text-2xl font-bold mt-4">Project 1</h3>
                <p className="text-gray-400 mt-2">
                  Een korte beschrijving van het project.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Bekijk project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact-sectie */}
        <section id="contact" className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Neem contact op</h2>
            <p className="text-gray-400 mb-4">
              Heb je een vraag of wil je samenwerken? Stuur me een bericht!
            </p>
            <a
              href="mailto:your-email@example.com"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Stuur een e-mail
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
