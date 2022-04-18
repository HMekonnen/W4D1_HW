//Exercise 1. MaxOfTwoNumbers Function 
const maxOfTwoNumbers = (num1, num2)=>{

    if (num1> num2){
return console.log(`Max Number: ${num1} `)}
else if (num2 > num1){
    return console.log(`Max Number: ${num2} `)}
else{
    console.log("The two numbers are equal in value!")
}
}
//Alternative method: return console.log(Math.max(num1,num2))
//Test Function/Conditionals
console.log(maxOfTwoNumbers(5,5))
console.log(maxOfTwoNumbers(10,5))
console.log(maxOfTwoNumbers(1,5))



