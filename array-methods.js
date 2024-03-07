// array methods 


/**
 * map and forEach use for loop throw in an array
 */
// 1. map()  return a new aray
// 2. forEach()  don't return anything 
// 3. filter() return an array whom fulfiled the condition or match with the conditon if not match anything give an empty array
//4. find()   return only one who match first with condition


const products = [
    {name: 'laptop', price: 3400, brand:'lanavo', color:'golden'},
    {name: 'phone', price: 100000, brand:'iphone', color:'black'},
    {name: 'watch', price: 3000, brand:'casio', color:'yeallow'},
    {name: 'sunglass', price: 600, brand:'Ribon', color:'black'},
    {name: 'camera', price: 5000, brand:'casio', color:'black'},
   
];


const brands = products.map(products => products.brand)
// console.log(brands)
const prices = products.map(products => products.price)
// console.log(prices)



// 2. foreach
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))


//  filter

const lowPice = products.filter(products => products.price<= 5000)
// console.log(lowPice)

const specificName = products.filter(products => products.name.includes('n'))
console.log(specificName)


// 4.find 
const specificName2 = products.find(products => products.name.includes('n'))
console.log(specificName2)