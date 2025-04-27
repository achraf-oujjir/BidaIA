
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: "Mounsef Litniti",
    role: "Team Lead, AI Integration & Strategy",
    bio: "Passionate about leveraging AI to solve real-world problems in education and career development.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "BadrEddine Tadlaoui",
    role: "FullStack Developer Lead",
    bio: "Experienced developer with a focus on creating scalable and accessible web applications.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Achraf Oujjir",
    role: "Data and Cloud Lead",
    bio: "Expert in data architecture and cloud infrastructure with a passion for AI and machine learning solutions.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Mission Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                BidaIA's mission is to democratize career development by providing accessible, 
                personalized simulated work experiences for everyone, regardless of background, location, or connections.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-bidaia-primary">Equal Access</h3>
                <p className="text-gray-600">
                  We're committed to breaking down barriers to career entry by providing 
                  internship simulations that anyone can access, anywhere in the world.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-bidaia-primary">AI Augmentation</h3>
                <p className="text-gray-600">
                  We believe in using AI not to replace human interaction but to augment 
                  it, providing personalized guidance and feedback at scale.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-bidaia-primary">Experiential Learning</h3>
                <p className="text-gray-600">
                  We're focused on creating authentic work simulations that bridge the gap 
                  between academic knowledge and workplace application.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate individuals behind BidaIA who are working to transform 
                how people gain work experience in the digital age.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 relative inline-block">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-40 h-40 rounded-full object-cover mx-auto ring-4 ring-bidaia-primary/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bidaia-primary to-bidaia-secondary opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-bidaia-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
