import "../style.css"
import { Link } from 'react-router-dom';
import behance from '../img/behance.svg';
import linkedin from '../img/linkedin.svg';
import X from '../img/X.svg';
// import NavbarData from "../Components/NavbarData";

const Footer = () => {
    return ( 
        <>
            <div className="bg-black grid sm:grid-cols-1 lg:grid-cols-3 py-16 px-4 md:px-16 gap-10">
                <div className="grid justify-items-start">
                    {/* <h4 className="text-white text-left font-bold text-xl md:text-2xl mb-4">Interested to work on a project?</h4> */}
                    <h4 className="text-white text-left font-bold text-xl md:text-2xl mb-4"> Let us work together</h4>
                    <Link to='mailto:isrealitycreations@gmail.com' target="_blank" className=" bg-primary py-4 px-16 ml-0 items-center text-white rounded-full hover:border-2 border-primary">Contact</Link>
                </div>

                <div className="justify-items-start">
                    <h4 className="text-white text-left font-bold text-xl md:text-2xl mb-4">Social Media Handles</h4>
                    <div className="flex justify-start gap-5">
                    <Link to='https://www.behance.net/agbajeisrael' target="_blank"><img src={behance} alt="" className='h-10 w-10'></img></Link>
                    <Link to='https://www.linkedin.com/in/agbajeisrael' target="_blank"><img src={linkedin} alt="" className='h-10 w-10'></img></Link>
                    <Link to='https://www.twitter.com/Agbaje_Israel01' target="_blank"><img src={X} alt="" className='h-10 w-10'></img></Link>
                    </div>                    
                </div>

                <div className="justify-items-start">
                    <h4 className="text-white text-left font-bold text-xl md:text-2xl mb-4">Contact Info</h4>
                    <p className="text-white text-left text-md md:text-xl mb-4">isrealitycreations@gmail.com</p>
                    <p className="text-white text-left text-md md:text-xl mb-4">+2348140082953</p>                   
                </div>
            </div>
        </> 
        
    );
}
 
export default Footer;