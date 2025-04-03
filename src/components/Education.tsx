
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationList = [
    {
      degree: "Master of Technology in Software Systems",
      institution: "Birla Institute of Technology and Science, Pilani",
      period: "2024 - 2016(Tentative)",
      description: "Specialized in application security and secure software development lifecycles. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Jawaharal Nehru Technological University, Hyderabad",
      period: "2007 - 2011",
      description: "Focused on software engineering and information security. Dean's List for 6 consecutive semesters."
    }
  ];

  return (
    <section id="education" className="py-24 bg-security-light/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background has provided a strong foundation for my career in application security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((education, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-security-primary" />
                  <span className="text-sm text-gray-500">{education.period}</span>
                </div>
                <CardTitle className="text-xl font-bold text-security-dark">{education.degree}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="w-4 h-4 text-security-primary" />
                  <CardDescription className="text-gray-700">{education.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{education.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
