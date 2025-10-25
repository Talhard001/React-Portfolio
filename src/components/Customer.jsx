import React from "react";
import { motion } from "framer-motion";
import red1 from "/16.png";

function Customer() {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[90%] md:w-[80%] h-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center bg-[#013253] font-serif w-full p-6 space-y-6 lg:space-y-0">
          {/* Image Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end w-full lg:w-1/2"
          >
            <img
              className="w-[200px] md:w-[250px] lg:w-[300px] h-auto"
              src={red1}
              alt="Freelancer Available"
            />
          </motion.div>

          {/* Text Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-white text-center lg:text-left w-full lg:w-1/2 px-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              I'm{" "}
              <span className="underline decoration-red-600">Available</span> For
              Freelance Work
            </h1>

            <div className="w-full flex justify-center lg:justify-start mt-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.upwork.com/freelancers/~01a3e877ce923a8ff2  "
                target="_blank"

                className="text-lg md:text-xl flex justify-center bg-[#012B45] py-3 px-8 rounded-full hover:bg-[#ff014f] transition-all duration-300"
                aria-label="Hire me for freelance work"
              >
                Hire Me Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
