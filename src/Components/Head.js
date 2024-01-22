import "../style.css"

const Head = (props) => {
    return ( 
        <>
            <div className="card px-2 py-2 rounded-md border-secondary-2 grid justify-items-center">
                <h3 className="text-black font-bold text-5xl mb-4">{props.header}</h3>
                <div className="w-16 h-2 bg-primary mb-2"></div><br/>
            </div>
        </>
     );
}
 
export default Head;