import { useState } from "react"
import Item from "./item"

const ResCategory=({data,showIndex,setShowIndex})=>{


    return (


        <div className="w-1/2 m-auto  my-4 bg-gray-50 shadow-md  p-4 rounded-lg"> 
 
            {/* header */}
            <div  className="flex justify-between cursor-pointer" onClick={()=>{ setShowIndex() }}> <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
            <span className="transition duration-500 ease-in-out">{showIndex?"🔼":"🔽"} </span> </div>
 

          {/* body */}
            <div >
                {showIndex && data.itemCards.map(item => (<Item item={item}   key={item.card.info.id}/>)

                )}
            </div>




        </div>
    )



}

export default ResCategory