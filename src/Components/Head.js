import "../style.css"
import "../fonts.css";

const Head = (props) => {
    return ( 
        <>
            <div className="card px-2 py-2 rounded-md border-secondary-2 grid justify-items-center">
                <h3 className="text-primary font-bold text-3xl md:text-5xl mb-4" style={{fontFamily: 'ClashDisplay-Semibold, sans-serif'}}>{props.header}</h3>
                <div className="w-16 h-2 bg-white mb-2"></div><br/>
            </div>
        </>
     );
}
 
export default Head;