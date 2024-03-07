// array distrucring

const numbers = [42,45];
const [x,y] =[numbers]
console.log(x,y)


// object destructuring
const {name, age} = {id:1,name:'mozzammel', salary:3000,age:20}

const employe = {
    id:'VS code',
    designation: 'developer',
    machine:'mac',
    specification:{
        height:66,
        weight:56,
        address:'kamarbari',
        drinks : 'water',
        watch:{
            color:'black',
            price: 500,
            brand:'garmi'
        }
    }
}

const {machine,id} = employe;
const {weight, address} = employe.specification;
const {brand} = employe?.specification.watch