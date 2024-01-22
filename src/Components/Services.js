import "../style.css"
// import brand from '../img/brand.svg'

const Services = (props) => {
    return ( 
        <>
            <div className="card bg-white px-8 py-16 rounded-md border-fade border-2 grid justify-items-center">
                <img src={props.image} alt="" className='w-90'></img><br/>
                <h2 className="text-primary text-3xl font-bold">{props.header}</h2>
                <p className="text-black">{props.text}</p>
            </div>
        </>
     );
}

export default Services;