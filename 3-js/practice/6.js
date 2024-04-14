const kuku1 = [2, 3, 4, 5, 6, 7, 8, 9] //2×
const kuku2 = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 

for (let i = 0; i < kuku1.length; i++) {
  for (let j = 0; j < kuku2.length; j++) {
    console.log( kuku1[i], "×", kuku2[j], "=", kuku1[i]*kuku2[j])
  }
}