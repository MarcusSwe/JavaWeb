import React, { useState, useEffect } from 'react'

let x = "";
let y = false;
let i = 0;

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false)
const [Xpokemons, XsetPokemons] = useState([])


// lägg fetch från spring här istället????
/*useEffect(() => {
  async function XfetchPokemons(){
    const resp = await fetch(y)
    const pokemon = await resp.json()    
    const pokemon500 = [];
    pokemon500.push(pokemon.abilities)
    pokemon500.push(pokemon.sprites)
    pokemon500.push(pokemon.height)
    pokemon500.push(pokemon.moves)    
    XsetPokemons(pokemon500);      
  }
  XfetchPokemons();        
},[sida]);*/


function PrintaPoks(props){  
  return (
    <div>
          {props.poke.map((p, index) => <div key={p.index}  index={index} className="test">          
          <p>{p.firstName} </p>
          &nbsp;
          <p>{p.lastName} </p>
          &nbsp;
          &nbsp;
         <label for={p.index}><input type="checkbox" checked={p.Present} onChange={e => {props.checkBoxChanged(index, e.target.checked)}}></input></label>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button onClick={e => {setSida(true); x = p.name; y = p.url; i = index}}> info </button>
          &nbsp;
          <button onClick={e => {props.removePokemon(index)}}>remove</button>          
          </div>)}
    </div>
  )
}

function PrintaInfo(props){ 
return <div>   
   <img src={Xpokemons[1].back_default} alt={x}/>
   <p><span className="titel">{x}</span></p>
   <p>Abilites: {Xpokemons[0].map((p) => <span key={p.ability.name} className="ability">{p.ability.name}<>, </></span>)} </p>
   <p>Height: <span className="ability">{Xpokemons[2]}</span> </p>
   <p>Moves: {Xpokemons[3].map((p) => <span key={p.move.name} className="ability">{p.move.name}<>, </></span>)} </p>
   <button onClick={e => {setSida(false); props.addUrl(i, Xpokemons[1].back_default)}}> back </button>   
   </div>   
}

function ChooseToPrint(){
  if(!sida) return PrintaPoks(props);
  else return PrintaInfo(props);
}
     return(
        <div>
         {ChooseToPrint()}
      </div>  
    )
}

