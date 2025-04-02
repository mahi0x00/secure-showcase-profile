
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Application Security Engineer",
      company: "TechSecure Solutions",
      period: "2021 - Present",
      description: [
        "Lead security assessments for critical web and mobile applications",
        "Implemented a DevSecOps pipeline reducing security issues by 45%",
        "Developed secure coding guidelines and trained 50+ developers",
        "Performed threat modeling for new product initiatives"
      ]
    },
    {
      title: "Application Security Engineer",
      company: "CyberDefend Inc.",
      period: "2018 - 2021",
      description: [
        "Conducted security code reviews for Java and JavaScript applications",
        "Performed penetration testing on APIs and web services",
        "Built automated security scanning into CI/CD pipelines",
        "Identified and remediated critical vulnerabilities in production applications"
      ]
    },
    {
      title: "Security Consultant",
      company: "SecureNet Consulting",
      period: "2016 - 2018",
      description: [
        "Provided security consultation for financial and healthcare clients",
        "Performed web application and network penetration testing",
        "Created detailed security assessment reports with remediation strategies",
        "Developed security training materials for client development teams"
      ]
    },
    {
      title: "Software Developer",
      company: "InnovateTech",
      period: "2014 - 2016",
      description: [
        "Developed full-stack web applications using JavaScript frameworks",
        "Designed and implemented RESTful APIs",
        "Collaborated with the security team to address application vulnerabilities",
        "Maintained and improved code quality through unit testing and code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-security-light/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career journey has equipped me with diverse experience in application security across multiple industries.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative z-10">
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-security-primary border-4 border-white"></div>
                
                {/* Content box */}
                <div className="w-full md:w-5/12 ml-8 md:ml-0 md:mx-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-security-primary" />
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-security-dark">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <Briefcase className="w-4 h-4 text-security-primary" />
                      <span className="text-gray-700">{exp.company}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="block w-1.5 h-1.5 rounded-full bg-security-primary mt-1.5"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
