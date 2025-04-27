
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SigninForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Email and password are required",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Signed in",
        description: "Welcome back to BidaIA!",
      });
      setIsLoading(false);
      // In a real app, you would redirect to dashboard here
    }, 1500);
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-xl shadow-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-600">Sign in to continue your internship journey</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
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
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-bidaia-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bidaia-primary hover:bg-bidaia-secondary"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-bidaia-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
