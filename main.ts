import chalk from 'chalk';
import inquire from "inquirer";
// // ARRAY METHODS ..... .PUSH....1...
///PUSH()method appends the given elements in the last of the array 
console.log(chalk.red("push method"))
let arr:string[] = ["MISBAH","AMNA","MADIHA","MARIYAM"];
arr.push("yusra")
console.log(arr,"push method");//can add one more element



// //ARRAY METHODS ..... .POP....2....
// //pop() method removes the last element from the array 
console.log(chalk.red("pop method"))
let arr1:string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
arr1.pop();
console.log(arr1,"pop method");//can remove one more element



// // ARRAY METHODS ..... .CONCAT....3....
// //CONCAT() method return a new array comprised of this array joined with two or more array
console.log(chalk.red("concat method"))
let arr2:string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
let arr3:string[] = ["ASMA","AIESHA","EISHA","HANIYA","UZMA"];
let arr4:string[] = arr2.concat(arr3);
console.log(arr4,"concat method");



// //ARRAY METHODS ..... .FOR EACH....4....
// //FOR EACH() method call a function for each element in the array
console.log(chalk.red("for each method"))
let array :string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
array.forEach(function(value){
  console.log(value ,"For Each");
     })



     //ARRAY METHODS ........ .INDEX OF.....5....
//index of() returns the first least index of am element within the array 
//equal to the specified value, or -1 if none is found
console.log(chalk.red("index of method"))
let array1 :string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
console.log(array1.indexOf("MISBAH"));
console.log(array1.indexOf("FATIMA")); //none value



// //ARRAY METHODS ........ .LAST INDEX OF.....6....
//last index of return of the first least index of an element within the array
// equal to the specified value, or -1 none is found
console.log(chalk.red("last index of method"))
let array2 :string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
console.log(array2.lastIndexOf("MISBAH"));
console.log(array2.lastIndexOf("FATIMA")); //none value



//ARRAY METHODS ........ .JOIN.....7....
//join method joins all the element of an array into a string
console.log(chalk.red("join method"))
let array3 : string[]=["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
let a = array3.join ("-");   //you can use all the symbols
console.log(a);             


// ARRAY METHODS.......... .TO STRING....8....
//to string method returns a string representing the source code of the specified array and its element
console.log(chalk.red("to string method"))
let arrays:string[]=["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"] 
let str = arrays.toString();//to string by default coma
console.log(str);


// ARRAY METHODS.......... .REVERSE....9.....
//reverse method reverse the element of an array the first array
// element becomes the last and the last becomes the first 
console.log(chalk.red("Reverse method")) 
let arrays1:string[]= ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
 let x = arrays1.reverse();
 console.log(x);

 // ARRAY METHODS.......... .SHIFT....10.....
//  shift remove the first element from an array and returns that element
console.log(chalk.red("shift method"))
 let arrays2:string[]= ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
 let y = arrays2.shift();
 console.log(y);

//  // ARRAY METHODS.......... .UNSHIFT......11....
// //  unshift method adds one or more element to the beginning of an array returns the new length of the array
console.log(chalk.red("unshift method"))
let b: any;
let arrays3 : string []= ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
 arrays3.unshift("mishi","fatima");
 for ( b in arrays3) {
    console.log(arrays3[b]);
    }

     // ARRAY METHODS.......... .SLICE......12....
//  slice extracts a section of an array and return a new array
console.log(chalk.red("slice method"))
let arraye : string[]= ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
let arraye1 = array.slice(0,3);
console.log(array1);



// // ARRAY METHODS.......... .Sort.....13.....
// short the elements of an array //Ascending other
console.log(chalk.red("sort method"))
let arraye2: string[] = ["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"];
let arraye3 = array2.sort();
console.log(array2);

// // ARRAY METHODS.......... .SPLICE....14....
//spice method changing the content of an array ,adding new element while removing old element
 console.log(chalk.red("splice method"))
 let v: any;
let arra : string []=["MISBAH","AMNA","MADIHA","MARIYAM","BAREERA"]
 arra.splice(0,1,"MISHI");
for ( v in arra) {
    console.log(arra[v]);
        }

        //ARRAY METHOD............ .MAP........15....
        console.log(chalk.red("Map method"))
        let numbers:number[]=[1,2,3,4,5];
        let doubleName: number []= numbers.map( num => num*2);
        console.log(doubleName);

///ARRAY METHOD........ .FILTER........ 16....
console.log(chalk.red("Filter method"))
// let evenNumbers:number[] = numbers.filter(num => num % 3 ==0)
// console.log(evenNumbers);
// let sum : number = numbers.reduce((acc,curr)I=> acc + curr,0)

// filter method
 let number1: number[] =[1,2,3,4,5]
 let evenNumbers:number[] = number1.filter(num => num % 2 ==0)
 console.log(evenNumbers);

//  REDUCE method
let oddNumbers:number []=[1,2,3,4,5,6]
 let sum : number = oddNumbers.reduce((acc,curr) => acc + curr,0)
 console.log(sum);








