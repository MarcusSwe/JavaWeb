import React, { useEffect, useState } from 'react';
import './App.css';
import Printa from './Printa';

function App() {
  
  const [pokemons, setPokemons] = useState([
   {firstName: "Peter", lastName: "Appelgren", Age: "102", Present:true},
   {firstName: "Britta", lastName: "Börjesson", Age: "10", Present:false},
   {firstName: "Gösta", lastName: "Ekman", Age: "23", Present:true},
   {firstName: "Ander", lastName: "Person", Age: "19", Present:true},
  ])


  // lägg fetch från härifrån istållet??
 /* useEffect(() => {
    async function fetchPokemons(){
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      const pokemon = await resp.json()
      const pokemon50 = pokemon.results.slice(0,49)
      pokemon50.forEach(e => {e.bildUrl = '"#"';});
      setPokemons(pokemon50);       
    }
    fetchPokemons();        
  },[]);*/

 function removePokemon(x){
   const removed = [...pokemons];
   removed.splice(x,1);   
   setPokemons(removed);
  }

  function addUser(Xpokemons){
    const changed = [...pokemons];
    changed.push(Xpokemons);
    setPokemons(changed);
  }

  function checkBoxChanged(i, props){
    const cBoxchanged = [...pokemons];
    cBoxchanged[i].Present = props;
    setPokemons(cBoxchanged);
  }

  return (
        <div>
        <Printa 
        poke={pokemons}
        removePokemon = {removePokemon}
        addUser = {addUser}
        checkBoxChanged = {checkBoxChanged}
        />        
      </div>  
  )
 
}

export default App;

