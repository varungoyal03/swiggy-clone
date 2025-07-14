import { useDispatch } from 'react-redux';
import { CDN_URL } from './../utils/constanst';
import { addItem } from '../utils/cartSlice';


const Item=({item})=>{

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    // dispatch an action 
    dispatch(addItem(item));
  }


    return (

<div className=" transition duration-1000 ease-in-out text-left  p-2 m-2 flex justify-between border-b-2 ">


       {/* Left Section: Item Details */}
    <div className="w-3/4 text-lg  ">
      
         <div className="py-2 font-semibold">     
          <span>{item.card.info.name}</span>     
          <span>
            - ₹
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
           </span>
         </div>

         <p className="text-sm">{item.card.info.description}</p>

    </div>

    {/* Right Section: Image and Add Button */}
  
<div className='text-center'>
       <img   src={CDN_URL + item.card.info.imageId}
        alt={item.card.info.name} 
        className=' rounded-xl w-36 h-36 object-cover ml-6 '/>
        

        <button  className="p-2  px-8 bg-black text-white shadow-lg hover:bg-white hover:text-black transition-all duration-[.3s]"
        onClick={()=>{handleAddItem(item)}}>
          Add 
        </button>

</div>
        

   




</div>


    )
}

export default Item;