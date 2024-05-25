import React from "react"
import { useState, useEffect } from "react"
import "./Movies.css"
import CircularProgress from "@mui/material/CircularProgress"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const movieRatingClass = (rating) => {
    return rating >= 9 ? "good" : rating >= 7 ? "soso" : "bad"
  }

  useEffect(() => {
    setIsLoading(true)
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false)
        setMovies(json.data.movies)
      })
  }, [])

  console.log("movies: ", movies)

  const loading = (
    <div>
      <CircularProgress />
    </div>
  )

  const render = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <a className="movieTitle" href={movie.url}>
          {movie.title} ({movie.year})
        </a>
        <div>
          評価：
          <span className={movieRatingClass(movie.rating)}>{movie.rating}</span>
          /10点
        </div>

        <div>ジャンル：{movie.genres.join(", ")}</div>
        <div>ランタイム：{movie.runtime}分</div>
        <div>ストーリー：{movie.synopsis || "情報なし"}</div>
        <div>
          <img
            className="movieImg"
            src={movie.large_cover_image}
            alt={movie.title}
          ></img>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies</h1>
      <div>{isLoading ? loading : render}</div>
    </div>
  )
}
