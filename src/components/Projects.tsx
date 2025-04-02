
import { useState } from "react";
import { ExternalLink, Github, Shield, Lock, AlertTriangle } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Enterprise API Security Framework",
      description: "Developed a comprehensive framework for securing RESTful APIs, including authentication, authorization, rate limiting, and data validation components.",
      tags: ["API Security", "OAuth 2.0", "Rate Limiting", "OpenAPI"],
      icon: Shield,
      link: "#",
      github: "#"
    },
    {
      title: "Automated Vulnerability Scanner",
      description: "Built a customized security scanning tool that integrates with CI/CD pipelines to detect vulnerabilities in both code and dependencies.",
      tags: ["SAST", "DAST", "DevSecOps", "Python"],
      icon: AlertTriangle,
      link: "#",
      github: "#"
    },
    {
      title: "Secure Authentication System",
      description: "Implemented a robust authentication system with MFA, passwordless options, and brute-force protections for a financial services client.",
      tags: ["Authentication", "MFA", "Security Architecture", "JWT"],
      icon: Lock,
      link: "#",
      github: "#"
    },
    {
      title: "Security Awareness Training Platform",
      description: "Created an interactive platform to train developers on secure coding practices through hands-on exercises and simulated vulnerabilities.",
      tags: ["Training", "Secure Coding", "Educational", "React"],
      icon: Shield,
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Security Posture Management",
      description: "Designed and implemented a cloud security assessment solution for AWS and Azure environments that continuously monitors for misconfigurations.",
      tags: ["Cloud Security", "AWS", "Azure", "IaC"],
      icon: AlertTriangle,
      link: "#",
      github: "#"
    },
    {
      title: "Open Source Security Toolkit",
      description: "Contributed to and maintained an open source collection of security tools for penetration testers and security researchers.",
      tags: ["Open Source", "Security Tools", "Community", "Python"],
      icon: Lock,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of security projects I've developed and contributed to throughout my career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            
            return (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 security-gradient opacity-0 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-5' : ''
                }`}></div>
                
                <div className="p-6">
                  <div className="rounded-full bg-security-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <ProjectIcon className="text-security-primary w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-security-dark mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-medium px-2 py-1 bg-security-primary/10 text-security-primary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <a 
                      href={project.link} 
                      className="text-security-primary hover:text-security-primary/80 flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Project</span>
                    </a>
                    
                    <a 
                      href={project.github} 
                      className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
