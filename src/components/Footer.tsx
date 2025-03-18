
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-resume-dark text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-display font-semibold mb-4">Get in Touch</h2>
            <p className="text-resume-muted max-w-md">
              Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="md:col-span-6">
            <div className="flex flex-col md:items-end">
              <div className="space-y-2">
                <p className="text-sm text-resume-muted">Connect with me</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/prabhudev-guntur-65444489/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/PrabhudevG2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="mailto:gunturpx2020@email.iimcal.ac.in" 
                    className="text-resume-muted hover:text-white transition-colors" 
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-resume-muted/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-resume-muted">© {currentYear} Prabhudev Guntur • All Rights Reserved</p>
          <p className="text-sm text-resume-muted mt-2 md:mt-0 flex items-center">
            Made with 
            <span className="mx-1 inline-block">
              <div className="w-5 h-5 bg-gradient-to-br from-orange-500 via-red-500 to-blue-500 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/90">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
            </span> 
            for excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
