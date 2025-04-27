
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16 px-6 mt-16">
        <SignupForm />
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
