// import React from "react";
import gridSpaceLogo from "../../public/gridspace.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6 px-4 md:px-8 lg:px-20 text-sm text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={gridSpaceLogo} alt="Logo" className="w-7 h-7" />
          <span className="text-[#F05A28] font-extrabold text-xl font-josefin tracking-tighter">GridSpace</span>
        </div>
        <div className="flex gap-6 text-gray-900">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Investors and Partners</a>
        </div>
      </div>
      <div className="mt-4 py-8 max-w-7xl text-center mx-auto lg:flex items-center justify-between border-t ">
        <p className="text-black font-semibold">Copyright © 2025, GridSpace. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 font-medium text-black">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
