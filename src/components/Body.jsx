import { useEffect, useState } from "react";
// import { resdata } from "../utils/resdata";
import Card, { withPromotedLabel } from "./Card";
import { SWIGGY_API } from "../utils/constanst";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [modifiedList,setModifiedList]=useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText,setSearchText]=useState("");

  const CardPromoted=withPromotedLabel(Card)

console.log('BODY RENDERED')


  const fetchdata=async ()=>{
    const data= await fetch(SWIGGY_API);
    const json = await data.json();

    setlistOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setModifiedList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  }


 useEffect(()=>{
  fetchdata()
 },[]); 



  const filter = () => {
    const filteredList = listOfRes.filter((res) => res.info.avgRating >= 4);
    setModifiedList(filteredList);
    setShowTopRated(true)
  };



 const onlineStatus=useOnlineStatus()

 if (onlineStatus===false){  console.log("offline"); return   (<div className="flex flex-col items-center  py-16  p-4">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">Connection Error !</h1>
  <h3 className="text-lg text-gray-600"> 
  Please check your internet connection and try again</h3>

</div>);}



  if (listOfRes.length===0){
    return <Shimmer></Shimmer>
  }

  const search=(text)=>{
    const filteredList=listOfRes.filter(res=> { return res.info.name.toLowerCase().includes(text.toLowerCase())})
    setModifiedList(filteredList);


  }

  return (
    <div className="w-4/5 m-auto">

      {/* Search Bar */}
      <div className="search-container flex items-center m-6">
        <input
            type="text"
          placeholder="Search Restaurant ..."
          className="w-1/2 p-4 text-lg border-none rounded-l-3xl  rounded-r-3xl focus:outline-none bg-gray-700 text-white placeholder-gray-400"
          value={searchText}
          onChange={e =>{setSearchText(e.target.value);
            search(e.target.value);
            }
          }
        />
        {/* <button className="bg-gray-800 text-white text-lg px-6 py-4 rounded-r-3xl hover:bg-gray-900 transition"  onClick={search}>
          Search
        </button> */}

    {/* Filter Button */}
        <div className=" filter ml-4">
          <button
            className="bg-gray-800 text-lg text-white px-7 py-4 rounded-3xl hover:bg-gray-700 transition-all transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 focus:bg-red-900"
            onClick={()=>{filter()}}
          >
            🔍 Filter Top Restaurant
          </button>
        </div>
      </div>

        {/* Message for Top Rated Restaurants */}
        {showTopRated && (
        <div className="text-center text-xl font-bold text-gray-800 mt-4 mb-5">
          Showing Top Rated Restaurants
        </div>
      )}

     {/* Restaurant Cards Container */}
      <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modifiedList.map((res) => (

          <Link className="no-underline" key={res.info.id} to={'/restaurants/' + res.info.id }>
              

       
            {res.info.avgRating<=4.1 ? <CardPromoted resdata={res}/> :<Card  resdata={res}/>}
                   
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
