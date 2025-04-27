import React from 'react';
const testimonials = [{
  quote: "BidaIA gave me the practical experience I needed to land my first job in UX design. The AI feedback was incredibly helpful!",
  name: "Sophia Chen",
  role: "Junior UX Designer",
  company: "DesignLab",
  avatar: "https://randomuser.me/api/portraits/women/32.jpg"
}, {
  quote: "As a career switcher, I struggled to get practical experience. The marketing internship simulation helped me build a portfolio that impressed recruiters.",
  name: "Marcus Johnson",
  role: "Digital Marketing Specialist",
  company: "MediaFusion",
  avatar: "https://randomuser.me/api/portraits/men/54.jpg"
}, {
  quote: "Our university partnered with BidaIA to provide students with practical experience. The results have been outstanding.",
  name: "Dr. Amelia Rodriguez",
  role: "Director of Career Services",
  company: "Global Tech University",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg"
}];
const Testimonials = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students, career changers, and educational institutions who've used BidaIA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute -top-5 left-8 h-10 w-10 bg-bidaia-primary text-white flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.quote}</p>
              <div className="flex items-center">
                
                <div>
                  
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;