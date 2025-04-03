
import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-security-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-6 w-6 text-security-primary mr-2" />
            <span className="text-xl font-bold">John Secure</span>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end text-sm text-gray-400 mb-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-security-primary mx-1 inline" />
              <span>and secure code</span>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} John Secure. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              Built for deployment on GitHub Pages
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
