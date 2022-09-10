import React from "react";
import doctor from "../assets/doctor.png";

const Hero = () => {
  return (
    <div className="hero w-full flex flex-col-reverse md:flex-row z-0 px-8 md:px-32 pt-8 md:pt-16">
      <div className="hero__left w-full md:w-1/3 flex flex-col  justify-center space-y-10 md:space-y-5">
        <h1 className="text-[#19205ez] text-[2rem] mt-12  md:text-[4rem] leading-tight">
          Coronary Artery By-pass Grafting(CABG)
        </h1>
        <button className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2] text-white md:w-2/3 py-2">
          Book Appointment
        </button>
      </div>
      <div className=" w-full md:w-2/3  md:flex relative flex-col justify-end items-center">
        <img src={doctor} alt="doctor" width={600} />
        <div className="absolute bg-white shadow-sm rounded px-4 py-2 right-10 bottom-5 flex space-x-4 items-center">
          <div>
            <img
              src="http://static.businessworld.in/article/article_extra_large_image/1565079162_RTL6wn_Paras_Hospitals.jpg"
              alt="logo"
              width={100}
            />
          </div>
          <div>
            <p className="text-lg font-medium">Dr Aditya Sharma</p>
            <span className="text-xs italic">Sr. Cardiac Surgeon Paras</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
