// my input is an array of arrays of nums
// the number of arrays should equal the array.length of each array

//output is an array of numbs
// for first array grap each num in order
//then the last numb in 2nd array
//then third in reverse order
//then the remianing 2 numbs from 2nd array

// reduce to build an output array
// if indexOf currentArray is 0
//put flattened array into acc

//for 2nd array move last into first place and add to acc

//for 3rd array
//reverse it's order
//place it before -2index splice?

// let lastThree = [ 4, 5, 6]
// let backwards = [ 3, 2, 1]
// backwards.reverse()
// lastThree.splice(-2, 0, backwards)

// console.log(lastThree.flat())


// const snail = (matrix) => {
//   return matrix.reduce((acc, currentArray) => {
//     if (!matrix.indexOf(currentArray)) {
//       acc = currentArray
//     }

//     if (matrix.indexOf(currentArray) === 1) {
//       let popped = currentArray.pop()
//       currentArray.unshift(popped)
//       acc = [...acc, ...currentArray]
//     }

//     if (matrix.indexOf(currentArray) === 2) {
//       currentArray.reverse()
//       acc.splice(-2, 0, ...currentArray)
//     }
//     return acc
//   }, [])
// }

// #JavaScript
// const arrayMatrix = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];
// console.log(snail(arrayMatrix))
// => [9, 8, 7, 4, 1, 2, 3, 6, 5]

// let row = [ 6, 5, 4 ]
// let popped = row.pop()
// row.unshift(popped)

// console.log(row)

// const snail = (matrix) => {
//   let param = [...matrix]
//   let made = []

//   const recursion = (matrixxx) => {
//     matrixxx.forEach(currentArray => {
//       if (!matrixxx.indexOf(currentArray)) {
//         made = [...made, ...currentArray]
//         param.splice(0, 1)
//       }
      
//       if (matrixxx.indexOf(currentArray) && (matrixxx.indexOf(currentArray) + 1) !== matrixxx.length) {
//         made = [...made, currentArray.pop(), currentArray.shift()]
//       }
      
//       if (matrixxx.length && (matrixxx.indexOf(currentArray) + 1) === matrixxx.length) {
//         made.splice(-1, 0, ...currentArray.reverse())
//         param.splice(-1, 1)
//       }
//     })
//   }

//   recursion(matrix)

//   if (param.length) {
//     recursion(param)
//   }
//   return made
// }

const snail = (matrix) => {
  let made = []
  let left = []

  const recursion = (matrixxx) => {
    matrixxx.forEach((currentArray, index, array) => {
      if (!index) {
        made = [...made, ...currentArray]
        left = []
      }

      if (index === 1) {
        made = [...made, currentArray.pop(), currentArray.shift()]
        left = [...left, currentArray]
      }
      
      if (index && index !== 1 && (index + 1) !== array.length) {
        made.splice((1 - index), 0, currentArray.pop())
        made.splice((1 - index), 0, currentArray.shift())
        left = [...left, currentArray]
      }
      
      if (index && (index + 1) === array.length) {
        made.splice((1 - index), 0, ...currentArray.reverse())
        if (left.length) recursion(left)
      }
    })
  }  
  recursion(matrix)
  return made
}

// const arrayMatrix = [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1]
// ];

// const arrayMatrix = [
//   [16, 15, 14, 13],
//   [12, 11, 10, 9],
//   [8, 7, 6, 5],
//   [4, 3, 2, 1]
// ];
// expected result: 16, 15, 14, 13, 9, 5, 1, 2, 3, 4, 8, 12, 11, 10, 6, 7

const arrayMatrix = [
  [25, 24, 23, 22, 21],
  [20, 19, 18, 17, 16],
  [15, 14, 13, 12, 11],
  [10, 9, 8, 7, 6],
  [5, 4, 3, 2, 1]
];
console.log(snail(arrayMatrix))