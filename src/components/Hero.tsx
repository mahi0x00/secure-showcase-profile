
import { Award, Star } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-security-dark">
              Hi, I'm 
              <div className="relative inline-block ml-2">
                <span 
                  className="security-gradient bg-clip-text text-transparent cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Mahendhar Reddy
                  <span 
                    className={`transition-all duration-300 ${
                      isHovered ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                    } overflow-hidden inline-block`}
                  > Kadari</span>
                </span>
              </div>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              A Senior Application Security Engineer dedicated to building robust and secure software solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-security-primary text-white font-medium rounded-lg hover:bg-security-primary/90 transition-colors shadow-lg shadow-security-primary/20"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-gray-300 text-security-dark font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="relative w-full max-w-md">
              {/* Main illustration or profile image placeholder */}
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-security-primary/10 to-security-accent/20 flex items-center justify-center overflow-hidden shadow-xl">
                {/* This can be replaced with an actual profile image */}
                <div className="w-3/4 h-3/4 flex items-center justify-center">
                  <Award className="w-full h-full text-security-primary/60" />
                </div>
              </div>
              
              {/* Floating badge elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Star className="text-security-accent w-6 h-6" />
                <span className="font-medium text-sm">Professional</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Star className="text-security-primary w-6 h-6" />
                <span className="font-medium text-sm">Secure Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
