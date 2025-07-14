import { useRouteError } from "react-router-dom"

const Error=()=>{
 
     const err=useRouteError();
return (
  
    <div className="flex flex-col items-center  py-16  p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops !</h1>
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Something went wrong !</h2>
      <h3 className="text-4xl font-bold text-gray-800 mb-4">{err.status}:{err.statusText}</h3>

    </div>
)

}


export default Error;