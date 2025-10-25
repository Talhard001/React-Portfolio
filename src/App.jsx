import './App.css'
import Home from './components/Home'
import Expertise from './components/Expertise'
import Recent from './components/Recent'
import About from './components/About'
import React from 'react'
import Navbar from './components/Navbar'
import Customer from './components/Customer'
import Contact from './components/Contact'
import Tabs from './components/Tabs'
import ContactList from './components/ContactList'


// import Whatsapp from './components/Whatsapp'








function App() {
 

  return (

    <>
     <div className="overflow-x-hidden">
  
      <Navbar/> 
      {/* <Whatsapp/> */}
      
      <div className='lg:pt-8 md:pt-0 pt-0 lg:pb-0 md:pb-0 pb-32 overflow-hidden '>
      <Home />
      </div>

      <Expertise />
      <div className='pt-80 md:pt-0 lg:pt-0 '>
      <Recent />
      </div>
      <div className='pt-0 md:pt-10 lg:pt-10' >
      <About />

      </div>
      <div className='lg:pb-0 md:pb-0 pb-32 '>
      <Tabs/>

      </div>
      <Customer/>
      <Contact/>

     </div>
    </>
  );
}

export default App;
