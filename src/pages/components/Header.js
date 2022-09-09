import React from "react";
import logo from "../assets/logoParas.png";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-32 mb-[-100px] ">
      <div className="w-[25%]">
        <img src={logo} alt="logo" width={100} />
      </div>
      <div className="w-[50%]">
        <ul className="list-none flex space-x-12 justify-center items-center">
          <li>Home</li>
          <li>Treatment</li>
          <li>Facilites</li>
          <li>Speciality</li>
        </ul>
      </div>
      <div>
        <button className="bg-gradient-to-r from-[#adcd81] to-[#00b9f2] text-white px-4 py-2">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
