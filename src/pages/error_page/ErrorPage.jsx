import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-accent px-4 py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="text-center max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-clr-primary drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-primary text-accent px-5 sm:px-6 py-3 rounded-lg shadow-md text-base sm:text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <FaHome className="text-lg sm:text-xl" /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
