

/* Task: Define function: sumArray and function: multiplyArray
 that add/multiply all numbers in an array and returns the value */ 


 // Declare array of numbers
 let testArray= [10,10,10]

 
                  // 1. Sum Array//

/* Create function sumArray that'll add all #'s
     in an array.and return sum.*/

      sumArray=(total,num)=>{

          return  total + num
 }

// declare variable to hold sum of the array
 let finalSum = testArray.reduce(sumArray,0)

 // console.log to test function performance 
          console.log(finalSum)

//-------------------------------------------------------//

                  // 2.  Multiply Array//

   /* Create function multiplyArray that'll multiply 
      all #'s in an array.and return product.*/


          multiplyArray =(a,b)=>{

            return  a * b
   }

   // declare variable to hold product of the array
    let finalProduct = testArray.reduce(multiplyArray)
  
     // console.log to test function performance 
   console.log(finalProduct)