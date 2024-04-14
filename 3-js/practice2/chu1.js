const people = 4

const apple = 3
const orange = 4
const banana = 5

// if (apple >= people) {
//   console.log("appleが足りる");
// }

// if (orange >= people) {
//   console.log("orangeが足りる");
// }

// if (banana >= people) {
//   console.log("bananaが足りる");
// }

apple >= people && console.log("appleが足りる")
orange >= people && console.log("orangeが足りる")
banana >= people && console.log("bananaが足りる")

// if (apple >= people) {
//   console.log("appleが足りる");
// } else {
//   console.log("appleが足りない");
// }

// if (orange >= people) {
//   console.log("orangeが足りる");
// } else {
//   console.log("orangeが足りない");
// }

// if (banana >= people) {
//   console.log("bananaが足りる");
// } else {
//   console.log("bananaが足りない");
// }

apple >= people ? console.log("appleが足りる") : console.log("appleが足りない")
orange >= orange
  ? console.log("orangeが足りる")
  : console.log("orangeが足りない")
banana >= people
  ? console.log("bananaが足りる")
  : console.log("bananaが足りない")

// 問題（難易度2/3）:diceが"n"の場合"ダイスの結果：n"を出力してください。1~6以外の場合は"ダイスの結果：？"を出力してください。
const dice = 3
// if (dice === 1) {
//   console.log("ダイスの結果：1");
// } else if (dice === 2) {
//   console.log("ダイスの結果：2");
// } else if (dice === 3) {
//   console.log("ダイスの結果：3");
// } else if (dice === 4) {
//   console.log("ダイスの結果：4");
// } else if (dice === 5) {
//   console.log("ダイスの結果：5");
// } else if (dice === 6) {
//   console.log("ダイスの結果：6");
// } else {
//   console.log("ダイスの結果：？");
// }

switch (dice) {
  case 1:
    console.log("ダイスの結果：1")
    break
  case 2:
    console.log("ダイスの結果：2")
    break
  case 3:
    console.log("ダイスの結果：3")
    break
  case 4:
    console.log("ダイスの結果：4")
    break
  case 5:
    console.log("ダイスの結果：5")
    break
  case 6:
    console.log("ダイスの結果：6")
    break
  default:
    console.log("ダイスの結果：？")
}

// 問題（難易度2/3）:参考演算子を使って、peopleが1の場合、"1人"を出力してください。
// 2の場合、"2人"を出力してください。3以上の場合は"3人以上"を出力してください。
people === 1
  ? console.log("1人")
  : people === 2
  ? console.log("2人")
  : console.log("3人以上")

// 問題（難易度2/3）:参考演算子を使って、peopleが1の場合、"1人います"を出力してください。
// 2の場合、"2人います"を出力してください。3以上の場合は"3人以上います"を出力してください。
people === 1
  ? console.log("1人います")
  : people === 2
  ? console.log("2人います")
  : console.log("3人以上います")

// forEach, map, filterのいずれかを使って、以下の問題を解いてください。

// 問題:1~20までの配列の中から奇数のみ出力せよ。
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log(arr[i]);
//   }
// }

// forEach
// arr.forEach(item => {
//   if (item % 2 === 1) {
//     console.log(item);
//   }
// })

// filter
const b = arr.filter((item) => item % 2 === 1)
console.log(b)
// = console.log(arr.filter(item => item % 2 === 1))

// 問題:1~20までの配列の中から偶数のみ出力せよ。
const a = arr.filter((item) => item % 2 === 0)
console.log(a)

// 問題(難易度 1/3):0から10未満の足すコードを作れ。
const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// c.forEach(item => {
//   sum = sum + item
// })
// console.log(sum)

// 問題(難易度 1/3):1から10までかけるコードを作れ。
const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
d.forEach((item) => {
  sum = sum * item
})
console.log(sum)

// 問題(難易度2/3):arr2のすべての値を立方(**3)した値をそれぞれ出力する。
const arr2 = [1, 2, 3, 4, 5]
const arr3 = [1, 2, 3, 4, 5]
const arr4 = [1, 2, 3, 4, 5]

// forEach
arr2.forEach((item) => {
  console.log(item ** 3)
}) // 1 8 27 64 125

// map
const result2 = arr2.map((item) => item ** 3)
console.log(result2) // [1, 8, 27, 64, 125]

// 問題(難易度2/3):arr3のすべての値がそれぞれ立方(**2)になった配列を出力する。
const result3 = arr3.map((item) => item ** 2)
console.log(result3)

// 問題(難易度2/3):arr4のすべての値がそれぞれ(+10)になった配列を出力する。
const result4 = arr4.map((item) => item + 10)
console.log(result4)

// LAST 問題(難易度3/3)(2重for文):ククの表を作成してください。
// 2 x 1 = 2
// 2 x 2 = 4
// …

const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9]
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

kuku1.forEach((item1) =>
  kuku2.forEach((item2) =>
    console.log(item1 + " x " + item2 + " = " + item1 * item2)
  )
)
// for (let i = 0; i < kuku1.length; i++) {
//     for (let j = 0; j < kuku2.length; j++) {
//       console.log(kuku1[i], "×", kuku2[j], "=", kuku1[i] * kuku2[j])
//     }
// }

// LAST 問題(難易度3/3)(2重for文):2つのサイコロを投げたとき、目の合計が6になるすべての場合の数を出力してください。
// [ 1, 5 ]
// [ 2, 4 ]
// [ 3, 3 ]
// [ 4, 2 ]
// [ 5, 1 ]

const dice1 = [1, 2, 3, 4, 5, 6]
const dice2 = [1, 2, 3, 4, 5, 6]

dice1.forEach((item1) =>
  dice2.forEach((item2) => {
    if (item1 + item2 === 6) {
      console.log("[" + item1 + "," + item2 + "]")
    }
  })
)
