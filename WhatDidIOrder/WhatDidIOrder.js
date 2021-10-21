// Write a method/function to find the first combination of food that adds up to the receipt total. Return a print out of only one combination for that receipt, and move on to the next receipt. How the print out looks is up to you, but here are some examples:
// #Example 1
// 4.85:
// 3 items, extra veggies, chips, cheese

// #Example 2
// 13.75:
// 3 items, {'veggie sandwich': 1, 'nachos': 2}

// does array === price?
// if < then recursion
// if > then splice
let menuItems = {
  "veggie sandwich": 6.85,
  "extra veggies": 2.20,
  "chicken sandwich": 7.85,
  "extra chicken": 3.20,
  "cheese": 1.25,
  "chips": 1.40,
  "nachos": 3.45,
  "soda": 2.05,
};

let keys = Object.keys(menuItems)
let values = Object.values(menuItems)
let goodMenu = keys.reduce((acc, currentKey) => {
  let ind = keys.indexOf(currentKey)
  let newObj = {}
  newObj.price = values[ind]
  newObj.name = currentKey
  return [...acc, newObj]
}, [])
// .sort((a, b) => a.price - b.price)

let order = []

function getOrder(price, menu) {
  console.log(price, order)
  let receiptRemainder = price
  let remainingMenu = menu

  if (!receiptRemainder) {
    return order
  }
  let nextItem = remainingMenu.find(currentItem => currentItem.price <= receiptRemainder)
  if (nextItem) {
    order = [...order, nextItem]
    getOrder(Number((receiptRemainder - nextItem.price).toFixed(2)), remainingMenu)
  } else {
    let remainder = Number((receiptRemainder + order[order.length - 1].price).toFixed(2))
    // let menuIndex = remainingMenu.indexOf(order[order.length - 1])
    // remainingMenu.splice(menuIndex, 1)
    remainingMenu.splice(0, 1)
    order.splice(-1, 1)
    getOrder(remainder, remainingMenu)
  }
  return order
}

console.log(getOrder(11.05, goodMenu))

// function getOrders(totals) {
//   let count = 0
//   return totals.reduce((acc, currentTotal) => {
//     order = []
//     console.log(acc)
//     count++
//     acc[`orderNumer${count}`] = getOrder(currentTotal, goodMenu)
//     return acc
//   }, [])
// }

// const receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00];
// console.log(getOrders(receipts))