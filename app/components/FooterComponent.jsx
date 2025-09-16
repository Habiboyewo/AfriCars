export default function FooterComponent() {
  return (
    <footer className="border-t border-gray-300 py-4 dark:border-gray-600">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-5 py-3 md-py2 flex flex-col-reverse md:flex-row items-center md:justify-between">
        
        <p className="text-sm text-gray-700 mt-4 md:mt-0 dark:text-gray-200">
          © {new Date().getFullYear()} AfriCars • Frowork Ltd (RC 8090661)
        </p>

        <nav aria-label="Footer" className="flex gap-6 text-sm mb-4 md:mb-0">
          <a href="#book" className="hover:underline">Book</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#trust" className="hover:underline">Policies</a>
          <a
            href="https://www.instagram.com/myafricars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
