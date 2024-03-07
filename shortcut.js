// truthy : '0', true, {}, []
// falsy : '', false, null, undefined


// check truthy 
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}else{
    myVar = 0;
}

// check falsy or negative
let myMoney = 800;
if(!myMoney){

}else{}

const money = 800;
let food;
if(money > 100){
    food = 'biriani'
}else{
    food = 'cha biscut'
}

//  tarnary operator

let food1 = money > 100 ? 'biriany' : 'cha biscuit';
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink)

// 


// number to string 
const num1 = 52;
// console.log(num1)
const numStr = num1 + ''
// console.log(typeof numStr, numStr)

// string to number
const input = '560';
const inputNum = +input
// console.log(inputNum)


// 
let isActive = true;
const showUser = () => console.log('show user')
const hideUser = () => console.log('hide user')

isActive? showUser() : hideUser()
// use && if the left side is true then right side will  be executed
isActive && showUser()
//  user || if the left the is false then right side will be executed
isActive ||  showUser()

// toggle boolian
isActive = !isActive