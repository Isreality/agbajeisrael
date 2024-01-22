import "../style.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = require.context('../img/brand', true);
const imageList = images.keys().map(image => images(image));

const Brand = () => {
 return ( 
        <> 
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">          
              {imageList.map((image, index) => (
                  <LazyLoadImage key={index} src={image} className="image w-full sm:h-96 lg:h-72 object-cover cursor-pointer" alt="im" />
              ))}

            </div>       
        </>
     );
}
 
export default Brand;


