import React from 'react';
import LogoBanner from '@/components/LogoBanner';
import LeftBgLight from '@/components/LeftBgLight';
import RegisterForm from '@/components/registerComponents/RegisterForm';

const RegisterPage = () => {
  return (
    <div
      className="flex justify-center flex-col md:flex-row min-h-screen w-full 
                    bg-gradient-to-br from-[#3674B5] via-[#578FCA] to-[#A1E3F9]
                    dark:from-[#161D6F] dark:via-[#0B2F9F] dark:to-[#000000] 
                    lg:bg-none"
    >
      <div className="absolute top-0 w-full z-20">
        <LogoBanner />
      </div>
      <LeftBgLight />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
