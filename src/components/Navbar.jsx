import React from "react";
import car from '/19.jpg';
import icon from "/logo00.svg";
import { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className="lg:fixed md:fixed sm:none z-50 bg-[#012B45] w-full overflow-x-hidden" >
            <div className="text-white h-24 pt-4 flex justify-between md:pl-8   font-serif text-xl">
                
                <div>
                    <img className="h-16 w-18  rounded " src={car} alt="hoo" />
                </div>

                <div className="md:block hidden">
                    <ul className="flex md:gap-5 lg:gap-10 pr-4 md:pt-6 cursor-pointer ">
                        <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                        <Link to="expertise" smooth={true} duration={500}>Expertise</Link>
                        </li>
                        <li>
                        <Link to="recent" smooth={true} duration={500}>Recent</Link>
                        </li>
                        <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
              <div className="md:hidden lg:hidden sm:block">

             <div className={`fixed top-0 left-0 h-full z-50 w-64 bg-[#012B45] text-white transition-transform ${
                isOpen ? "translate-x-0" : "-translate-x-64"}`} >
                        
                        <button className="absolute top-3 right-2 text-3xl" onClick={() => setIsOpen(false)}>✖</button>

                        <img src={car} className="h-14 w-18" alt="" />
                        
                        
                        <ul className="p-2  pt-6 space-y-2">
                            <li className="hover:bg-[#ff014f] p-2 rounded">
                            <Link to="home" smooth={true} duration={500} >Home</Link>
                            </li>
                            <li  className="hover:bg-[#ff014f] p-2 rounded">
                            <Link to="expertise" smooth={true} duration={500}>Expertise</Link>
                            </li>
                            <li className="hover:bg-[#ff014f] p-2 rounded">
                            <Link to="recent" smooth={true} duration={500}>Recent</Link>
                            </li>
                            <li className="hover:bg-[#ff014f] p-2 rounded">
                            <Link to="about" smooth={true} duration={500}>About</Link>
                            </li>
                            <li className="hover:bg-[#ff014f] p-2 rounded">
                            <Link to="contact" smooth={true} duration={500} >Contact</Link>
                            </li>
                        </ul>

                    </div>

                    
                    <button  
                        className="m-4 p-2 bg-[#282A37] text-white rounded" 
                        onClick={() => setIsOpen(true)} // ✅ Corrected this line
                        >
                        <img className="w-[30px] h-[30px]" src={icon} alt="" />
                    </button>
              </div>
        </div>
        </nav>
    )
}

export default Navbar;