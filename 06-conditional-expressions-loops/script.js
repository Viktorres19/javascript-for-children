/* let userName = prompt("Please enter your name:");

// Check if a name was entered
if (userName.length > 7) {
    console.log('Wow, you have a REALLY long name!')
} else {
    console.log('Your name isn\'t very long.')
} */

/* let lemonChicken = false
let beefWithBlackBean = true
let sweetAndSourPork = true

if (lemonChicken) {
  console.log('Great! I\'m having lemon chicken!')
} else if (beefWithBlackBean) {
  console.log('I\'m having a beef.')
} else if (sweetAndSourPork) {
  console.log('OK, I\'ll have a pork.')
} else {
  console.log('Well, I guess I\'ll have rice then.')
} */

//Cycle while
/* let sheepCounted = 0
while (sheepCounted < 10) {
  console.log(`I have counted ${sheepCounted} sheep!`)
  sheepCounted++
}
console.log('Zzzzz') */

//Cycle for
/* for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log('I have counted ' + sheepCounted + ' sheep!')
}
console.log('Zzzzzz') */

/* const animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor']
for (let i = 0; i < animals.length; i++) {
  console.log('This zoo contains a ' + animals[i] + '.')
} */

/* let name = 'Nick'
for (let i = 0; i < name.length; i++) {
  console.log('My name contains the letter ' + name[i] + '.')
} */

/* for (var x = 2; x < 10000; x = x * 2) {
  console.log(x)
} */

//All numbers multiple of 3 from 0 to 10000
/* for (var x = 0; x < 10000; x++) {
  if (x % 3 === 0) {
    console.log(x)
  }
} */

/* const animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon']
const awesomeAnimals = []
for (i = 0; i < animals.length; i++) {
  awesomeAnimals.push('Awesome ' + animals[i])
}
console.log(`animals ${animals}`)
console.log(`awesomeAnimals ${awesomeAnimals}`)
console.log(typeof(animals))
console.log(typeof(awesomeAnimals)) */

//#2 Random strings generator
/* const alphabet = 'abcdefghigklmnopqrstuvwxyz'
let randomString = ''
for (let i = 0; i <= 6; i++) {
  let randomLetter = alphabet[Math.floor(Math.random() * (alphabet.length))]
  randomString += randomLetter
}
console.log(randomString) */

//#3: H4CK3R SP23K
/* let input = prompt("Please enter your phrase to script it: ")
let output = ''
for (let i = 0; i < input.length; i++) {
  if (input[i].toLocaleLowerCase() === 'a') {
    output += '4'
  } else if (input[i].toLocaleLowerCase() === 'e') {
    output += '3'
  } else if (input[i].toLocaleLowerCase() === 'i') {
    output += '1'
  } else if (input[i].toLocaleLowerCase() === 'o') {
    output += '0'
  } else {
    output += input[i]
  }
}
console.log(output) */