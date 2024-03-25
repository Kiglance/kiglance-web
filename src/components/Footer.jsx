import React from 'react';
import { LiaCopyrightSolid } from 'react-icons/lia';

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();

  return (
    <div className="min-h-[70px] bg-primary flex items-center lg:px-32 text-rubik text-white">
      <div className="flex gap-2 lg:gap-24 flex-col lg:flex-row items-center w-fit mx-auto">
        <div className="flex w-fit gap-2">
          <p className="flex items-center gap-1 font-medium">
            <LiaCopyrightSolid size={20} /> {currentYear}
          </p>
          |<p className="font-medium">KIGLANCE</p>
        </div>
        <p className="w-fit text-white font-medium">ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
