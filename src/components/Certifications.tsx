
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      organization: "ISC²",
      year: "2021",
      expiryYear: "2024",
      description: "Globally recognized certification for information security professionals.",
      link: "#"
    },
    {
      name: "Certified Secure Software Lifecycle Professional (CSSLP)",
      organization: "ISC²",
      year: "2020",
      expiryYear: "2023",
      description: "Validates expertise in application security and secure software development.",
      link: "#"
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      organization: "Offensive Security",
      year: "2019",
      expiryYear: null,
      description: "Hands-on penetration testing certification requiring demonstration of skills.",
      link: "#"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      year: "2018",
      expiryYear: "2024",
      description: "Demonstrates knowledge of ethical hacking methodologies and tools.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in application security and secure development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center security-gradient text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-security-dark">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.organization}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {cert.year}{cert.expiryYear ? ` - ${cert.expiryYear}` : " (No Expiration)"}
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
              
              <a 
                href={cert.link}
                className="inline-flex items-center text-security-primary hover:text-security-primary/80 text-sm"
              >
                <span>Verify Certificate</span>
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
