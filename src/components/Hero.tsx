
import { ShieldCheck, Lock, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-security-primary/10 rounded-full">
              <p className="text-security-primary text-sm font-medium">Senior Application Security Engineer</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-security-dark">
              Securing Applications,
              <span className="block security-gradient bg-clip-text text-transparent">One Line at a Time</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              I help organizations build secure software by identifying vulnerabilities and implementing robust security measures.
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
                  <ShieldCheck className="w-full h-full text-security-primary/60" />
                </div>
              </div>
              
              {/* Floating badge elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Code className="text-security-accent w-6 h-6" />
                <span className="font-medium text-sm">Secure Code</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                <Lock className="text-security-primary w-6 h-6" />
                <span className="font-medium text-sm">Vulnerability Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
