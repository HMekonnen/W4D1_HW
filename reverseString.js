/* #6. Define a function reverseString that computes the reversal of a
   string. For example, reverseString("jag testar")
   should return the string "ratset gaj". */

   
let str = ""

  const  reverseString=(str)=>{
                 // split method to return a new array

        let splitString = str.split("");

                 // reverse method to reverse new array

        let reverseArray = splitString.reverse()

                 // join method to join elements of array into a string 

        let joinArray = reverseArray.join("")

                 // return console.log of array-> string

        return console.log(joinArray);

   }


        //test function

  reverseString("onomatopoeia")
