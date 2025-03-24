import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-bold">Welkom op fietsendief.nl</h1>
        <p className="text-gray-400 mt-4">Portfolio in progress...</p>
      </main>
      <Footer />
    </div>
  );
}
