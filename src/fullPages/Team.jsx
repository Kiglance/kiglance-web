import React from 'react';
import HeaderLine from '../components/HeaderLine';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import phoebe from '../assets/phoebe.png';
import patrick from '../assets/patrick.png';
import gerard from '../assets/gerard.png';
import tsa from '../assets/tsa.png';

const Team = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBar />
      <div className="px-4 md-px-8 lg:px-32 py-16">
        <div className="flex sm:flex-row flex-col-reverse items-center gap-4 mx-auto w-fit mb-12">
          <HeaderLine />
          <h1 className=" text-black/75 text-2xl font-bold font-quicksand">
            Executive Team
          </h1>
        </div>
        <p className="mb-12 text-lg text-center ">
          Meet our collaborative executive team, that's redefining software
          solutions.
        </p>

        <div className="flex flex-wrap gap-8 w-fit my-auto mx-auto font-rubik">
          <div className="flex flex-col gap-3 mx-auto">
            <div className="max-w-[270px] rounded-xl overflow-hidden">
              <img
                src={tsa}
                alt=""
                className="w-full object-fill transition-all duration-300 ease-linear hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-center">SHEMA Alain</p>
              <p className="italic text-black/75 text-sm text-center">
                Founder, Ipsum
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mx-auto">
            <div className="max-w-[270px] rounded-xl overflow-hidden">
              <img
                src={patrick}
                alt=""
                className="w-full h-full object-fill transition-all duration-300 ease-linear hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-center">TUYISHIMIRE Patrick</p>
              <p className="italic text-black/75 text-sm text-center">
                Founder, Ipsum
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 mx-auto">
            <div className="max-w-[270px] rounded-xl overflow-hidden">
              <img
                src={gerard}
                alt=""
                className="w-full h-full object-fill transition-all duration-300 ease-linear hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-center">RUTAYISIRE Gerard</p>
              <p className="italic text-black/75 text-sm text-center">
                Founder, Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
