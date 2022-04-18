/* #7 Write a function findLongestWord that takes an array of 
words and returns the length of the longest one.*/

            // Declare test array
const wordArray = ['Hi','Hey','Hello','Salut','Bonjour'];

            // Declare longest word function w/ array as parameter
    const findLongestWord=(array)=>{
                 // Declare a comparison variable with value of zero
        let longest = array[0]
                // Create a  'for' loop w/ if condition-> array[i].length vs longer.length
          for (i=0; i< array.length; i++){
        
          if(array[i].length > longest.length){
                 // if array[i].length > longest.length - override w/ array[i]'s value
             longest = array[i];
    }

}
         // Return new longest -> + console.log for UX
    return console.log(longest)
}

    // Test function

findLongestWord(wordArray)

//--------------------------------------------------------------//

/* #8 Write a function filterLongWords that takes 
an array of words and a number i and returns 
the array of words that are longer than i characters long.*/


    // Filter long words to array "filtered" using filter() w/ arrow function 

 const filtered = wordArray.filter(word => word.length > 3);

console.log(filtered)



