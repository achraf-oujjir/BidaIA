
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bidaia-light via-white to-white opacity-70"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-bidaia-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-bidaia-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">AI-Powered</span>
              <span className="bg-gradient-to-r from-bidaia-primary to-bidaia-secondary bg-clip-text text-transparent">
                Micro-Internships
              </span>
              <span className="block">for the Digital Age</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Experience personalized internship simulations tailored to your skills and career goals. Build your portfolio and gain real-world experience—no waiting, no applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button className="bg-bidaia-primary hover:bg-bidaia-secondary text-white px-8 py-6 text-lg h-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="border-bidaia-primary text-bidaia-primary hover:bg-bidaia-light px-8 py-6 text-lg h-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg mx-auto overflow-hidden">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-2 text-sm text-gray-500">BidaIA Simulation</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-bidaia-light rounded-lg p-4">
                    <h3 className="font-medium text-bidaia-primary">Marketing Intern Simulation</h3>
                    <p className="text-sm text-gray-600 mt-1">Startup - Tech Product Launch</p>
                    <div className="mt-3 text-sm">
                      <p className="text-gray-700"><strong>Day 1 Task:</strong> Create a social media strategy for our new product launch</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-bidaia-primary flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex-1">
                      <p className="text-sm text-gray-700">
                        Hi there! I'm Sarah, your project manager. Let's talk about the launch strategy. What channels do you think would work best for our target audience?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-bidaia-primary text-white rounded-lg p-3 max-w-xs">
                      <p className="text-sm">
                        I'd recommend focusing on LinkedIn and Twitter since we're targeting B2B customers.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      You
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-bidaia-primary flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex-1">
                      <p className="text-sm text-gray-700">
                        Great thinking! Let's expand on that. What kind of content would resonate best with our B2B audience?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-bidaia-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">Day 1/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
