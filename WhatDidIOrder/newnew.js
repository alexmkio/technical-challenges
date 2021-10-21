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

let order = []
let removed = []

function getOrder(price, menu) {
  if (!price) {
    return order
  }

  let exactMatch = menu.find(currentItem => currentItem.price === price)
  let nextItem = menu.sort((a, b) => b.price - a.price).find(currentItem => currentItem.price <= price)
  if (exactMatch) {
    order = [...order, exactMatch]
    getOrder(Number((price - exactMatch.price).toFixed(2)), menu)
  } else if (nextItem) {
    order = [...order, nextItem]
    getOrder(Number((price - nextItem.price).toFixed(2)), menu)
  } else if (order.length > 1 && removed.length && order[order.length - 1].name === removed[removed.length - 1].name) {
    let remainder = Number((price + order[order.length - 2].price + order[order.length - 1].price).toFixed(2))
    let menuIndex = menu.indexOf(order[order.length - 2])
    menu.splice(menuIndex, 1)
    menu = [...menu, ...removed]
    removed = []
    order.splice(-2, 2)
    getOrder(remainder, menu)
  } else if (order.length === 1 && removed.length && order[order.length - 1].name === removed[removed.length - 1].name) {
    let remainder = Number((price + order[order.length - 1].price).toFixed(2))
    removed.pop()
    menu = [...removed]
    removed = []
    order = []
    getOrder(remainder, menu)
  } else if (!order.length) {
    removed.pop()
    menu = [...removed]
    removed = []
    getOrder(price, menu)

  } else {
    let remainder = Number((price + order[order.length - 1].price).toFixed(2))
    if (!removed.includes(order[order.length - 1])) {
      removed = [...removed, order[order.length - 1]]
    }
    let menuIndex = menu.indexOf(order[order.length - 1])
    menu.splice(menuIndex, 1)
    order.splice(-1, 1)
    getOrder(remainder, menu)
  }
  return order
}

console.log(getOrder(11.05, goodMenu))
// const receipts = [4.85, 11.05, 13.75, 17.75, 18.25, 19.40, 28.25, 40.30, 75.00];

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

// console.log(getOrders(receipts))