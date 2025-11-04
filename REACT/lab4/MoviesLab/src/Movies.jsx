import React, { useState } from 'react'
import Movie from './Movie'
import './Movies.css'

export default function Movies() {
  const [movies, setMovies] = useState([
    { name: "Eslam Fawzy", stars: 5, Comments: ["Amazing", "Good"] },
    { name: "Hassan Ismail", stars: 5, Comments: ["Amazing"] },
  ])

  const onRemove = (index) => {
    setMovies(movies.filter((_, i) => i !== index))
  }

  const addNewMovie = () => {
    let inputName = document.getElementById("newMovie").value
    let inputStars = document.getElementById("newMovieStars").value
    let inputComment = document.getElementById("newMovieComment").value
    let newMovie = { name: inputName, stars: parseInt(inputStars), Comments: [inputComment] }

    setMovies([...movies, newMovie])

    document.getElementById("newMovie").value = ""
    document.getElementById("newMovieStars").value = ""
    document.getElementById("newMovieComment").value = ""
  }

  return (
    <div className="movies-container">
      <form className="movie-form">
        <input type='text' id="newMovie" placeholder='🎬 Enter new movie name' />
        <input type='number' id="newMovieStars" placeholder='⭐ Stars (1–5)' />
        <input type='text' id="newMovieComment" placeholder='💬 Add a comment' />
        <input type='button' value="Add Movie" onClick={addNewMovie} className="add-btn" />
      </form>

      <ul className="movies-list">
        {movies.map((m, index) => (
          <li key={index}>
            <Movie movie={m} index={index} onRemove={onRemove} />
          </li>
        ))}
      </ul>
    </div>
  )
}
