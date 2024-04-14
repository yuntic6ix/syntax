// 拡張子が.jsonになっているよ
// JSON Type : { key : value}
// バックエンドからオブジェクトをもらう

function getShopping() {
  // 　非同期処理←同期が終わったら（apiの中でより早く終わったものから始まる）非同期は.thenを使う
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const shopping = json
      console.log("shopping: ", shopping)
      addItem(shopping)
    })
}

function addItem(shopping) {
  for (let i = 0; i < shopping.length; i++) {
    const app = document.getElementById("shopping")

    // Add Title
    const addTitle = document.createElement("a")
    addTitle.innerHTML = `Title: ${shopping[i].title}`
    addTitle.setAttribute("class", "shoppingTitle")
    app.appendChild(addTitle)

    // Add Category
    const addCategory = document.createElement("div")
    addCategory.innerHTML = `Category: ${shopping[i].category}`
    addCategory.setAttribute("class", "shoppingCategory")
    app.appendChild(addCategory)

    // Add Image
    const addImage = document.createElement("img")
    addImage.src = shopping[i].image
    app.appendChild(addImage)
  }
}

getShopping()
