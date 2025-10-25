import { div } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';
import red1  from '/html.png'
import red2  from '/react.png'
import red3  from '/laravel.png'


function Tabs() {

  const[activeTab, setActiveTab ] = useState(0);
	const tabs = [ "BIOGRAPHY", "SKILLS ", "EDUCATION"];
  const contents = [
    <div key="Content1">
      <div className='bg-[#013253]'>
      <div>
            <div className="flex flex-col md:flex-col lg:flex-row  justify-center pt-3 md:pt-0 lg:pt-20 h-screen pb-32  md:pb-32 lg:pb-0 text-xl md:text-3xl lg:text-2xl text-white gap-10 md:gap-20 lg:gap-20 border-gray-600  font-serif"
            >
              <div className="px-0 md:px-0 lg:px-0">
                  <div className="mb-3 flex justify-between gap-0 md:gap-36  lg:gap-56 border-b border-gray-600  pb-1">
                    <p className="font-semibold">Name</p>
                    <p className="text-gray-300">Talha Randhawa</p>
                  </div>
                  <div className="mb-3 flex justify-between border-b border-gray-600 pt-5 pb-1">
                    <p className="font-semibold">Age</p>
                    <p className="text-gray-300">22</p>
                  </div>
                  <div className="mb-3 flex justify-between gap-10 border-b border-gray-600 pt-5 pb-1">
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">talhard5994@gmail.com</p>
                  </div>
                  <div className="flex justify-between lg:pb-0 md:pb-0 pb-10  pt-5">
                    <p className="font-semibold">Skype</p>
                    <p className="text-gray-300">talha001</p>
                  </div>
                
                  </div>
                    <div className='px-0 md:px-0 lg:px-0'>
                      <div className="mb-3 flex justify-between lg:gap-56 md:gap-0 gap-14 border-b border-gray-600 pb-1">
                        <p className="font-semibold">Birthday</p>
                        <p className="text-gray-300">12 March, 2003</p>
                      </div>
                      <div className="mb-3 flex justify-between border-b pt-5 border-gray-600 pb-1">
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-300">Paragon city</p>
                      </div>
                      <div className="mb-3 flex justify-between pt-5 border-b border-gray-600 pb-1">
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-300">+923244905994</p>
                      </div>
                      <div className="flex justify-between pt-5">
                        <p className="font-semibold">Freelance</p>
                        <p className="text-green-400">Available</p>
                      </div>
                    </div>
            </div>
          </div>
      </div>

    </div>,
    <div key="Content2">
      <div className='h-screen  bg-[#013253] flex flex-col  items-center pt-20 md:pt-28 lg:pt-0 text-2xl  text-white '>
          <div className=" flex flex-col items-center pt-20 md:pt-28 lg:pt-20 lg:text-2xl md:text-2xl text-xl  text-white  ">
              
                <div className="flex gap-2 md:gap-4 lg:gap-8 lg:pl-0 md:pl-0 pl-6  font-bold font-serif pt-10">
                    <div>
                      <img className="lg:mt-0 md:mt-0 mt-7 lg:h-[60px] md:h-[60px] h-[60px] object-cover" src={red1} alt="img" />
                    </div>
                    <div className=" flex flex-col  md:flex-col lg:flex-row   pt-4  gap-3">
                      <div>
                        <h1 className='lg:text-2xl md:text-3xl text-md'>Object oriented programming</h1>
                      </div>
                      <div className="lg:pl-8 md:pl-0 pl-36 hidden md:hidden lg:flex" >
                        75%
                      </div>
                      <div className="h-[8px] lg:w-[350px] md:w-[450px] w-[260px]  mt-2 bg-white rounded-full  ">
                        <span className="bg-[#E50050] w-[100px]"></span>
                      </div>
                    </div>
                </div>

                <div className="flex gap-2 lg:pr-0 md:pr-0 pr-4 md:gap-4 lg:gap-10 font-bold font-serif pt-10">
                    <div>
                      <img className="lg:mt-0 md:mt-0 mt-4 lg:h-[60px] md:h-[60px] h-[60px] object-cover" src={red2} alt="img" />
                    </div>
                    <div className=" flex flex-col  md:flex-col lg:flex-row   pt-4  gap-3">
                      <div>
                        <h1 className='lg:text-2xl md:text-3xl text-md'>Front-End with React</h1>
                      </div>
                      <div className="lg:pl-8 md:pl-0 pl-48 hidden md:hidden lg:flex" >
                        84%
                      </div>
                      <div className="h-[8px] lg:w-[350px] md:w-[450px] w-[250px]  mt-2 bg-white rounded-full  ">
                        <span className="bg-[#E50050] w-[100px]"></span>
                      </div>
                    </div>
                </div>

                <div className="flex gap-2 md:gap-4 pl-7 lg:gap-4 font-bold font-serif pt-10">
                    <div>
                      <img className="lg:mt-0 md:mt-0 mt-7 lg:h-[60px] md:h-[60px] h-[60px] " src={red3} alt="img" />
                    </div>
                    <div className=" flex flex-col  md:flex-col lg:flex-row pt-4 gap-3">
                      <div>
                        <h1 className='lg:text-2xl md:text-3xl text-md '>Advance frontend development</h1>
                      </div>
                      <div className="lg:pl-10 md:pl-0 pl-36 hidden md:hidden lg:flex" >
                        92%
                      </div>
                      <div className="h-[7px] lg:w-[350px] md:w-[450px] w-[250px]  mt-2 bg-white rounded-full  ">
                        <span className="bg-[#E50050] w-[100px]"></span>
                      </div>
                    </div>
                </div>
    
                
          </div>
      </div>
      

    </div>,
    
    <div key="Content3">
      <div>
      <div className=" font-serif bg-[#013253] h-screen pt-10 md:pt-28 lg:pt-0" >
            <div className="flex justify-center items-center  pt-10 text-white w-full" >

              <div className="flex justify-center  items-center  lg:gap-36 md:gap-36 gap-28  lg:w-[75%] md:w-[80%] w-[95%] ">               
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold">Matriculation</h1>
                  <h2 className="text-gray-300">Islamia School</h2>
                  <div>
                  <button className="bg-[#E50050] lg:px-2 md:px-2 px-1 lg:py-4 md:py-4 py-3 ">2018 - 2020</button>
                  </div>
                  <p className='text-gray-300'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>                
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold ">Intermediate</h1>
                  <h2 className="text-gray-300">Islamia School</h2>
                  <div>
                  <button className="bg-[#E50050] lg:px-2 md:px-2 px-1 lg:py-4 md:py-4 py-3">2020 - 2022</button>
                  </div>
                  <p className='text-gray-300' >The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>               
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center pt-10 w-full" >

              <div className="flex justify-center items-center text-white  lg:gap-36 md:gap-36 gap-28 lg:w-[75%] md:w-[80%] w-[95%]">               
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold ">BS Information System</h1>
                  <h2 className="text-gray-300">NCBAE</h2>
                  <div>
                  <button className="bg-[#E50050] lg:px-2 md:px-2 px-1 lg:py-4 md:py-4 py-3">2023-2027</button>
                  </div>
                  <p className='text-gray-300'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>                
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="font-bold ">Web Developer As Trainer </h1>
                  <h2 className="text-gray-300">Code Pulse</h2>
                  <div>
                  <button className="bg-[#E50050] lg:px-2 md:px-2 px-1 lg:py-4 md:py-4 py-3 ">2024 - 2025</button>
                  </div>
                  <p  className='text-gray-300'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>               
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  ];
  return (
    <div className='mt-5 flex flex-col items-center'>
        <div className='flex gap-3 justify-center flex-col md:flex-col lg:flex-row items-center w-[80%] md:w-[80%] lg:w-[80%] py-3 rounded-none md:rounded-none lg:rounded-full bg-none md:bg-none lg:bg-[#012B45]'>
            {tabs.map(((tab, index) =>  <button 
            onClick={() => setActiveTab(index)}
            key={`tab_${index}`} 
            className={`px-28 py-3 rounded-full  border border-none font-serif  ${activeTab === index ? " font-serif px-20 py-3 rounded-full" : ""} text-white px-28 py-3   hover:bg-[#ff014f]`}
            >{tab}</button>))}
        </div>


        <div className='flex flex-col mx-auto bg-white'>
          {contents && contents.map((content, index) => {
             if(activeTab === index){
                return <div key={`content_${index}`}>{content}</div>
              }
              return null
             }
          )}
         
          

        </div>
    </div>
  )
}

export default Tabs
