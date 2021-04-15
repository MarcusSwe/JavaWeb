import React, { useEffect, useState } from 'react';
import './App.css';
import './App.scss';
import Printa from './Printa';

function App() {
  


  const [pokemons, setPokemons] = useState([
   {firstName: "Peter", lastName: "Appelgren", Age: "102", Present:true},
   {firstName: "Britta", lastName: "Börjesson", Age: "10", Present:false},
   {firstName: "Gösta", lastName: "Ekman", Age: "23", Present:true},
   {firstName: "Ander", lastName: "Person", Age: "19", Present:true},
  ])

 const [omegaHook, callOmegaHook] = useState(9999)

  // lägg fetch från härifrån istållet??
  useEffect(() => {
    async function fetchPokemons(){
      const resp = await fetch('http://localhost:8080/api/students')
      const pokemon = await resp.json()
      const pokemon50 = [...pokemon];      
      setPokemons(pokemon50);      
      console.log(pokemon50);
    }
    fetchPokemons();        
  },[omegaHook]);

 function removePokemon(x){
   const removed = [...pokemons];
   removed.splice(x,1);   
   setPokemons(removed);
  }



  function addUser(Xfirstname, Xlastname, Xage, Ypresent){

  let omega = Math.floor(Math.random()* 10000000000);

    async function fetchAdd(){
      const resp = await fetch('http://localhost:8080/api/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: Xfirstname,
          last_name: Xlastname,
          age: Xage,          
          present: Ypresent
        })          
      })                 
    }
    fetchAdd(); 
    callOmegaHook(omega);      
  }



  function checkBoxChanged(i, h){
    const cBoxchanged = [...pokemons];
    cBoxchanged[i].Present = h;
    setPokemons(cBoxchanged);
  }

  function updateUser(i, firstname, lastname, age, Ypresent){
    const updateUsers = [...pokemons];
    updateUsers[i].firstName = firstname;
    updateUsers[i].lastName = lastname;
    updateUsers[i].Age = age;
    updateUsers[i].Present = Ypresent;
    setPokemons(updateUsers);
  }

  return (
        <div>
        <Printa 
        poke={pokemons}
        removePokemon = {removePokemon}
        addUser = {addUser}
        checkBoxChanged = {checkBoxChanged}
        updateUser = {updateUser}
        />        
      </div>  
  )
 
}


export default App;

