import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'
import {Link} from 'react-router-dom'
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

export default function Movies() {
  const {isLoading, movies} = useContext(AppContext)

  if(isLoading) {
    return <div className="loading">Loading</div>
  }
  return (
    <section className="movies-wrapper">
      {movies.map(movie=> {
        const {imdbID:id, Poster: poster, Title: title, Year:year, Type:type} = movie
          
          return <Link key={id} to={`movies/${id}`} className="react-link">
            <article className="movie">
              <img src={poster ==='N/A' ? url : poster } alt={title} className="image"/>
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p className="movie-info-year">{year}</p>
              </div>
            </article>
          </Link>
      })}
    </section>
  )
}