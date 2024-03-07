// 1. how to declare a variable using let  and const 
const fatherName = "Arnold"
let season = 'rainy'
season= 'winter'


// 2.  6 basic  condition : >, <, ===, !==, <==, >== 
//  multiple condition : &&, || 


if(fatherName === 'arnold' || season === 'rainy'){
    console.log('do something')
}

else if (fatherName === 'Arnold' ){
    console.log('do some thing')

}
else{

}

//  3. array
/**
 * index,
 * length ,
 * push
 * 
 */
const numbers = [23,4,45,56,67,86,6]
numbers[0] = 24


//  4. For-- Loop and While--Loop
for(let i = 0; i<numbers.length ; i++){
    const number = numbers[i]
    console.log(number)
}

let i = 0;
while(numbers<numbers.length){
    i++
    const number = numbers[i]
    console.log(number)
}

// 5. function 
function multiple(num1, num2){
    const  result  = num1 * num2 ;
    return result;
}
const output = multiple(23,4)


//  6. object 
/**
 * three way to access property by name
 */
const student = {
    name: 'sakib',
    age: 23,
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age'
console.log(student.age) // direct by property
console.log(student['movies']) // access via property name string 
console.log(student[myVariable]) // access via property name in a variable


