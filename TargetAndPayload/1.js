// findTarget([1, 3, 4, 5, 10], 15)
// => [5, 10]
// findTarget([-1, -3, 4, 7, -5, 18, 10, -23, 5], 15)
// => [-3, 18]
// findTarget([-3, -34, 2, 6, 40, -4], 1)
// => []

//input is an array of numbers and a target number
//goal is to output an array of two numbers that add up to target
//or empty array

//iterate through array => currentNum ==> reduce w/acc?
//nested iterate through array again
//if num is at the same index as currentNum then skip it
//else evaluate currentNum + num = target?; if yes, add to acc

//find
//target - currentNum = remainder
//array.includes(remainder)
//does not account for 4 + 4 = 8

const findTarget = (array, target) => {
  let obj = array.reduce((acc, currentNum) => {
    acc[currentNum] = currentNum
    return acc
  }, {})

  let found = []
  array.find((currentNum, index) => {
    let remainder = Math.abs(target - currentNum)

    if (obj[remainder] && array.indexOf(remainder) !== index) {
      found = [currentNum, remainder]
      return true
    }
  })
  return found
}

// console.log(findTarget([1, 10, 4, 5, 3], 8))
// console.log(findTarget([1, 3, 4, 5, 10], 15))
console.log(findTarget([-1, -3, 4, 7, -5, 18, 10, -23, 5], 15))
// console.log(Math.abs(15 - -3))

//and the number I'm looking for isn't my currentNum (as indicated by index)
//find indexof remainder is not the index of my currentNum