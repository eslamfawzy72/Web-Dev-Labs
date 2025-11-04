import React from 'react'
import Movie from './Movie'
import { useState } from 'react'
export function Movies() {
  const [movies,setMovies]=useState([
    {ID:1,name:"Eslam",rated:5},
{ID:2,name:"mo",rated:3},
{ID:3,name:"fawzy",rated:10}])
const addNewMovie=()=>{
  let input=document.getElementById("newMovie")
  let movieName=input.value.trim()
  if(movieName==="")return
  const newMovie={
    ID:movies.length+1,
    name:movieName,
    rated:0
  }
    setMovies([...movies,newMovie])
  input.value=""
}
    return (
    <>
    <input type="text" id="newMovie" placeholder='Enter new Movie'></input>
    <input type="button" id="btn" onClick={addNewMovie} value="Add"></input>
    <div>
     {movies.map(m=><Movie key={m.ID} movie={m}></Movie>)}
    </div>
    </>
  )
}
