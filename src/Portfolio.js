import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./style.css";
import "./fonts.css"
import Product from './Components/Product';
import Brand from './Components/Brand';
import ankra from './img/ankra.png';
import clator from './img/clator.jpg';
import teamify from './img/teamify.png'
import a2c from './img/a2c.jpg'
import trixmed from './img/trixmed.jpg'
import livestock from './img/livestock.jpg'
import goodness from './img/goodness.jpg'
import foodie from './img/foodie.png'
import g11 from './img/g11.jpg'
import ichat from './img/ichat.jpg'
import car from './img/car.jpg'
import Card from './Components/Card';
import { Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { FaArrowUp } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
import Zoom from 'react-awesome-reveal';
import Bounce from 'react-awesome-reveal';

const Portfolio = () => {
    const [toggle, setToggle] = useState(1)

    const updateToggle = (index) => {
        setToggle(index);
    }

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
        setVisible(true) 
        }  
        else if (scrolled <= 300){ 
        setVisible(false) 
        } 
    }; 
    
    const handleClick = () =>{
        window.scroll({
            top:0,
            behavior: "smooth"
        })
    }

    window.addEventListener('scroll', toggleVisible);


    return ( 
        <>
            {
                loading ? (
                    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                       <HashLoader
                            color={'#FBAD30'}
                            loading={loading}
                            // cssOverride={override}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> 
                    </div>) : (

                    <div className="font-custom"> 
                    {/* <Navbar/>           */}
                        {/* Portfolio */}
                        {/* <div className='port grid items-center'>
                            <div className="head py-24 px-20">
                                <Fade direction="left" triggerOnce="true"><h2 className="text-white text-center font-medium text-4xl">Portfolio</h2></Fade><br/>
                            </div>
                        </div>  */}

                        <div className="port py-4 md:py-8">
                            <div className="flex flex-col px-20 gap-40 md:gap-40">
                                <div className="grid justify-items-center"><Header/></div>
                            {/* <Header className=""/> */}
                                {/* <div className="flex flex-col items-center lg:items-start py-0 gap-0"> */}
                                    <Fade direction="left" triggerOnce="true">
                                    <h2 className="text-white text-center font-black text-6xl" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>Portfolio</h2><br/>
                                    </Fade>
                                {/* </div> */}
                            </div>
                        </div>

                        {/* Back to top button */}
                        <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>   
                        
                        {/* Tab Header */}
                        <div className="px-4 md:px-20 py-16 bg-black">
                            <div className="grid grid-cols-2 md:grid-cols-3 text-white py-4 px-4 lg:px-32 items-center gap-2 md:gap-0 cursor-pointer">           
                                <h2 className= {`${toggle === 1 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(1)}>Product Design</h2>                
                                <h2 className={`${toggle === 2 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(2)}>Graphic Design</h2>
                                <h2 className={`${toggle === 3 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(3)}>Illustration</h2>
                            </div><br/><br/> 
                            
                            {/* Product Design */}
                            <div className= {toggle === 1 ? 'show-tabs' : 'tabs'}>
                                <div className="flex flex-col gap-2 md:gap-10">
                                    <Fade direction="up" triggerOnce="true">
                                        <Card header="Airtime to Cash" btn="Live" image={a2c} text="An app that provides seamless airtime to cash conversion, allowing users to easily transfer mobile airtime to their Nigerian bank account." link={'https://play.google.com/store/apps/details?id=com.airtimetocash.app&hl=ru'}/>
                                        <Card header="Clator" btn="Live" image={clator} text="A Grade Point Calculator app for all universities, polytechnics, and colleges that use the 4.0 and 5.0 CGPA scale systems." link={'https://play.google.com/store/apps/details?id=net.ngscholars.clator&hl=en_US&gl=US'}/>
                                        <Card header="Teamify" btn="Case Study" image={teamify} text="A web-based dashboard which serves as a centralized platform that enables team leaders, managers, and stakeholders to efficiently monitor, analyze, and optimize team performance, tasks, and collaboration in real-time" link={'https://www.behance.net/gallery/176343673/Teamify'}/>
                                        <Card header="Ankra" btn="Case Study" image={ankra} text="A website that allows customers to find tailors within their vicinity, book appointments with them, choose the design they desire from the site or anywhere else and get it delivered to their doorstep. " link={'https://www.behance.net/gallery/158520391/Ankra-Case-Study'}/><br/>
                                        <Card header="Livestock-Watch" btn="In progress" image={livestock} text="A web app that provides detailed health reports to help you make informed decisions about your livestock, identify trends and prevent future health issues. " link={'#'}/><br/>
                                        <Card header="Goodness Gym" btn="In progress" image={goodness} text="Fitness" link={'#'}/><br/>
                                        <Card header="Trixmed" btn="Live" image={trixmed} text="Healthcare | Transportation " link={'https://www.trixmedtransportation.com/'}/><br/>
                                        {/* <Card header="Foodies" btn="Case Study" image={foodie} text="Food" link={'https://www.behance.net/gallery/155884893/Foodie-UIUX-Case-Study'}/>
                                        <Card header="G11" image={g11} text="Edtech" link={'https://www.behance.net/gallery/174205365/G11-Schools'}/>
                                        <Card header="ichat" image={ichat} text="Social Media" link={'https://www.behance.net/gallery/152349783/i-chat-App'}/>
                                        <Card header="Carz" image={car} text="Automobile" link={'https://mir-s3-cdn-cf.behance.net/projects/808/23fb76151923401.Y3JvcCw5NDYsNzQwLDQ5LDA.jpg'}/> */}
                                    </Fade>
                                </div>
  
                                <Fade direction="down" triggerOnce="true">
                                    <Link to='https://www.behance.net/agbajeisrael' target="_blank" className="animate-bounce bg-primary py-4 px-16 justify-items-start ml-0 text-white rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">View More</Link> 
                                </Fade> 
                            </div>
                            
                            {/* Brand */}
                            <div className={toggle === 2 ? 'show-tabs' : 'tabs'}>
                                <Brand/> 
                            </div>
                            
                            {/* Illustration */}
                            <div className={toggle === 3 ? 'show-tabs' : 'tabs'}>
                                <Product/> 
                            </div> 
                        </div>
                        <Footer/>
                    </div> 
                    )
            }         
        </>

     );
}
 
export default Portfolio;