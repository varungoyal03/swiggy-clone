import { useParams } from "react-router-dom";

import Shimmermenu from "./Shimmermenu";
import { useResMenu } from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const Menu = () => {

  const [showIndex,setShowIndex]=useState(null);

  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo == null) {
    return <Shimmermenu />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  // let { title, itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>  c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  return (
    <div className="p-4 bg-white shadow-md text-center">
      <div className="menu-header mb-4">
        <h1 className="text-5xl m-5 font-bold">{name}</h1>
        <h3 className="text-lg text-gray-600">{cuisines.join(", ")}</h3>
        <h4 className="text-md text-gray-800">Avg Rating: {avgRating}</h4>
        <h4 className="text-md text-gray-800">{sla.slaString} Delivery</h4>
      </div>

      <div className="menu-main">
        <h2 className="text-xl font-semibold mb-2">Menu</h2>
        {/* <h2 className="text-lg font-medium mb-4">{title}</h2> */}
        <div className="items ">

{/*           
         controlled components */}

          {categories.map((category,index)=>(<ResCategory key={category?.card?.card.title}  data={category?.card?.card} 
          showIndex={index===showIndex?true:false}  setShowIndex={()=>setShowIndex(prevIndex=>prevIndex===index?null:index)} />))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
