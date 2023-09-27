"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

import Image from "next/image";
import { LiveIcon, TableIcon, UserIcon } from "./Icons";
import { motion } from "framer-motion";
function Description() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <section className="min-h-screen">
      <div className="w-full p-16 flex justify-center lg:justify-between align-center">
        <div className="text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-5xl font-black text-theme">
            <span className="font-nexa">Results</span>'
            <span className="font-nexa">23</span>
          </h1>
          <h2 className="text-xl leading-4 font-nexa">Realia Arts Fest</h2>
        </div>
        <Image
          src="/arabic-logo.jpg" // Path to the image in the public folder
          alt="Realia Logo"
          data-aos="fade-up"
          className="hidden lg:block"
          width={400} // Set the width of the image
          height={0} // Set the height of the image
        />
      </div>
      <img
        src="/pattern.jpg" // Path to the image in the public folder
        alt="Realia Pattern"
        data-aos="fade-up"
        className="h-24 object-cover w-full"
      />
      <div className="text-white mt flex my-20 text-center flex-wrap justify-center gap-6 text-3xl font-bold font-nexa">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="bg-theme border border-theme gap-3 cursor-pointer h-72 w-72 p-10 rounded-3xl justify-center flex flex-col items-center"
            data-aos="fade-up"
          >
            <TableIcon className="h-24" />

            <p className="">
              Leader <br />
              Board
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="text-theme border border-theme gap-3 cursor-pointer h-72 w-72 p-10 rounded-3xl justify-center flex flex-col items-center"
            data-aos="fade-up"
          >
            <LiveIcon className="w-24" />
            <p className="">
              Live <br />
              Results
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="bg-theme border border-theme gap-3 cursor-pointer h-72 w-72 p-10 rounded-3xl justify-center flex flex-col items-center"
            data-aos="fade-up"
          >
            <UserIcon className="w-24" />

            <p>Candidate Points</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Description;
