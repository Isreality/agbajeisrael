import "../style.css"

const Testimonial = (props) => {
    return ( 
        <>
            <div className="card bg-shade px-8 py-8 md:py-16 rounded-md grid justify-items-start">
                <div className="flex justify-start items-center gap-3">
                    <img src={props.image} alt="" className=' h-20 w-20 rounded-full object-cover'></img>
                    <div className="grid justify-items-start">
                        <p className="text-primary text-left text-xl font-bold">{props.name}</p>
                        <p className="text-white text-left font-light">{props.role}</p> 
                    </div>                    
                </div><br/>
                <p className="text-white text-sm md:text-md text-left md:text-justify">{props.text}</p>                   
            </div>
           
        </>
     );
}
 
export default Testimonial;