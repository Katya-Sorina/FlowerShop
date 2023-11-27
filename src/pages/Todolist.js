import React, {useState, useEffect} from 'react'

export default function Todolist() {
    
   const [firstState, setFirstState]= useState(7)
   console.log(firstState, "this is first state");
   console.log(setFirstState, "this is setFirstState")

   const [secondState, setSecondState]= useState(3)
  
  return (
    <div>Todolist 
    <button onClick={ () =>{setFirstState(5)}}>Click me</button>
    <button onClick={ () =>{setFirstState(10)}}>Click me</button>
    <button onClick={ () =>{setFirstState(firstState+1)}}>+</button>
    <button onClick={ () =>{setFirstState(firstState-1)}}>-</button>
    <h2>{firstState}</h2>

    <button onClick={ () =>{setSecondState(5)}}>Click me</button>
    <button onClick={ () =>{setSecondState(10)}}>Click me</button>
    <button onClick={ () =>{setSecondState(secondState+1)}}>+</button>
    <button onClick={ () =>{setSecondState(secondState-1)}}>-</button>
    <h2>{secondState}</h2>
    <button onClick={() => {}}>x</button>
    <h2>{secondState*firstState}</h2>
    </div>


  )
}
