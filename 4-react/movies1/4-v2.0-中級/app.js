// https://yts.mx/api/v2/list_movies.json?sort_by=rating
// 拡張子が.jsonになっているよ
// JSON Type : { key : value}
// バックエンドからオブジェクトをもらう

function getMovies() {
  // 　非同期処理←同期が終わったら（apiの中でより早く終わったものから始まる）非同期は.thenを使う
  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    .then((res) => res.json())
    .then((json) => {
      const movies = json.data.movies
      console.log("movies: ", movies)
      addItem(movies)
    })
}

function addItem(movies) {
  movies.forEach((movie) => {
    const app = document.getElementById("movies")

    // Add Title
    const addTitle = document.createElement("a")
    addTitle.innerHTML = `${movie.title} (${movie.year})`
    addTitle.href = movie.url
    addTitle.setAttribute("class", "movieTitle")
    app.appendChild(addTitle)

    // Add Rating
    const addRating = document.createElement("div")
    addRating.innerHTML = `Rating: ${movie.rating} / 10`

    movie.rating >= 9
      ? addRating.setAttribute("class", "movieRatingsGood")
      : movie.rating >= 7
      ? addRating.setAttribute("class", "movieRatingsSoso")
      : addRating.setAttribute("class", "movieRatingsBad")
    app.appendChild(addRating)

    // Add Genres
    const addGenres = document.createElement("div")
    addGenres.innerHTML = `Genres: ${movie.genres.join(" , ")}`
    app.appendChild(addGenres)

    // Add Runtime
    const addRuntime = document.createElement("div")
    addRuntime.innerHTML = `Runtime: ${movie.runtime} / min`
    app.appendChild(addRuntime)

    // Add Synopsis
    const addSynopsis = document.createElement("div")
    let synopsis = ""

    movie.synopsis === ""
      ? (synopsis = "情報がありません")
      : (synopsis = movie.synopsis)
    const synopsisLength = synopsis.split("").length
    synopsis = synopsisLength > 1600 && synopsis.slice(0, 1600)
    // if (synopsisLength > 1600) {
    //   synopsis = synopsis.slice(0, 1600) + "..."
    // }
    addSynopsis.innerHTML = `Synopsis: ${synopsis}`
    app.appendChild(addSynopsis)

    // Add Download Link
    movie.torrents.forEach((torrent, i) => {
      const addDownload = document.createElement("a")
      addDownload.innerHTML = `Link #${i + 1}`
      addDownload.href = torrent.url || "#"
      app.appendChild(addDownload)
    })

    // Add Image
    const addImage = document.createElement("img")
    addImage.src = movie.large_cover_image
    app.appendChild(addImage)
  })
}

getMovies()
