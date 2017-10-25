//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
   reverseIt:
   function reverseIt(str){
     return str.split('').reverse().join('')
   },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

   removeDups: function removeDups (arr) {
    return arr.filter(function(num,i,arr){
    return arr.indexOf(num) === i
   })
 },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

   titleIt: 
   function titleCase(str) {  
    str = str.toLowerCase().split(' ');
  
    for(var i = 0; i < str.length; i++){
      str[i] = str[i].split('');
      str[i][0] = str[i][0].toUpperCase(); 
      str[i] = str[i].join('');
    }
    return str.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

   vowelCounter:
   function vowelCounter(str){
    var count = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' ||str[i].toLowerCase() == 'e' ||str[i].toLowerCase() == 'u'){
        count+=1;
      }
    }
   return count;
  },


  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

   isPrime:
   function isPrime(num){
     for(var i = 2; i < num; i++){
       if(num %  i ===0)
       return false; 
     }
     return true; 
   },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

   log1: 'Hello World',
   log2: Undefined
}
