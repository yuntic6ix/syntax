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
  for (let i = 0; i < movies.length; i++) {
    const app = document.getElementById("movies")

    // Add Title
    const addTitle = document.createElement("a")
    addTitle.innerHTML = `${movies[i].title} (${movies[i].year})`
    addTitle.href = movies[i].url
    addTitle.setAttribute("class", "movieTitle")
    app.appendChild(addTitle)

    // Add Image
    const addImage = document.createElement("img")
    addImage.src = movies[i].large_cover_image
    app.appendChild(addImage)
  }
}

getMovies()
