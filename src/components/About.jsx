import React from "react";
import { motion } from "framer-motion";
// import red5 from "/9.png";
import red6 from "/10.png";
import red7 from "/11.png";

function About() {
  return (
    <section id="about" className="section">
      <motion.div 
        className=" h-full font-serif bg-[#013253] text-white px-12 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="flex flex-col md:flex-row justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          
          <div className="w-full md:w-2/3">
            <motion.h2 
              className="text-lg text-gray-400"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ABOUT ME
            </motion.h2>

            <motion.h1 
              className="font-bold text-4xl md:text-5xl leading-tight w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I can develop that help people
            </motion.h1>

            <motion.p 
              className="mt-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Hi my name is <span className="text-blue-400 font-semibold">Talha Randhawa</span> and with a strong interest in building websites using technologies like React and JavaScript. Over the last 2 years I have learned how to create functional and interactive websites from scratch. I focus on making websites that are easy to use and visually appealing. My goal is to take ideas and turn them into simple working websites that look great and perform well.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* WordPress Developer Card */}
          <motion.div 
            className="flex items-center gap-4 bg-[#012B45] p-4 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="h-[85px]" src={red6} alt="WordPress" />
            <div>
              <h2 className="font-bold text-xl">Professional WordPress Developer</h2>
              <p className="text-gray-400">Top Rated – Upwork</p>
            </div>
          </motion.div>

          {/* HTML Developer Card */}
          <motion.div 
            className="flex items-center gap-4 bg-[#012B45] p-4 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="h-[60px]" src={red7} alt="HTML" />
            <div>
              <h2 className="font-bold text-lg">Senior HTML Developer</h2>
              <p className="text-gray-400">Level Two Seller - Fiverr</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
