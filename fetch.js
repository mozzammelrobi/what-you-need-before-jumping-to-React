//  1. JSON -=> stringify , parse
// 2. fetch 

const student = {
    name: 'sakib',
    age: 23,
    movies: ['king khan', 'dhakar mastan']
}

const studentJSON = JSON.stringify(student)
// console.log(studentJSON)
// console.log(student)

const studentObj = JSON.parse(studentJSON)
// console.log(studentObj)


// 2 . fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))


// how to find an aray keys and values 

const keys = Object.keys(student)
const values = Object.values(student)


// add or remove form an aray

const products = [
    {name: 'laptop', price: 3400, brand:'lanavo', color:'golden'},
    {name: 'phone', price: 100000, brand:'iphone', color:'black'},
    {name: 'watch', price: 3000, brand:'casio', color:'yeallow'},
    {name: 'sunglass', price: 600, brand:'Ribon', color:'black'},
    {name: 'camera', price: 5000, brand:'casio', color:'black'},
   
];


const newProduct = {name:'webcam', price:600, brand:'lal'}


// copy products array and then add newPoduct
const newProducts = [...products, newProduct]

// create a new array without one specific items 
// remove phone means create a new array without the phone

const remainitn = products.filter(p => p.name !== 'phone')