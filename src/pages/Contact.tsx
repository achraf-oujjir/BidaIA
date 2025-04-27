
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setIsLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about BidaIA? Get in touch with our team and we'll be happy to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Mail className="h-6 w-6 text-bidaia-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@bidaia.com" className="text-gray-600 hover:text-bidaia-primary">
                        info@bidaia.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-bidaia-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+12345678901" className="text-gray-600 hover:text-bidaia-primary">
                        +1 (234) 567-8901
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-bidaia-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Office</p>
                      <address className="text-gray-600 not-italic">
                        123 Innovation Street<br />
                        Tech City, TC 10101<br />
                        Morocco
                      </address>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-bidaia-light text-bidaia-primary p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-bidaia-light text-bidaia-primary p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-bidaia-light text-bidaia-primary p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-bidaia-primary hover:bg-bidaia-secondary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
