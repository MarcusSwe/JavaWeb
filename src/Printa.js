import React, { useState, useEffect } from 'react'


let x = "";
let y = false;
let i = 0;
let name = "";
let lastName = "";
let age = 0;
//let present = false;

export default function PrintaPokemon(props){

const [sida, setSida] = useState(false)
const [Xpokemons, XsetPokemons] = useState()
const [Xlastname, XsetLastname] = useState()
const [Xnumber, XsetNumber] = useState()
const [Xpresent, XsetPresent] = useState()


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

//<label for={p.index}><input type="checkbox" checked={p.Present} onChange={e => {props.checkBoxChanged(index, e.target.checked)}}></input></label>

function PrintaPoks(props){  
 
  return (
    <div className="topa"> 
          <span className="Kurs">Kursnäro</span>
          {props.poke.map((p, index) => <div key={p.index}  index={index} className="test">                    
          <p>{p.firstName} </p>
          &nbsp;
          <p>{p.lastName} </p>
          &nbsp;
          &nbsp;
         
          <label className="check" for={p.index}><input type="checkbox" checked={p.Present} onChange={e => {props.checkBoxChanged(index, e.target.checked)}}></input><p className="box"></p></label>
         
          <p>Present</p>
          &nbsp;
          &nbsp;
          &nbsp;
          <button className="square shape" onClick={e => {setSida(true); XsetPokemons(p.firstName); XsetLastname(p.lastName); i = index; XsetNumber(p.Age); XsetPresent(p.Present)}}> <span class="text2">edit</span> </button>
          &nbsp;
          <button className="square shape" onClick={e => {props.removePokemon(index)}}><span class="text2">remove</span></button>     
              
          </div>)}
          <div></div>    
          <div></div>
          <div>
          <p>Add Student</p>
   
          <p>Name: <input type="text" value={Xpokemons} onChange={e => {XsetPokemons(e.target.value)}}/></p>
          <p>Lastname: <input type="text" value={Xlastname} onChange={e =>{XsetLastname(e.target.value)}}></input></p>

          <p>Age: <input type="number" value={Xnumber} onChange={e =>{XsetNumber(e.target.value)}}/></p>
          <p>Present: <input type="checkbox" checked={Xpresent} onChange={e =>{XsetPresent(e.target.checked)}}/></p>

          <button onClick={e => {props.addUser(Xpokemons, Xlastname, Xnumber, Xpresent); XsetPokemons(""); XsetLastname(""); XsetNumber(""); XsetPresent(true)}}> Create </button>  
          </div>
    </div>
  )
}

function PrintaInfo(props){ 
return <div>   
   <span className="Kurs">Kursnäro</span>
   <p>Edit Student</p>
   
   <p>Name: <input type="text" value={Xpokemons} onChange={e => {XsetPokemons(e.target.value)}}/></p>
   <p>Lastname: <input type="text" value={Xlastname} onChange={e =>{XsetLastname(e.target.value)}}></input></p>

   <p>Age: <input type="number" value={Xnumber} onChange={e =>{XsetNumber(e.target.value)}}/></p>
   <p>Present: <input type="checkbox" checked={Xpresent} onChange={e =>{XsetPresent(e.target.checked)}}/></p>

   <button className="square shape" onClick={e => {setSida(false); props.updateUser(i, Xpokemons, Xlastname, Xnumber, Xpresent); XsetPokemons(""); XsetLastname(""); XsetNumber(""); XsetPresent(true)}}> <span class="text2">back</span> </button>   
   <button className="square shape" onClick={e => {setSida(false); props.removePokemon(props.index)}}><span class="text2">remove</span></button>          
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

