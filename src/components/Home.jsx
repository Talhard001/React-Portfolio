import React from 'react';
import { motion } from 'framer-motion';
import red from '/1.png';
// import red1 from '/9.png';
import { section } from 'framer-motion/client';

function Home() {
  return (
    <section id='home' className='section'>
      <div className='flex  justify-center pb-28 md:pb-0 lg:pb-0   items-center h-screen  w-full '>

        
        <motion.div 
          className='flex justify-center items-center  gap-5 md:gap-5 lg:gap-6 flex-col'
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
            
        
          <motion.div 
            className='flex gap-2 text-white font-serif'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className='lg:text-3xl md:text-3xl text-xl'>Hi</h1>

            <motion.img 
              className='h-6 mt-1' 
              src={red} 
              alt="img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className='lg:text-3xl md:text-3xl text-xl'>I am Talha Randhawa</h2>
          </motion.div>

        
          <motion.h1 
            className='text-white text-xl font-serif'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          
          >
            Frontend Developer
          </motion.h1>

          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='/TalhaResume.pdf'
            download
            className='border px-6 py-3 md:px-8 lg:px-12 md:py-3 lg:py-4 text-md hover:bg-[#E50050] lg:text-xl bg-[#012B45] border-none rounded-full text-white font-serif'
            
          >
            My Resume
          </motion.a>
        </motion.div>  

        {/* Right Section - Image */}
        {/* <motion.div 
          className='flex justify-center mr-20'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img className='' src={red1} alt="img" />
        </motion.div> */}
        
      </div>
    </section>
  );
}

export default Home;
