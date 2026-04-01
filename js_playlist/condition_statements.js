const age =23;
if(age >= 18){
    console.log('Adult')
}
else if (age<0){
    console.log("did not born yet")
}

else {
    console.log('Minor')
}

//Ternary operator used when there is only one if and one else will be used not more than that

age>= 18 ? console.log('Yes') : console.log('No');

let result = age>=18 ? 'yes' : 'no';

console.log(result);


//Switch cases
const option =  1;
switch(option){
    case 1 :console.log('Salam')
    break;
    case 2 :console.log('Hello')
    break;
}