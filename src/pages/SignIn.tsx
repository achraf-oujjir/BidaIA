
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SigninForm from '@/components/SigninForm';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-16 px-6 mt-16">
        <SigninForm />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
