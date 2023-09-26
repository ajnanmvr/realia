import React from "react";
function Header() {
  return (
    <header className="flex justify-between items-end m-16 mb-0">
      <div>
        <h1 className="text-5xl font-extrabold text-[#401176]">Realia'23</h1>
        <h2 className="text-xl">DHIU UG Arts Fest</h2>
      </div>

      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex gap-1">
            <li className="bg-[#401176] text-white text-lg px-5 py-1 rounded-3xl hover:text-[#401176] hover:bg-yellow-200 ">
              Home
            </li>
            <li className="text-[#401176] text-lg px-5 py-1 rounded-3xl hover:bg-[#401176] hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-[#401176]  text-lg px-5 py-1 rounded-3xl hover:bg-[#401176] hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-[#401176]  text-lg px-5 py-1 rounded-3xl hover:bg-[#401176] hover:text-yellow-200 ">
              Home
            </li>
            <li className="text-[#401176] text-lg px-5 py-1 rounded-3xl hover:bg-[#401176] hover:text-yellow-200 ">
              Home
            </li>
          </ul>
        </nav>
        <img
          src="https://www.regalials.com/wp-content/uploads/2021/08/Regalia-Logo-1.png"
          alt=""
          className="h-20"
        />
      </div>
    </header>
  );
}

export default Header;
