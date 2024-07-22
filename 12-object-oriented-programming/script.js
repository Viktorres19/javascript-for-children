/* const dog = {
  name: 'Pancake',
  legs: 4,
  isAwesome: true
}
console.log(dog.name)
dog.age = 6
console.log(dog)

dog.bark = function () {
  console.log(`Woof woof! My name is ${this.name} !`)
}
dog.bark()

const speak = function () {
  console.log(`${this.sound} ! My name is ${this.name}!`)
}

const cat = {
  sound: 'Miaow',
  name: 'Mittens',
  speak: speak
}
cat.speak()

const pig = {
  sound: 'Oink',
  name: 'Charlie',
  speak: speak
}

const horse = {
  sound: 'Neigh',
  name: 'Marie',
  speak: speak
}

pig.speak()
horse.speak() */


//Create constructor of automobiles
//Function constructor of automobiles
/* let Car = function (x, y) {
  this.x = x
  this.y = y
}
//Call automobiles constructor
// let tesla = new Car(10, 20)
// console.log(tesla)

//Draw automobiles
const drawCar = function (car) {
  let carHtml = 'car.webp'

  const carElement = $('<img>').attr('src', carHtml)

  carElement.css({
    position: 'absolute',
    left: car.x,
    top: car.y
  })

  $('body').append(carElement)
}
const tesla = new Car(20, 20)
const nissan = new Car(100, 200)

drawCar(tesla)
drawCar(nissan) */


//Add method draw to prototype property
/* let Car = function (x, y) {
  this.x = x
  this.y = y
}

Car.prototype.draw = function () {
  let carHtml = 'car.webp'

  this.carElement = $('<img>').attr('src', carHtml)

  this.carElement.css({
    position: 'absolute',
    left: this.x,
    top: this.y
  })

  $('body').append(this.carElement)
}
const tesla = new Car(20, 20)
const nissan = new Car(100, 200)

tesla.draw()
nissan.draw() */


//Add method MOVERIGHT
/* let Car = function (x, y) {
  this.x = x
  this.y = y
}

Car.prototype.draw = function () {
  let carHtml = 'car.webp'

  this.carElement = $('<img>').attr('src', carHtml)

  this.carElement.css({
    position: 'absolute',
    left: this.x,
    top: this.y
  })

  $('body').append(this.carElement)
}
const tesla = new Car(20, 20)
const nissan = new Car(100, 200)

tesla.draw()
nissan.draw()
Car.prototype.moveRight = function () {
  this.x += 5

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

tesla.moveRight()
tesla.moveRight()
tesla.moveRight() */


//Add other move-methods
let Car = function (x, y) {
  this.x = x
  this.y = y
}

Car.prototype.draw = function () {
  let carHtml = 'car.webp'

  this.carElement = $('<img>').attr('src', carHtml)

  this.carElement.css({
    position: 'absolute',
    left: this.x,
    top: this.y
  })

  $('body').append(this.carElement)
}
const tesla = new Car(20, 20)
const nissan = new Car(100, 200)

tesla.draw()
nissan.draw()
Car.prototype.moveRight = function () {
  this.x += 5

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

Car.prototype.moveLeft = function () {
  this.x -= 5

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

Car.prototype.moveUp = function () {
  this.y -= 5

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

Car.prototype.moveDown = function () {
  this.y += 5

  this.carElement.css({
    left: this.x,
    top: this.y
  })
}

tesla.moveRight()
tesla.moveRight()
tesla.moveRight()