//1. Write a Program to return the sum of all Arguments passed to a Function.
//console.log(add(2, 3));              // 5
//console.log(add(1, 2, 3, 4, 5)); // 15


// function restOperator(...x){
//     let sum = 0
//     for(i=0; i<x.length; i++){
//         sum+=x[i]
//     }
//     return sum;
// }

// sum = restOperator(1,2,3,4,5)
// console.log(sum)   ////output = 10

//==================================================================
// //Que 02 Write a Program to return more than one value from a Function.

var fname = prompt("Enter Fname");
var lname = prompt("Enter Lname");

function returnValue(f, l){
 var name = [];
 name.push(f);
 name.push(l);
 console.log(name);
 return name;
}
var result = returnValue(fname, lname);
// result.forEach((i) => {
//     document.write(i);
// });

//================================
//Que 03 3. Write a code to return the entire function definition and display it.

// function myFun(){
//     let text = 'This is the function'
//     return text;
// }
//   var functionDefined = myFun.toString() ////toString() method to get the entire function definition as a                                            string,and store it in a variable called
//   console.log(functionDefined)
//================================================================
//Que 04 Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. (Use Functional Approach)
                                          //note:  function uses the startsWith method to check if str already starts with "New!".
    // function addString(str){
    //     if (str.startsWith("New!")){
    //         return str;
    //     }else{
    //        return "New! " + str;
    //     }

    // }
    // console.log(addString("Welcome"));
    // console.log(addString("New! World"));

   

//===================================================================
//5. Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and add them together. The string length must be 3 or more. If not, the original string is returned.  (Use Functional Approach)

// function stringValue(str){
    
//     if (str.length<3){
//        return str;
//     }else{
//         let firstChart = str.slice(0,3)//first 3 charecter add 
//         let lastChart = str.slice(-3)//last 3 charecter add
//         return firstChart + lastChart;
//     }
// }

// console.log(stringValue("HelloWorld"));
// console.log(stringValue("Hi"));
// console.log(stringValue("Hello"));
// console.log(stringValue("javascript"));


  