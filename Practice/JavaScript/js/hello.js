//Print Out Hello
//console.log("Hello")

//let weather = "partly cloudy";
//let myDate = 28;
//let temperature; // this variable is declared, but has no value yet

//myDate = myDate + 1; 
//temperature = 90;

//console.log ("September" + myDate + "Weather:" + weather + "at" + temperature + "degrees Farenheit");

//alert("just dance")

//let firstName = prompt ("Oh Na Na What's My Name");
//let lastName = prompt ("What's the Square root of 69");

 //console.log ("Your full name is:" + firstName + " " + lastName);


 //Declare Function

 function doSomething () {
    console.log("Hi!"); 
 }
 doSomething ();

 function square(x) {
    return x * x;
 }
 
 function plusFive(num) {
    return num + 5; 
    }
    
    function increaseLargerNumberByFive(num1, num2) {
    var larger;

    if (num1 >= num2) { 
    larger = num1; 
}
     else { 
    larger = num2; 

}
    return plusFive(larger); 

} 
    
// Function Execution Code 
doSomething();
console.log(increaseLargerNumberByFive(4,7)); 
