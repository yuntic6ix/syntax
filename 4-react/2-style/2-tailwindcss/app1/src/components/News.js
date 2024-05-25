import React from "react"
import { useState, useEffect } from "react"

export default function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://api.hnpwa.com/v0/news.json")
      .then((res) => res.json())
      .then((json) => {
        setNews(json)
      })
  }, [])

  console.log("news: ", news)

  const render = news.map((item) => {
    return (
      <div key={item.id}>
        <a
          className="no-underline text-black hover:bg-pink-200 hover:text-white"
          target="_blank"
          href={item.url}
          rel="noreferrer"
        >
          {item.title}
        </a>
        <span> / ID: {item.user} </span>
      </div>
    )
  })

  return (
    <div>
      <h1>News</h1>
      <div>{render}</div>
    </div>
  )
}
