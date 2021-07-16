import React, { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
    let[curValue,upValue]=useState();
    let[name,setName]=useState();
    let[moves,setMoves]=useState();
    let[moves1,setMoves1]=useState();
    useEffect(()=>{
        async function getData(){
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${curValue}`)
            console.log(res.data);
            setName(res.data.name);
            setMoves(res.data.moves.length)
            setMoves1(res.data.moves[0].move.name)
        }
        getData();
    },[curValue])
    return (
     <>
          <h1>The Character Name : <span style={{color:"red"}} >{name}</span></h1>
          <h1>The Character Moves : <span style={{color:"red"}} >{moves}</span></h1>
          <h1>The Character Move 1 : <span style={{color:"red"}} >{moves1}</span></h1>
         <h1>The Character ID : <span style={{color:"red"}} >{curValue}</span></h1>
        <select onChange={(event)=>{
            upValue(event.target.value);
        }} value={curValue}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="25">25</option>
        </select>
     </>
    )
}
export default App;
