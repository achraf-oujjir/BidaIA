
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-bidaia-primary to-bidaia-secondary bg-clip-text text-transparent">
              BidaIA
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-bidaia-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-bidaia-primary transition-colors">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-bidaia-primary transition-colors">
              Features
            </Link>
            <Link to="/cv-analyzer" className="text-gray-700 hover:text-bidaia-primary transition-colors">
              CV Analyzer
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-bidaia-primary transition-colors">
              Contact
            </Link>
            <Link to="/signin">
              <Button variant="outline" className="mr-2">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-bidaia-primary hover:bg-bidaia-secondary">Sign Up</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden fixed inset-x-0 bg-white shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-16 opacity-100" : "-top-full opacity-0"
        )}>
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link to="/" className="text-gray-700 hover:text-bidaia-primary transition-colors px-4 py-2">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-bidaia-primary transition-colors px-4 py-2">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-bidaia-primary transition-colors px-4 py-2">
              Features
            </Link>
            <Link to="/cv-analyzer" className="text-gray-700 hover:text-bidaia-primary transition-colors px-4 py-2">
              CV Analyzer
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-bidaia-primary transition-colors px-4 py-2">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Link to="/signin">
                <Button variant="outline" className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-bidaia-primary hover:bg-bidaia-secondary">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
