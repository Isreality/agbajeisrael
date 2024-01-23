import { useState } from "react";
import NavbarData from "../Components/NavbarData";
import "../style.css"
import { NavLink } from 'react-router-dom';
import "../index.css"
import { RxHamburgerMenu } from "react-icons/rx";
import {MdClose} from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    // flex w-full basis-full sm:flex-col items-center gap-10

    return ( 
        <div className="sticky top-0 w-full bg-white flex flex-wrap justify-between px-12 sm:px-20 py-4 m-0 z-50 items-center border-primary border-b-2">
            <div className="flex justify-items-start items-center">                
                <h1 className="m-4 font-extrabold text-primary text-2xl">Isreality</h1>
            </div>

            <div className="md:hidden">    
                <button onClick={()=>toggleNavbar(true)} className="text-black">{isOpen ? <MdClose/> : <RxHamburgerMenu/>}</button>
                {isOpen &&(
                <div>
                    <div className="fixed h-full w-screen right-0 -translate-x-0 transition-all">
                        <div className="flex bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-10 z-[100] w-56">
                        {NavbarData.map((nav) => (
                            <div key={nav.id}>
                                <NavLink to={nav.path} className=" m-2 text-black hover:text-white hover:bg-primary font-medium hover:border-2 hover:rounded-full hover:border-primary px-8 py-4">{nav.title}</NavLink>
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