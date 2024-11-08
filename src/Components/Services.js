import "../style.css"
// import brand from '../img/brand.svg'

const Services = (props) => {
    return ( 
        <>
            <div className="card bg-shade px-8 py-16 rounded-md grid justify-items-center md:justify-items-start">
                <img src={props.image} alt="" className='w-90'></img><br/>
                <h2 className="text-primary text-xl md:text-3xl text-center md:text-left font-black mb-2">{props.header}</h2>
                <p className="text-white text-sm md:text-base text-center md:text-left">{props.text}</p>
            </div>
        </>
     );
}

export default Services;