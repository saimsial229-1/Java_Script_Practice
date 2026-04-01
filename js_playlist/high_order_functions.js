//A function that takes another function as an argument is called a higher-order function.

function add(a,b,cb){
    result = a+b;
    cb(result);
}

add(5,3, function(result){
    console.log(result)
});  

// or
add(6,9 ,(val)  => console.log(val));