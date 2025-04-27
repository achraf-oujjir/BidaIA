
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import { FileUp, Briefcase, Users, Code, Database, Clock } from 'lucide-react';

const detailedFeatures = [
  {
    icon: <FileUp className="h-12 w-12 text-bidaia-primary" />,
    title: "Smart CV Analysis",
    description: "Our advanced AI analyzes your resume to extract skills, work experience, education, and achievements. It then creates a personalized profile that helps tailor internship simulations specifically to your career goals and current skill level.",
    details: [
      "Supports PDF, Word, and plain text formats",
      "Understands 20+ languages",
      "Extracts both hard and soft skills",
      "Maps your experience to relevant career paths"
    ]
  },
  {
    icon: <Briefcase className="h-12 w-12 text-bidaia-primary" />,
    title: "Personalized Simulations",
    description: "Choose from dozens of career paths and company contexts to receive a completely customized 5-day internship scenario. Each simulation includes realistic projects, daily tasks, and deliverables that mirror actual workplace experiences.",
    details: [
      "40+ career paths from Marketing to Data Science",
      "Multiple company types (startup, agency, enterprise)",
      "Industry-specific scenarios and challenges",
      "Progressive difficulty levels"
    ]
  },
  {
    icon: <Users className="h-12 w-12 text-bidaia-primary" />,
    title: "Realistic AI Interactions",
    description: "Engage with emotionally intelligent AI agents that simulate working with managers, mentors, and teammates. Experience realistic workplace communications through chat, email, and collaboration tools.",
    details: [
      "Context-aware conversations",
      "Personality-driven AI colleagues",
      "Simulated team dynamics",
      "Feedback and guidance in real-time"
    ]
  },
  {
    icon: <Code className="h-12 w-12 text-bidaia-primary" />,
    title: "Hands-on Projects",
    description: "Complete actual deliverables related to your chosen career path. From creating marketing campaigns to analyzing data sets or designing user interfaces, you'll build a portfolio of real work.",
    details: [
      "Industry-relevant deliverables",
      "Portfolio-ready projects",
      "Skill-building assignments",
      "Real-world tools and platforms"
    ]
  },
  {
    icon: <Database className="h-12 w-12 text-bidaia-primary" />,
    title: "Detailed Feedback & Analysis",
    description: "Receive comprehensive feedback on your submissions from our AI evaluators. Understand your strengths, areas for improvement, and get specific recommendations for skill development.",
    details: [
      "Rubric-based evaluation",
      "Personalized improvement suggestions",
      "Comparative analysis with industry standards",
      "Skills gap identification"
    ]
  },
  {
    icon: <Clock className="h-12 w-12 text-bidaia-primary" />,
    title: "Flexible Scheduling",
    description: "Complete your internship simulation at your own pace. Whether you want to finish in 5 consecutive days or spread it out over weeks, BidaIA adapts to your schedule and learning style.",
    details: [
      "Self-paced progression",
      "Deadline-free environment",
      "Save and resume functionality",
      "Multiple simultaneous simulations"
    ]
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Platform Features</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how BidaIA's powerful features help you gain valuable work experience through AI-powered internship simulations.
            </p>
          </div>
          
          <div className="space-y-20">
            {detailedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="p-8 bg-bidaia-light rounded-2xl inline-block mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-bidaia-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-100 h-80 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500 italic">Feature illustration placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
