//array
const cars = ['saab', 'value', 'BMW', 32];
cars.push('tesla');
console.log(cars);

//object
const person  = {
    'name' : 'lipika',
    'age' : '20',
    'isStudent' : false,
    'hobbies' : ['reading', 'movies', 'cooking']
}

console.log(person);
console.log('Age of '+ person.name + ' is ' + person.age);
 
//fi lter
const age = [32,33,16,56];
const result = age.filter(checkage);
console.log(result)

function checkage(age){
    return age>=17
}

//function 1
var res = add(2,3)

function add(a,b){
    return a+b
}
console.log('adding two number is '+ res)

//function 2
var add = (a,b) => {return a+b};
var res = add(2,7);
console.log(res);

//function run just after write this function always start with ;
(function(){
    console.log('price is added');
})();

//callback function - the fucntion called by another function
//ek function ke baad dusra function chahy pahle waala fucntion sahi chala ya nhi chala
function call(){
    console.log('price is calling the callback function');
};

const ad = function(a,b, cal){
    var output = a+b
    console.log('result : '+output);
    cal();
}

ad(3,2, call);

//can also write function inline




//input from user
var prompt = require('prompt-sync')();
var ages = prompt("enter your age : ");
if (ages<18){
    console.log('you will get 15% discount');
}else if(age >18 & age <80){
    console.log("you will get 20% discount");
}else{
    console.log('discount 100%');
}



























