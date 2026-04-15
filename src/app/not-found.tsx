import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-bold text-[#101915] mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-[#101915] text-white rounded-full hover:bg-opacity-90 transition-all font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
