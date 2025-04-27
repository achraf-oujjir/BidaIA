
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const SignupForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeTerms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account created",
        description: "Welcome to BidaIA! You can now log in.",
      });
      setIsLoading(false);
      // In a real app, you would redirect to dashboard or login page here
    }, 1500);
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Create your account</h1>
        <p className="text-gray-600">Start your AI-powered internship journey</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="agreeTerms"
              checked={formData.agreeTerms}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="agreeTerms" className="text-sm font-normal">
              I agree to the <Link to="/terms" className="text-bidaia-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-bidaia-primary hover:underline">Privacy Policy</Link>
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bidaia-primary hover:bg-bidaia-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-bidaia-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
