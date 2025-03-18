
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="text-center p-8 relative z-10">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-resume-muted mb-6">Oops! Page not found</p>
          <a href="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors bg-resume-accent text-white hover:bg-resume-accent/90">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
