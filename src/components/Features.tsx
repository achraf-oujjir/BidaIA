
import React from 'react';
import { Link } from 'react-router-dom';
import { FileUp, Users, MessageSquare, ClipboardCheck, Trophy, Award, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <FileUp className="h-10 w-10 text-bidaia-primary" />,
    title: "CV Analyzer",
    description: "Upload your resume and our AI will extract your skills, experience, and goals to personalize your internship journey.",
    link: "/cv-analyzer"
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-bidaia-primary" />,
    title: "Skills Assessment",
    description: "Evaluate your professional skills, identify areas for improvement, and get personalized learning recommendations.",
    link: "/skills-assessment"
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-bidaia-primary" />,
    title: "Internship Generator",
    description: "Choose your career path and company context to receive a tailored 5-day internship scenario.",
    link: "/features"
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-bidaia-primary" />,
    title: "AI Colleague Interactions",
    description: "Engage with AI agents acting as project managers, mentors, and team members through realistic communications.",
    link: "/features"
  },
  {
    icon: <Users className="h-10 w-10 text-bidaia-primary" />,
    title: "Task Submission & Feedback",
    description: "Submit your deliverables and receive detailed AI feedback to improve your skills.",
    link: "/features"
  },
  {
    icon: <Trophy className="h-10 w-10 text-bidaia-primary" />,
    title: "Gamified Progression",
    description: "Earn points, badges, and achievements as you complete tasks and challenges.",
    link: "/features"
  },
  {
    icon: <Award className="h-10 w-10 text-bidaia-primary" />,
    title: "Performance Reports",
    description: "Receive detailed performance analytics, mock reference letters, and shareable certificates.",
    link: "/features"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How BidaIA Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform uses advanced AI to create personalized internship experiences that help you develop real-world skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="mb-5 inline-block bg-bidaia-light p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
              <div className="mt-auto">
                <Link to={feature.link}>
                  <Button variant={index === 0 || index === 1 ? "default" : "outline"} className={index === 0 || index === 1 ? "bg-bidaia-primary hover:bg-bidaia-secondary w-full" : "w-full"}>
                    {index === 0 || index === 1 ? "Try Now" : "Learn More"}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
