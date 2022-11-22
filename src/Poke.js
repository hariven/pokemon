import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import { Link, useParams } from "react-router-dom";
const Poke =({id }) => {
    
const params=useParams();

    const[allPokemons, setAllPokemons] = useState([])
   //const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
   // const res = await fetch(loadMore)
    // const data = await res.json()

   // setLoadMore(data.next)

    async function createPokemonObject(results)  {
      
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${results}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        allPokemons.sort((a, b) => a.id - b.id)
      
    }
    createPokemonObject(params.id)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

//[//[{//[{name://[{name:}]}]}]]
  return (
    <>

        {/* <h2>Invoice: {params.id}</h2>; */}
          {allPokemons.map( (pokemonStats, index) => 
        
        
        
            <Profile
              key={index}
              // id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              height={pokemonStats.height}
              weight={pokemonStats.weight}
              hp={pokemonStats.stats[0].base_stat}
              Attack={pokemonStats.stats[1].base_stat}
              Defense={pokemonStats.stats[2].base_stat}
            //   id={params.id}
              type={pokemonStats.types[0].type.name}
              type2={pokemonStats.types[1].type.name}
              
            />
           
     

    )
    }
    </>
  )
    
}

export default Poke;