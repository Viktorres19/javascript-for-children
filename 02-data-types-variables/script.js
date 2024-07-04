// console.log('Hello')
//Increment and decrement
/* var highFives = 0
console.log(`highFives ${++highFives}`) //виведеться збільшене значення
console.log(`highFives ${++highFives}`) //виведеться збільшене значення
console.log(`highFives ${++highFives}`) //виведеться збільшене значення
highFives = 0
console.log(`highFives ${highFives++}`) //виведеться попереднє значення
console.log(`highFives ${highFives++}`) //виведеться попереднє значення
console.log(`highFives ${highFives++}`) //виведеться попереднє значення */

/* let score = 10
score += 7
console.log(`score ${score}`)
score -= 3
console.log(`score ${score}`) */

//Get separate symbol from the string
/* let myName = "Nick"
console.log(myName[0])
console.log(myName[1])
console.log(myName[2]) */

/* let codeWord1 = "are"
let codeWord2 = "tubas"
let codeWord3 = "unsafe"
let codeWord4 = "?!"
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]) */

/* let longString = "My long string is long"
let shortString = longString.slice(3, 14)
if(shortString) {
  console.log(shortString)
} */

/*   let longString = "My long string is long"
  let shortString = longString.slice(3)
  if(shortString) {
    console.log(shortString)
  } */

/* let sillyString = "hELlo THERE, hOW ARE yOu doINg?"
let sillyStringLower = sillyString.toLocaleLowerCase()
let sillyFirstLetterUpper = sillyStringLower[0].toLocaleUpperCase()
let sillyTheRestLetters = sillyStringLower.slice(1)
let smartString = sillyFirstLetterUpper + sillyTheRestLetters
console.log(`smartString = ${smartString}`) */

/* ----Boolean type---- */
/* let javascriptIsCool = true
console.log(`javascriptIsCool ${javascriptIsCool}`) */

/* let hadShower = true
let hasBack = false
console.log(hadShower && hasBack) */

/* ---- Uniting logical operators ---- */
/* let isWeekend = false
let hadShower = true
let hasApple = false
let hasOrange = true
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange)
console.log(shouldGoToSchool) */

/* ---- More than ---- */
/* let height = 65
let heightRestriction = 60
console.log(height > heightRestriction) */
/* let height = 60
let heightRestriction = 60
console.log(height > heightRestriction) */
/* let height = 60
let heightRestriction = 60
console.log(height >= heightRestriction) */

let numberDigit = 5
let numberString = '5'
console.log(numberDigit == numberString)
console.log(numberDigit === numberString)