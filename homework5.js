/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = 'Testo'

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10+20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random()*21)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

/*const me = {
    name: leonardo,
    surname: toti,
    age:36,
};*/

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

//delete me.age

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

//me.skills = ['java','javascript','python']


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

//delete me.skills['python']

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = function(){

    let random = Math.floor(Math.random()*7)

    return random
}

console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(x,y){
    if (x>y) {

        return x
    }
    else {

        return y
    }
}
console.log(whoIsBigger(10,35))

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function(str){

    return str.split(" ")
}

console.log(splitMe('Ciao come stai'))

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function (str,boo) {
    if(boo==true){
        let shifty =str.split(" ")

        shifty.shift()

        return shifty.join(" ")
    }
    else {
        let popy = str.split(" ")

        popy.pop()

        return popy.join(" ")
    }
}
console.log(deleteOne('ciao stai bene',false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function(str){

    let array = str.split(" ")

    let array2 = []

    for (i=0; i<array.length; i++) {

        if(isNaN(array[i])){

            array2.push(array[i])

        }

    }
    return array2.join(" ")
}

console.log(onlyLetters('Ciao Come Stai 4 5 6'))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function (mail){
 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
}



console.log(isThisAnEmail("leo.toti.ciao@gmail.com"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function(){
    var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
}

whatDayIsIt()

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = function(n){

    let values = []

    for (i=0; i<n; i++) {

        let dice = Math.floor(Math.random()*7)

        values.push(dice)
    } 
    let count = 0

    for (i=0; i<n-1; i++){

        count += values[i]
    }

    return {

        val:values,

        sum:count
    }

} 
console.log(rollTheDices(6))


/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function(data) {

    var today = new Date();

    var time = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    console.log(time)
    var date1 = new Date(data); 
    var date2 = new Date(time); 
      
    // To calculate the time difference of two dates 
    var Difference_In_Time = date1.getTime() - date2.getTime(); 
      
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

    return Difference_In_Days

}
console.log(howManyDays("2021/12/12"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function() {

    var today = new Date();

    var time = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

    var myBirthday = "1984/05/27"

    if(time == myBirthday){

        return true 
    }
    else{
        return false
    }

}
console.log(isTodayMyBirthday())

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
