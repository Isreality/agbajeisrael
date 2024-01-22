import "../style.css"

const Testimonial = (props) => {
    return ( 
        <>
            <div className="card bg-white px-8 py-8 rounded-md border-fade border-2 grid justify-items-start">
                <div className="flex justify-start items-center gap-3">
                    <img src={props.image} alt="" className=' h-20 w-20 rounded-full object-cover'></img>
                    <div className="grid justify-items-start">
                        <p className="text-primary text-xl font-bold">{props.name}</p>
                        <p className="text-shade text-left">{props.role}</p> 
                    </div>                    
                </div><br/>
                <p className="text-black text-justify">{props.text}</p>                   
            </div>
           
        </>
     );
}
 
export default Testimonial;