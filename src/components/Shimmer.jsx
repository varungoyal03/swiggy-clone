import { CARD_PLACEHOLDER } from "../utils/constanst";



const ShimmerCard = () => {
    return (
      <div className="res-card bg-gray-200  animate-pulse rounded-lg p-4">
        {/* Shimmer for the image */}
        <div className="res-logo bg-gray-300 w-full h-40 rounded-t-lg"></div>
  
        {/* Shimmer for the text */}
        <div className="mt-2 bg-gray-300 h-6 w-3/4  rounded"></div>
        <div className="mt-2 bg-gray-300 h-4 w-1/2 rounded"></div>
        <div className="mt-2 bg-gray-300 h-4 w-full rounded"></div>
        <div className="mt-2 bg-gray-300 h-4 w-1/4 rounded"></div>
      </div>
    );
  };
 const Shimmer=()=>{


    return (

<div className="w-4/5 m-auto my-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
  </div> </div> )

 }

 export default Shimmer;