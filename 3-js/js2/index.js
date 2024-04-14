// DOM要素取得
const button = document.getElementById("addBtn")
const lists = document.getElementById("lists")

// 関数（メソッド）
function addList(user) {
  const list = document.createElement("li")
  list.innerText = user.name
  lists.appendChild(list)
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await res.json()
  return users
}

async function listUsers() {
  const users = await getUsers()
  users.forEach(addList)
}

// イベント
window.addEventListener("load", listUsers)
button.addEventListener("click", listUsers)

// DOM操作
// users.forEach(function (user) {
//   if (user.id <= 5) {
//     const list = document.createElement("li")
//     list.innerText = user.name
//     lists.appendChild(list)
//   }
// })

// for (let index = 0; index < users.length; index++) {
//   const user = users[index]
//   const list = document.createElement("li")
//   list.innerText = user.name
//   lists.appendChild(list)
// }
