import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logoParas.png";

const Header = () => {
  const[open, setOpen]= useState(false)
  return (
    <header className="w-full flex justify-between items-center relative py-4 md:px-32 px-8 mb-[-100px] z-20 ">
      <div className="w-[25%]">
        <img src={logo} alt="logo" width={100} />
      </div>
      <div className="hidden md:block md:w-[50%]">
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
      <div className="md:hidden ">
        <BiMenu className={`${open? "hidden" : "block"}`}size={25} onClick={()=>setOpen(!open)} />
      {open && <IoClose size={25} onClick={()=>setOpen(!open)} />}  
      </div>
      <div className="flex absolute left-[200px] z-20 justify-end top-20 ">
        <ul className={`list-none ${open? "flex" : "hidden"} md:hidden flex-col space-y-12 bg-white shadow p-8  justify-center items-center`}>
          <li>Home</li>
          <li>Treatment</li>
          <li>Facilites</li>
          <li>Speciality</li>
        </ul>
        </div>
    </header>
  );
};

export default Header;
