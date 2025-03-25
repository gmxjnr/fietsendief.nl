export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Milan. Alle rechten voorbehouden.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/gmxjnr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/milan-ramakers-02618422a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/milanbtw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}