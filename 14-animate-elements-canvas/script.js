/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let position = 0

setInterval(() => {
  ctx.clearRect(0, 0, 200, 200)
  ctx.fillRect(position, 0, 20, 20)

  position++
  if(position > 200) {
    position = 0
  }
}, 30) */


//Animate the size of the square
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let size = 0

setInterval(() => {
  ctx.clearRect(0, 0, 200, 200)
  ctx.fillRect(0, 0, size, size)

  size++
  if(size > 200) {
    size = 0
  }
}, 30) */


//New Jumping Bee
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

const drawBee = (x, y) => {
  ctx.lineWidth = 2
  ctx.strokeStyle = 'Black'
  ctx.fillStyle = 'Gold'

  circle(x, y, 8, true)
  circle(x, y, 8, false)
  circle(x - 5, y - 11, 5, false)
  circle(x + 5, y - 11, 5, false)
  circle(x - 2, y - 1, 2, false)
  circle(x + 2, y - 1, 2, false)
}

const update = (coordinate) => {
  let offset = Math.random() * 4 - 2
  coordinate += offset

  if (coordinate > 200) {
    coordinate = 200
  }
  if (coordinate < 0) {
    coordinate = 0
  }
  return coordinate
}

let x = 100
let y = 100

setInterval(() => {
  // call function of clear rectangle
  ctx.clearRect(0, 0, 200, 200)
  //drawing on the beginning of coordinates x & y
  drawBee(x, y)
  //call update function & assign the result to variables of coordinates
  x = update(x)
  y = update(y)
  //stroke the line around the perimeter of the canvas
  ctx.strokeRect(0, 0, 200, 200)
}, 30) */


//A Bouncing Ball
const Ball = function () {
  this.x = 100
  this.y = 100
  this.xSpeed = -2
  this.ySpeed = 3
}

const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

Ball.prototype.draw = function () {
  circle(this.x, this.y, 3, true)
}