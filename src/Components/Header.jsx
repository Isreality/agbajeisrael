import { useState } from "react";
import NavbarData from "../Components/NavbarData";
import "../style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../index.css"
// import logo from '../img/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import {MdClose} from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    // flex w-full basis-full sm:flex-col items-center gap-10

    return ( 
        <div className="top-2 left-4 md:left-60 w-[70%] md:w-[90%] lg:w-[60%] bg-none md:bg-white flex flex-wrap justify-between px-4 md:px-16 py-4 m-0 z-50 items-center rounded-full">
            <div className="hidden md:flex lg:flex justify-start items-center">                
            <Link to='/Home' ><h1 className="mb-4 mt-4 font-extrabold text-primary text-lg md:text-2xl">Isreality</h1></Link>
            </div>

            <div className="md:hidden">    
                <button onClick={()=>toggleNavbar(true)} className="text-white">{isOpen ? <MdClose className="text-white font-bold absolute size-5 top-5 z-50 mr-4 right-4"/> : <RxHamburgerMenu className="text-white font-bold absolute top-10 size-5 mr-4 right-4"/>}</button>
                {isOpen &&(
                <div>
                    <div className="fixed h-full w-screen right-0 -translate-x-0 transition-all top-0 py-8">
                        <div className="flex bg-black flex-col absolute right-0 top-0 h-screen p-8 gap-10 z-[100] w-56">
                        {NavbarData.map((nav) => (
                            <div key={nav.id}>
                                <NavLink to={nav.path} className=" m-2 text-white hover:text-white hover:bg-primary font-medium hover:border-2 hover:rounded-full hover:border-primary px-8 py-4">{nav.title}</NavLink>
                            </div> 
                        ))}
                        </div> 
                    </div>
                </div>
            )}      
            </div>

            <div className="hidden justify-items-start gap-1 md:flex lg:flex">
                <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col">
                {NavbarData.map((nav) => (
                    <div key={nav.id}>
                        <NavLink to={nav.path} className=" m-2 text-black hover:text-white hover:bg-primary font-medium hover:border-2 hover:rounded-full hover:border-primary px-8 py-4">{nav.title}</NavLink>
                    </div> 
                ))}
                </div>  
            </div>

            

     
        </div>
     );  
}
 
export default Navbar;