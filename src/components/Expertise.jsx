import React from 'react'
import red2 from '/2.png'
import red3 from '/3.png'
import red4 from '/4.png'

function Expertise() {
  return (
  <div className=''>
    <section id='expertise' className='section'>
        <div className='h-screen'>
                <div className='flex h-screen justify-center items-center text-white font-serif'>
                    <div className='border border-none pl-3 md:pl-3 lg:pl-1 pr-3 md:pr-3 lg:pr-1 w-[90%] md:w-[90%] lg:w-[85%]  flex justify-center flex-col items-center'>
                        <div data-aos="fade-right">
                            <h2 className='text-center pt-4'>MY EXPERTISE</h2>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl pt-4 pb-10 md:pb-3 lg:pb-10 text-center'>WHAT I DO</h1>

                        </div>
                    
                        <div className='flex justify-center lg:pl-20 md:pl-0 pl-0 flex-col lg:flex-row md:flex-col text-white pb-14'
                        data-aos="fade-up">
                    
                            <div >
                                <img className='h-[60px] w-[60px] object-cover' src={red2} alt="" />
                                <h1 className='pb-6 pt-3 md:pt-4 lg:pt-10 text-xl font-bold'>Website Design</h1>
                                <p className='w-[100%] md:w-[80%]  lg:w-[95%] pb-6 md:pb-6 lg:pb-0 '>I am a passionate Web Designer who specializes in creating modern responsive and user-friendly websites Using tools like HTML CSS JavaScript and design software  I craft websites that not only look great but also function smoothly. I aim to design with purpose ensuring that each website aligns with both aesthetic appeal and business goals.</p>
                            </div>

                            <div className=''>
                                <img className='h-[100px] md:h-[100px] lg:h-[100px] pb-10 ' src={red3} alt="img" />
                                <h1 className='pb-6 text-xl font-bold'>Web Development</h1>
                                <p className='w-[100%] md:w-[80%] lg:w-[90%] pb-6 md:pb-6 lg:pb-0'>I have a good understanding of web development and the ability to create functional responsive and websites I work with JawaScript and Reacts and modern frameworks to build user friendly web applications I am confident in turning ideas into working websites and always aim to write clean maintainable code Web development is not just a skill for me it is something I truly enjoy and continue to grow in every day. </p>
                            </div>

                            <div className=''>
                                <img className='h-[100px] pb-10' src={red4} alt="img" />
                                <h1 className='pb-6 text-xl font-bold'>UI/UX Design</h1>
                                <p className=' w-[100%] md:w-[80%] lg:w-[90%] pb-10 md:pb-6 lg:pb-0'>I have a good understanding of UI/UX design and it is importance in creating user friendly digital experiences Using tools like Figma create clean layouts wireframes and prototypes that align with both user needs and business goals For me UI/UX design is about solving problems creatively and making the user experience as simple and enjoyable as possible</p>
                            </div>
                        </div>
                    </div>
              </div>
         </div>
     </section>
 </div>
  )
}

export default Expertise
