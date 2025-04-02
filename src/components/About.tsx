
import { ShieldCheck, Lock, Search, Code, AlertTriangle, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-security-light/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-2/5 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6">
              As a Senior Application Security Engineer with extensive experience in the field, I specialize in identifying and mitigating security vulnerabilities in web and mobile applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My approach combines technical expertise with a deep understanding of business priorities, allowing me to develop security solutions that protect assets while enabling innovation.
            </p>
            <p className="text-lg text-gray-600">
              I believe in building security into the development process from the ground up, working closely with development teams to create a culture of security awareness.
            </p>
          </div>
          
          <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="rounded-full bg-security-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Search className="text-security-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Vulnerability Assessment</h3>
              <p className="text-gray-600">
                Conducting thorough security assessments to identify vulnerabilities before they can be exploited.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="rounded-full bg-security-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="text-security-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Secure Code Review</h3>
              <p className="text-gray-600">
                Analyzing source code to find security flaws and suggesting secure coding practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="rounded-full bg-security-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <AlertTriangle className="text-security-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Threat Modeling</h3>
              <p className="text-gray-600">
                Identifying potential threats and attack vectors to prioritize security efforts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="rounded-full bg-security-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-security-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-security-dark mb-2">Security Architecture</h3>
              <p className="text-gray-600">
                Designing robust security frameworks that protect applications at every layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
