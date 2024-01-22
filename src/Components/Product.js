import "../style.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

const images = require.context('../img/ill', true);
const imageList = images.keys().map(image => images(image));

const Illustration = () => {
      return (
        <div> 
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {imageList.map((image, index) => (
                <LazyLoadImage key={index} src={image} className="w-full sm:h-96 md:h-96 lg:h-72 object-cover cursor-pointer" alt=""/>
            ))}
          </div>
        </div>
       );
    }
     
export default Illustration;
 
