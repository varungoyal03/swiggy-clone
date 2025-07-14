import { CDN_URL } from "../utils/constanst";



const Card = ( {resdata}) => {
    const { cloudinaryImageId, name, avgRating, cuisines,  sla} =
    resdata?.info;

    return (
      <div className="res-card bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
        <img
          className="res-logo w-full h-40 object-cover rounded-t-lg"
          src={CDN_URL+cloudinaryImageId}
          alt="Restaurant Logo"
        />
  
        <h3 className="font-bold text-lg mt-2">{name}</h3>
        <h4 className="text-gray-600">Rating : {avgRating}</h4>
        <h4 className="text-gray-600 break-words">{cuisines.join(",") }</h4>
        <h4 className="text-gray-600">{sla.slaString}</h4>

      </div>
    );
  };

  export default Card



export const withPromotedLabel=(ResCard)=>{

return (props) =>{

  return  <div className="relative">

  <label className="absolute z-10  text-white rounded-md bg-black p-2 shadow-md">Promoted </label>
  <ResCard  {...props}/>

  </div>



}


}