import { Link } from "react-router-dom";
import "../style.css";
// import { Link } from 'react-router-dom';
// import teamify from '../img/teamify.png'

const Card = (props) => {
    return ( 
        <>
            <div className="card bg-shade px-2 py-2 md:py-4 rounded-md overflow-hidden">
                <Link to={props.link} target="_blank">
                    <img className='h-125 w-full object-cover hover:scale-105' src={props.image} alt=""></img>
                        <div className="px-0 md:px-8 py-4 md:py-8">
                            <div className="flex justify-between items-center py-2 px-2 mb-0 md:mb-1">
                                    <h2 className="text-primary text-lg md:text-4xl font-black">{props.header}</h2>
                                    <Link to={props.link} target="_blank"><h2 className="bg-primary px-2 md:px-6 py-1 text-xs md:text-lg text-white rounded-full border-2 hover:bg-white hover:text-primary hover:border-2 border-primary">{props.btn}</h2></Link>
                            </div>
                            <div className="px-2">   
                                <p className="text-white text-justify md:text-justify text-xs md:text-xl font-light">{props.text}</p>
                            </div>
                        </div>
                </Link>
                
            </div>
        </>
     );
}
 
export default Card;
