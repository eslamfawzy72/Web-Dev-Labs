import React from 'react'
import './Movies.css' // ✅ import the shared CSS file

export default function Movie({ movie, index, onRemove }) {
  const starsEmoji = '⭐'.repeat(movie.stars)

  return (
    <div className="movie-card">
      <h2 className="movie-title">{movie.name}</h2>
      <p className="movie-stars">{starsEmoji} <span className="stars-count">({movie.stars})</span></p>

      <div className="movie-comments">
        <h4>Comments:</h4>
        <ul>
          {movie.Comments.map((comment, i) => (
            <li key={i} className="comment-item">{comment}</li>
          ))}
        </ul>
      </div>

      <button className="remove-btn" onClick={() => onRemove(index)}>Remove</button>
    </div>
  )
}
