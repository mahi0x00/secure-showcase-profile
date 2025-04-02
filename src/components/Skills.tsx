
import { useState } from 'react';
import { Shield } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'security', label: 'Security' },
    { id: 'tools', label: 'Tools & Platforms' },
    { id: 'languages', label: 'Languages & Frameworks' },
    { id: 'methodologies', label: 'Methodologies' },
  ];
  
  const skills = [
    // Security skills
    { name: 'Penetration Testing', category: 'security', level: 95 },
    { name: 'SAST/DAST', category: 'security', level: 90 },
    { name: 'Security Code Review', category: 'security', level: 95 },
    { name: 'Threat Modeling', category: 'security', level: 90 },
    { name: 'OWASP Top 10', category: 'security', level: 100 },
    { name: 'API Security', category: 'security', level: 85 },
    { name: 'Cloud Security', category: 'security', level: 80 },
    
    // Tools & Platforms
    { name: 'Burp Suite', category: 'tools', level: 95 },
    { name: 'OWASP ZAP', category: 'tools', level: 90 },
    { name: 'Metasploit', category: 'tools', level: 85 },
    { name: 'Docker/Kubernetes', category: 'tools', level: 80 },
    { name: 'AWS Security', category: 'tools', level: 85 },
    { name: 'Azure Security', category: 'tools', level: 80 },
    { name: 'Jenkins/GitLab CI', category: 'tools', level: 85 },
    
    // Languages & Frameworks
    { name: 'JavaScript/TypeScript', category: 'languages', level: 90 },
    { name: 'Python', category: 'languages', level: 85 },
    { name: 'Java', category: 'languages', level: 75 },
    { name: 'Node.js', category: 'languages', level: 85 },
    { name: 'React', category: 'languages', level: 80 },
    { name: 'SQL/NoSQL', category: 'languages', level: 85 },
    { name: 'Bash/PowerShell', category: 'languages', level: 80 },
    
    // Methodologies
    { name: 'DevSecOps', category: 'methodologies', level: 90 },
    { name: 'Agile/Scrum', category: 'methodologies', level: 85 },
    { name: 'CI/CD Security', category: 'methodologies', level: 90 },
    { name: 'Secure SDLC', category: 'methodologies', level: 95 },
    { name: 'Risk Assessment', category: 'methodologies', level: 90 },
    { name: 'Compliance (SOC2, ISO27001)', category: 'methodologies', level: 85 },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Technical Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career in application security. Here's a snapshot of my technical capabilities.
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
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-security-dark">{skill.name}</h3>
                <Shield className="w-5 h-5 text-security-primary" />
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full security-gradient"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
