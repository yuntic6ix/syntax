let url ="https://yts.mx/api/v2/list_movies.json"
const movies = []

function getMovie (url) {
    fetch(url)
         .then(res => {
              return res.json()
         })
         .then(json => {
              console.log(json)
         })
}

getMovie(url)
