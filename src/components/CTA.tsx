
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bidaia-primary to-bidaia-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Micro-Internship?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          Join thousands of students and career changers who are gaining valuable experience through AI-powered simulations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/signup">
            <Button className="bg-white text-bidaia-primary hover:bg-bidaia-light px-8 py-6 text-lg h-auto">
              Get Started For Free
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg h-auto">
              See a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
