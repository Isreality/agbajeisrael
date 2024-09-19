import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./style.css";
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
import Card from './Components/Card';
import { Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { FaArrowUp } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


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

                    <div className=""> 
                    <Navbar/>          
                        {/* Portfolio */}
                        <div className='port grid items-center'>
                            <div className="head py-24 px-20">
                                <Fade left><h2 className="text-white text-center font-medium text-4xl">Portfolio</h2></Fade><br/>
                            </div>
                        </div> 

                        {/* Back to top button */}
                        <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>   
                        
                        {/* Tab Header */}
                        <div className="lg:px-20 py-16">
                            <div className="grid grid-cols-3 border-b-2 border-fade py-0 lg:px-32 items-center gap-0 cursor-pointer">           
                                <h2 className= {`${toggle === 1 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(1)}>Product Design</h2>                
                                <h2 className={`${toggle === 2 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(2)}>Graphic Design</h2>
                                <h2 className={`${toggle === 3 ? "tab active-tabs" : "tab"}`} onClick={()=>updateToggle(3)}>Illustration</h2>
                            </div><br/><br/> 
                            
                            {/* Product Design */}
                            <div className= {toggle === 1 ? 'show-tabs' : 'tabs'}>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-1">
                                    <Zoom clear>
                                        <Card header="Airtime to Cash" btn="Live" image={a2c} text="Fintech" link={'https://play.google.com/store/apps/details?id=com.airtimetocash.app&hl=ru'}/>
                                        <Card header="Clator" btn="Live" image={clator} text="Edtech" link={'https://play.google.com/store/apps/details?id=net.ngscholars.clator&hl=en_US&gl=US'}/>
                                        <Card header="Teamify" btn="Case Study" image={teamify} text="Admin Dashboard" link={'https://www.behance.net/gallery/176343673/Teamify'}/>
                                        <Card header="Ankra" btn="Case Study" image={ankra} text="Fashion | E-commerce " link={'https://www.behance.net/gallery/158520391/Ankra-Case-Study'}/><br/>
                                        <Card header="Trixmed" btn="Live" image={trixmed} text="Healthcare | Transportation " link={'https://www.trixmedtransportation.com/'}/><br/>
                                        <Card header="Livestock" btn="In progress" image={livestock} text="Animal | Health " link={'#'}/><br/>
                                        <Card header="Goodness Gym" btn="In progress" image={goodness} text="Fitness" link={'#'}/><br/>
                                        <Card header="Foodies" btn="Case Study" image={foodie} text="Food" link={'https://www.behance.net/gallery/155884893/Foodie-UIUX-Case-Study'}/>
                                        {/*<Card header="G11" image={g11} text="Edtech" link={'https://www.behance.net/gallery/174205365/G11-Schools'}/>
                                        <Card header="ichat" image={ichat} text="Social Media" link={'https://www.behance.net/gallery/152349783/i-chat-App'}/>
                                        <Card header="Carz" image={car} text="Automobile" link={'https://mir-s3-cdn-cf.behance.net/projects/808/23fb76151923401.Y3JvcCw5NDYsNzQwLDQ5LDA.jpg'}/> */}
                                    </Zoom>
                                </div>
                                
                                <Bounce clear>
                                    <Link to='https://www.behance.net/agbajeisrael' target="_blank" className="animate-bounce bg-primary py-4 px-16 justify-items-start ml-0 text-white rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">View More</Link> 
                                </Bounce> 
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