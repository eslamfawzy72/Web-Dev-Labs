import React from 'react'

export default function Movie({movie}) {
  console.log(movie)
//   const {id,name,rated}=props
    return (
        <>
    <div>Movie</div>
    <h1>ID:{movie.ID}</h1>
    <h2>name: {movie.name}</h2>
    <h3>rated: {movie.rated}</h3>
    <hr></hr>
  </>
  )
}
