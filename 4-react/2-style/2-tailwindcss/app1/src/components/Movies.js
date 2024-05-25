import React from "react"
import { useState, useEffect } from "react"
import CircularProgress from "@mui/material/CircularProgress"

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
        <a
          className="block font-bold no-underline border border-white rounded-[5px] text-[24px] p-[5px] mb-[10px] text-gray-500 hover:bg-pink-300 hover:text-white"
          href={movie.url}
        >
          {movie.title} ({movie.year})
        </a>
        <div>
          評価：
          <span
            className={
              movie.rating >= 9
                ? "text-blue-500"
                : movie.rating >= 7
                ? "text-orange-500"
                : "text-red-500"
            }
          >
            {movie.rating}
          </span>
          /10点
        </div>

        <div>ジャンル：{movie.genres.join(", ")}</div>
        <div>ランタイム：{movie.runtime}分</div>
        <div>ストーリー：{movie.synopsis || "情報なし"}</div>
        <div>
          <img
            className="block w-[300px]"
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
