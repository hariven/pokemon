import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PokemonThumb from './PokemonThumb'
import Poke from "./Poke";
import AllPoke from './AllPoke';
import './App.css';

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



const App = () => {

return (
  
  <div>
      <Routes>
        
          
          <Route path="/" element={ <AllPoke /> } />
          {/* <Route path='/poke' element= {<Poke />} /> */}
          <Route path=":id" element={<Poke/>}/>
        
        
      
      </Routes>
  </div>
   
);
}


//  return (


   
//    <div className="app-contaner">

//      <h1>Pokemon Evolution</h1>
//      <div className="pokemon-container">
//        <div className="all-container">
//          {allPokemons.map( (pokemonStats, index) => 
//            <PokemonThumb
//              key={index}
//              // id={pokemonStats.id}
//              image={pokemonStats.sprites.other.dream_world.front_default}
//              name={pokemonStats.name}
//              // type={pokemonStats.types[0].type.name}
//            />)}
         
//        </div>
//          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
//      </div>
//    </div>

//  );
// }
   
    
export default App;