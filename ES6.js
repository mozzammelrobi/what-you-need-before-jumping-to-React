const numbers = [23, 4, 45, 56, 67, 86, 6]

const student = {
    name: 'sakib',
    age: 23,
    movies: ['king khan', 'dhakar mastan']
}

// 1. tamplate string 

const about = `my name is ${student.name}. im ${student.age} years old. I have ${numbers[5]} TK . i like to see ${student.movies[0]} movie`;
// console.log(about)


//  2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const add = (x,y,z) => x + y + z ;
const doMath = (num1, num2) =>{
    const sum = num1 + num2 ;
    return sum
}


// 3, spread operator

// const newNumber = numbers;
// numbers.push(99)
// numbers.push(99)
// numbers.push(99)


const newNumber2 = [...numbers]
// create a newe array from an older array and add an element
const currentNumbers = [...numbers,100]


const newNumber = numbers;
numbers.push(99)
numbers.push(99)
numbers.push(99)

// console.log(newNumber2)
// console.log(newNumber)



console.log(newNumber)
console.log(newNumber2)
console.log(currentNumbers)