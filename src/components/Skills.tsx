
import { useState } from 'react';
import { 
  Shield, 
  Code, 
  FileSearch, 
  FileWarning, 
  Loader, 
  Lock, 
  AlertTriangle, 
  Bug, 
  BarChart, 
  TrendingUp,
  BookOpen,
  HardDrive,
  GitBranch,
  Terminal,
  FileCode,
  Database,
  Network,
  Workflow,
  CheckCircle,
  Webhook,
  Cloud,
  ServerCrash,
  Wrench,
  Search,
  BrainCircuit
} from 'lucide-react';

const Tools = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <h3 className="text-2xl font-semibold text-security-dark mb-6 text-center">Tools & Technologies</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
        {[
          { name: "Burp Suite", icon: "/tools/burpsuite.svg", category: "testing" },
          { name: "OWASP ZAP", icon: "/tools/owasp.svg", category: "testing" },
          { name: "SonarQube", icon: "/tools/sonarqube.svg", category: "development" },
          { name: "Checkmarx", icon: "/tools/checkmarx.svg", category: "development" },
          { name: "Veracode", icon: "/tools/veracode.svg", category: "testing" },
          { name: "Fortify", icon: "/tools/fortify.svg", category: "development" },
          { name: "Docker", icon: "/tools/docker.svg", category: "deployment" },
          { name: "Kubernetes", icon: "/tools/kubernetes.svg", category: "deployment" },
          { name: "Jenkins", icon: "/tools/jenkins.svg", category: "deployment" },
          { name: "GitHub", icon: "/tools/github.svg", category: "development" },
          { name: "Jira", icon: "/tools/jira.svg", category: "requirements" },
          { name: "Wireshark", icon: "/tools/wireshark.svg", category: "testing" },
        ].map((tool) => (
          <div 
            key={tool.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full"
          >
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src={tool.icon} 
                alt={`${tool.name} logo`} 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            <span className="text-sm font-medium text-center text-security-dark">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All SSDLC' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'testing', label: 'Testing' },
    { id: 'deployment', label: 'Deployment' },
    { id: 'maintenance', label: 'Maintenance' },
  ];
  
  const skills = [
    // Requirements Phase
    { 
      name: 'Security Requirements', 
      category: 'requirements', 
      icon: BookOpen,
      description: 'Defining security specifications and compliance requirements'
    },
    { 
      name: 'Threat Modeling', 
      category: 'requirements', 
      icon: AlertTriangle,
      description: 'Identifying potential threats and vulnerabilities'
    },
    { 
      name: 'Risk Assessment', 
      category: 'requirements', 
      icon: BarChart,
      description: 'Evaluating security risks and business impact'
    },
    
    // Design Phase
    { 
      name: 'Secure Architecture', 
      category: 'design', 
      icon: FileSearch,
      description: 'Designing with security-first approach'
    },
    { 
      name: 'API Security Design', 
      category: 'design', 
      icon: Workflow,
      description: 'Implementing secure API design patterns'
    },
    { 
      name: 'Authentication & Authorization', 
      category: 'design', 
      icon: Lock,
      description: 'Designing robust identity and access control systems'
    },
    
    // Development Phase
    { 
      name: 'Secure Coding Practices', 
      category: 'development', 
      icon: Code,
      description: 'Implementing secure programming techniques'
    },
    { 
      name: 'Code Reviews', 
      category: 'development', 
      icon: FileCode,
      description: 'Identifying security flaws through peer review'
    },
    { 
      name: 'DevSecOps Integration', 
      category: 'development', 
      icon: GitBranch,
      description: 'Embedding security in CI/CD processes'
    },
    
    // Testing Phase
    { 
      name: 'SAST/DAST', 
      category: 'testing', 
      icon: Bug,
      description: 'Static and dynamic application security testing'
    },
    { 
      name: 'Penetration Testing', 
      category: 'testing', 
      icon: Shield,
      description: 'Simulating attacks to identify vulnerabilities'
    },
    { 
      name: 'Security Unit Testing', 
      category: 'testing', 
      icon: FileWarning,
      description: 'Testing individual components for security flaws'
    },
    
    // Deployment Phase
    { 
      name: 'Secure Deployment', 
      category: 'deployment', 
      icon: HardDrive,
      description: 'Ensuring secure configuration during deployment'
    },
    { 
      name: 'Infrastructure Security', 
      category: 'deployment', 
      icon: Network,
      description: 'Securing cloud and on-prem infrastructure'
    },
    { 
      name: 'Container Security', 
      category: 'deployment', 
      icon: Database,
      description: 'Securing containerized applications and orchestration'
    },
    
    // Maintenance Phase
    { 
      name: 'Security Monitoring', 
      category: 'maintenance', 
      icon: TrendingUp,
      description: 'Continuous monitoring for security incidents'
    },
    { 
      name: 'Incident Response', 
      category: 'maintenance', 
      icon: Loader,
      description: 'Protocols for handling security breaches'
    },
    { 
      name: 'Patch Management', 
      category: 'maintenance', 
      icon: Terminal,
      description: 'Systematic management of security updates'
    },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Secure SDLC Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in implementing security throughout the entire software development lifecycle, from requirements to maintenance.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-security-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div 
                key={skill.name} 
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center security-gradient text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-security-dark">{skill.name}</h3>
                </div>
                
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
        
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
