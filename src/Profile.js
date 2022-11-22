import React from "react";

const Profile =({image, name , height, weight, hp, Attack, Defense, type, type2}) => {

    
    return(
        <>
        
            <div className=' profile flex w-full  justify-center text-center items-center h-screen bg-gray-900'>
                <div className='pic shadow shadow-lg hover:shadow-white-500/5 points bg-white px-6 py-5 rounded '>
                <img className="w-44 p-2" src={image} />
                <h3 id="name" className="uppercase font-bold text-[30px] ">{name}</h3> 
                    <div className="power flex justify-center text-center items-center ">
                    
                        <div className="px-4 py-2 rounded-full  m-3 bg-red-700 box"><h3>{type}</h3> </div>
                        <div className="px-4 py-2 rounded-full bg-red-700 box"><h3>{type2}</h3> </div>
                    </div>
                     
                     <div className="flex flex-col items-center text-[20px] text-left ">
                        <h3 className=""> <span className="text-left">Height:</span> <span className="ml-4"> {height}cm </span></h3> 
                        <h3 className=" "> <span className="text-left">weight:</span> <span className="ml-4">{weight}kg </span></h3> 
                        <h3 className=" "><span className="text-left">hp:</span> <span className="ml-10"> {hp} </span></h3> 
                        <h3 className=" "> <span className="text-left">Atack:</span><span className="ml-4"> {Attack} </span></h3> 
                        <h3 className=""> <span className="text-left">Defense:</span><span> {Defense} </span></h3> 
                     </div>
                </div>
            </div>

    </>
    )
    
}

export default Profile;