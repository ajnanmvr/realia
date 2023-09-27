"use client";
import React, { useState } from "react";
import { MenuIcon } from "./Icons";
import Image from "next/image";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="flex justify-between items-center">
      <img src="/realia-txt.png" alt="Realia Logo" className="h-10 md:h-16" />
      <div className="flex items-center text-lg font-light font-nexa">
        <div className="lg:hidden cursor-pointer" onClick={togglePopup}>
          <MenuIcon />
        </div>
        <nav className="hidden lg:block cursor-pointer">
          <ul className="flex flex-col lg:flex-row">
            <li className=" text-white font-semibold border-white border px-4 py-1 rounded-3xl hover:text-theme hover:bg-white">
              Home
            </li>
            <li className="text-white px-4 py-1 rounded-3xl hover:font-bold">
              Home
            </li>
          </ul>
        </nav>
        <div>
          <Image
            src="/logo.png"
            alt="Realia Logo"
            width={150}
            height={0}
            className="hidden xl:block"
          />
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="text-center">
              <h1 className="text-4xl font-black text-theme">
                <span className="font-nexa">Realia</span>'
                <span className="font-nexa">23</span>
              </h1>
              <h2 className="text-lg leading-4 font-nexa">DHIU Arts Fest</h2>
            </div>
            <nav>
              <ul className="mt-8">
                <li className=" text-theme font-semibold border-theme border px-4 py-1 rounded-3xl hover:text-theme hover:bg-theme">
                  Home
                </li>
                <li className="text-theme px-4 py-1 rounded-3xl">Home</li>
              </ul>
            </nav>
            <button
              onClick={togglePopup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
