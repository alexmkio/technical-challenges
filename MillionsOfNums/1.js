// You are given three arrays of equal size. Each array has 1 million RANDOM integer values.

// Assume that each array is already sorted in ascending order and that no individual
// array has any duplicate values.

// Your goal is to write a method/function that will return an array of any/all
// values which are present in all three arrays.

// Bonus: Once you’ve found a working solution, try to optimize to run in O(n) time
// and 1x space complexity.

// nums1 = [1, 2, 4, 5, 8]
// nums2 = [2, 3, 5, 7, 9]
// nums3 = [1, 2, 5, 8, 9]
// findMatches(nums1, nums2, nums3)
// => [2, 5]

// iterate through first array
// if 2nd array doesn't include currentNum => break
// if 3rd array includes currentNum add current num to acc or filter

let nums1 = [1, 2, 4, 5, 8]
let nums2 = [2, 3, 5, 7, 9]
let nums3 = [1, 2, 5, 8, 9]

// function findMatches(array1, array2, array3) {
//   return array1.reduce((acc, currentNum) => {
//     if (array2.includes(currentNum) && array3.includes(currentNum)) {
//       return acc = [...acc, currentNum]
//     }
//     return acc
//   }, [])
// }

function findMatches(array1, array2, array3) {
  let hash = array1.reduce((acc, currentNum) => {
    acc[currentNum] = 1
    return acc
  }, {})

  array2.forEach(currentNum => {
    if (hash[currentNum]) {
      hash[currentNum]++
    }
  })

  array3.forEach(currentNum => {
    if (hash[currentNum]) {
      hash[currentNum]++
    }
  })

  return Object.keys(hash).reduce((acc, currentNum) => {
    if (hash[currentNum] === 3) {
      acc = [...acc, currentNum]
    }
    return acc
  }, [])
}

console.log(findMatches(nums1, nums2, nums3))