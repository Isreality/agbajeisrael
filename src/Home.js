import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./style.css"
// import izzy from './img/izzy.png';
import izzy2 from './img/izzy2.jpeg';
import kazeem from './img/kazeem.jpg';
import brand from './img/brand.svg';
import product from './img/product.svg';
import ill from './img/ill.svg';
import ankra from './img/ankra.png';
import teamify from './img/teamify.png'
import { Link } from "react-router-dom";
import Card from "./Components/Card";
import Head from "./Components/Head";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { FaArrowUp } from "react-icons/fa";
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


const Home = () => {
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

                <>
                    <Navbar/>
                    <div className='pro grid sm:grid-cols-1 lg:grid-cols-1 items-center'>
                        <div className="grid sm:justify-items-center lg:justify-items-start py-0 px-20 gap-0">
                            <Fade left>
                            <h2 className="text-primary font-bold text-6xl">I am Israel</h2><br/>
                            <p className="text-white sm:text-center lg:text-left text-2xl">A Graphic Designer, Product Designer & Illustrator.</p><br/>
                            <Link to='https://drive.google.com/file/d/1angQWC2zL_3h0B711whiC123vfJ9E4PZ/view?usp=drive_link' target="_blank" className="bg-primary py-4 px-8 text-white rounded-full hover:bg-transparent hover:text-white hover:border-2 border-white">View Resume</Link>
                            </Fade>
                        </div>
                    </div>
                    

                    {/* Back to top button */}
                    <FaArrowUp onClick={() => handleClick()} style={{display: visible ? 'inline' : 'none'}} className="fixed bg-primary rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-primary hover:border-primary hover:border-2"/>

                    {/* Stat */}
                    <div className="grid items-center sm:grid-cols-3 lg:grid-cols-3 py-12 px-32 lg:gap-10 sm:gap-5 bg-black text-white text-center">
                        <div className="">
                            <h2 className="text-7xl text-primary font-bold mb-2"><CountUp start={0} end={5} duration={8}/>+</h2>
                            <p className="text-2xl mb-8">Years Experience</p>
                        </div>

                        <div className="">
                            <h2 className="text-7xl text-primary font-bold mb-2"><CountUp start={0} end={10} duration={8}/>+</h2>
                            <p className="text-2xl mb-8">Clients</p>
                        </div>

                        <div className="">
                            <h2 className="text-7xl text-primary font-bold mb-2"><CountUp start={0} end={50} duration={5}/>+</h2>
                            <p className="text-2xl mb-8">Projects</p>
                        </div>
                    </div>

                    {/* About */}
                    <div className="grid justify-items-left items-center sm:grid-cols-1 lg:grid-cols-2 py-20 px-20 bg-fade gap-20">
                        <div className="grid sm:justify-items-center lg:justify-items-start">
                            <Fade left>
                                <Head header="About Me"/>
                                <p className="lg:text-justify sm:text-left text-black text-xl mb-8">I am a highly creative and detail-oriented Graphic Designer, Product Designer & Illustrator with years of experience in developing captivating visual identities and designing user-centric products.</p>
                                <p className="lg:text-justify sm:text-left text-black text-xl mb-8">A problem solver with a passion for innovation and can collaborate with cross-functional teams to deliver exceptional design solutions using deep understanding of design principles.</p>
                            </Fade>
                        </div>  

                        <div className="grid justify-items-center"> 
                            <Fade right><img src={izzy2} alt="" className="rounded-lg h-full w-full object-cover"/></Fade> 
                        </div>  
                    </div>

                    {/* What I Do */}
                    <div className="py-12 lg:px-20 gap-10 bg-white">
                        <div className="justify-start">
                            <Fade left><Head header="What I Do"/></Fade>
                            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
                                <Zoom clear>
                                    <Services image={product} header="Product Design" text="Focus on creating visually appealing interfaces that delights users through wireframing, prototyping, and user testing to deliver a seamless user experience."/>
                                    <Services image={brand} header="Graphic Design" text="Design unique logos and graphics that reflect the essence of your brand, ensuring it maintains a visually appealing image across all digital touchpoints."/>
                                    <Services image={ill} header="Illustration" text="Leverage my artistic skills to add a compelling visual layer to your project. Let's create visuals that captivate and communicate."/>
                                </Zoom>
                            </div>
                            
                        </div>
                    </div>

                    {/* Works */}
                    <div className="py-12 lg:px-20 gap-10 bg-white">
                        <div className="justify-start">
                            <Fade right><Head header="My Works"/></Fade>
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                                <Zoom clear>
                                    <Card header="Teamify" image={teamify} text="Admin Dashboard" btn="Case Study" link={'https://www.behance.net/gallery/176343673/Teamify'}/>
                                    <Card header="Ankra" image={ankra} className="h-full w-full object-cover hover:scale-105" btn="Case Study" text="E-commerce Website" link={'https://www.behance.net/gallery/158520391/Ankra-Case-Study'}/>
                                </Zoom>
                            </div><br/><br/>

                            <Bounce clear>
                                <Link to='/Portfolio' className="animate-bounce bt bg-primary py-4 px-16 justify-items-start ml-0 text-white rounded-full hover:bg-white hover:text-primary hover:border-2 border-primary">See all</Link>
                            </Bounce>
                        </div>
                    </div><br/><br/>

                    {/* Quote */}
                    <div className='hero'>
                        <div className="head py-24 px-32">
                            <Fade bottom>
                                <h2 className="text-white text-center font-medium text-2xl">The key to great ideas is not having them, it is executing them and
                                great ideas come from problems. As designers, we call problems, <span className="text-primary">“Briefs”</span> and we call reaction to problems, <span className="text-primary">“Concept”</span></h2><br/>
                                <p className="text-primary font-bold">- Kate Moross</p><br/><br/>
                            </Fade>
                        </div>

                    </div>

                    {/* Testimonial */}
                    <div className="py-12 sm:px-28 lg:px-20 gap-10 bg-white">
                        <div className="justify-center">
                            <Fade bottom><Head header="Testimonials"/></Fade>
                            <div className="grid lg:grid-cols-1 sm:grid-cols-2 gap-5">
                                <Zoom clear>
                                    <Testimonial image={kazeem} name="Ashaluwala Kazeem" role="Mobile Developer, Frontend Labs" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/>
                                    
                                    {/* <Testimonial name="Prof. Onashoga" role="CEO, Ogdams Technologies" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/> */}
                                        
                                    {/* <Testimonial name="Ogunsiji Damilare" role="CEO, Ogdams Technologies" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/> */}
                                    
                                    {/* <Testimonial name="Ogunsiji Damilare" role="CEO, Ogdams Technologies" text='"I had the pleasure of working with Israel on more than 3 projects. His proficiency in design is truly remarkable,
                                    showcasing not only technical expertise but also a keen aesthetic eye. Each collaboration with him was a seamless experience, consistently
                                    delivering visually stunning and user-friendly interfaces. I highly recommend his services to anyone seeking a talented and reliable UI/UX professional"'/> */}
                                </Zoom>
                            </div>
                            
                        </div>
                    </div>
                    
                    <Footer/>
                    
                </>
                  )

            }
            
            

        </>
     );
}
 
export default Home;