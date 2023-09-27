"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Count() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className="min-h-screen bg-theme bg-blue flex  flex-col p-4 md:p-16 justify-center lg:justify-between content-center items-center">
      <div
        data-aos="fade-up"
        className="text-center text-white md:hidden mb-10"
      >
        <h1 className="text-5xl font-black">
          <span className="font-nexa">Realia</span>'
          <span className="font-nexa">23</span>
        </h1>
        <h2 className="text-xl leading-4 font-nexa">DHIU UG Arts Fest</h2>
      </div>
      <div className="w-full hidden md:flex justify-between items-start">
        <div>
          <img
            src="/realia-txt.png" // Path to the image in the public folder
            alt="Realia Logo"
            className="h-10 md:h-16"
          />
        </div>
        <div>
          <img
            className="h-8"
            src="/asasicon.png" // Path to the image in the public folder
            alt="Realia Logo"
          />
        </div>
      </div>
      <img
        src="/tile.png" // Path to the image in the public folder
        alt="Realia Tile"
        data-aos="fade-up"
        className="lg:max-w-[800px]"
      />
      <div className="w-full flex justify-center  lg:justify-start align-end">
        <Image
          src="/date.png" // Path to the image in the public folder
          alt="Realia date"
          data-aos="fade-up"
          width={150} // Set the width of the image
          height={0} // Set the height of the image
        />
      </div>
    </section>
  );
}

export default Count;
