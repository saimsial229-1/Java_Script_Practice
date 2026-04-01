//Syntax
// const sayHello = () => {
//     console.log("Hello")
// }

// sayHello();

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(4,5))

//Same as  One liner function
// const add = (a,b) =>a+b;
// console.log(add(8,9));

// function addNumbers(){
//     console.log(arguments);
// }

// addNumbers(1,2,3,4,5);

//Arguments is not avaialable in arrow function
// const addNumbers = (...nums) => {
//     console.log(nums);
// }
// addNumbers(1,2,3,4,5);

//Hoisting this cannot be used in arrow function    
// only available in normal function
sayHello();
function sayHello(){
    console.log("Hello")
}


//this keyword

const obj = {
    value : 20,
    myFunction : function(){
        console.log(this.value)
    },
};
obj.myFunction();

