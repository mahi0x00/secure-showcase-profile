
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechGlobal Inc.",
      content: "Working with this security expert was transformative for our development process. Their implementation of secure SDLC practices helped us identify and remediate vulnerabilities early in the development cycle, saving us both time and resources.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      position: "Director of Engineering, FinSecure",
      content: "The API security framework developed was exactly what we needed for our financial services platform. Their deep understanding of authentication mechanisms and data protection strategies significantly improved our application's security posture.",
      image: "/placeholder.svg"
    },
    {
      name: "Jessica Williams",
      position: "CISO, HealthTech Solutions",
      content: "The security training program designed for our development team has dramatically reduced the number of vulnerabilities in our code. Their ability to explain complex security concepts in an accessible way made a tremendous difference.",
      image: "/placeholder.svg"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-security-light/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What clients and colleagues say about my work and expertise.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="absolute top-6 left-6 text-security-primary opacity-20">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-security-dark">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex 
                      ? 'bg-security-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
