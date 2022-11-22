import React, { useEffect, useState } from 'react'
import PokemonThumb from './PokemonThumb'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// import PokemonDetails from './components/PokemonDetails'

// export default function Appp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />}> </Route>
//           <Route path="poke" element={<Poke />}></Route>
        
     
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<Appp />, document.getElementById('root'))



const AllPoke = () => {
  

  
   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    
    <div className="app-contaner w-[100%] flex flex-col justify-center  items-center font-sans">

      <h1 className='text-center text-[20px] lg:text-[40px] md:text-[25px] font-bold pt-3 py-3 font-sans'>Pokemon Evolution</h1>
      <div className="pokemon-container md:w-[80%]">
     
        <div className=" grid grid-cols-3  px-3 md:gap-5 gap-2 flex items-center justify-center all-container">
        
          {allPokemons.map( (pokemonStats, index) => 
          <Link className='shadow-lg rounded-[12px] px-2 pr-2 point w-19.5 h-22 flex items-center justify-center bg-white shadow-gray ' id='link' to={`/${pokemonStats.id}`}>
            <PokemonThumb
              key={index +1}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              // type={pokemonStats.types[0].type.name}
              
            />
            </Link>
            
            )
            
            }
        <Outlet />
        </div>
       
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>

  );
}
    
export default AllPoke;