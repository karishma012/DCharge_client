import React from 'react'

import { Header } from './components/Header'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Statistic from './components/Statistic'
import { Carousel } from './components/Carousel'
import { Content } from './components/Content'
import { Faqs } from './components/Faqs'
import Testimonial from './components/Testimonial'
import { Header2 } from './components/Header2'

// import Practice from './components/Practice'
import image from "./img/1.jpg"; 
import image2 from "./img/3.jpg"; 
import image3 from "./img/2.jpg"; 
function App() {
  const mystyle={
    width:'100%',
    height:'120vh',
    backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat",
    
  }
  const mystyle2={
    width:'100%',
    height:'200vh',
    backgroundImage:`url(${image2})`,
    backgroundRepeat:"no-repeat",
    
  }
  const mystyle3={
    width:'100%',
    height:'100vh',
    backgroundImage:`url(${image3})`,
    backgroundRepeat:"no-repeat",
    
  }
  return (
    <>
    {/* <div className="container" style={mystyle}> */}
      {/* <h1 className='text-black font-sans text-3xl font-semibold underline text-center animate-pulse'>Registration</h1> */}
    {/* <Practice/> */}
      
    {/* </div> */}
    <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Navbar/>
    <Header/>
    </div>
    <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Header2  />
    </div>
    <div className="container bg-cover bg-center h-screen" style={mystyle2}>
    <Pricing/>
    
    {/* <Carousel/> */}
    
    <Statistic/>
    </div>
    <div className="container bg-cover bg-center h-screen" style={mystyle2}>
     <Content/>
     </div>
     <div className="container bg-cover bg-center h-screen" style={mystyle}>
     <Faqs/>
     </div>
     <div className="container bg-cover bg-center h-screen" style={mystyle}>
    <Testimonial/> 
    </div>
    {/* <Footer/> */}
    
    </>
  )
}

export default App
