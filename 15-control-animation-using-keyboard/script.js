//Check what was pressed on keyboard:
/* $('body').keydown(function (event) {
  console.log(event.keyCode)
}) */

//Now I'll show you names
/* const keyNames = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

$('body').keydown((event) => {
  console.log(keyNames[event.keyCode])
}) */


/* Move hte ball using the keyboard */
//setup the canvas
/* const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width
let height = canvas.height

//Circle function
const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

//Create ball constructor
const Ball = function () {
  this.x = width / 2
  this.y = height / 2
  this.xSpeed = 5
  this.ySpeed = 0
}

//Create method move
Ball.prototype.move = function () {
  this.x += this.xSpeed
  this.y += this.ySpeed

  if (this.x < 0) {
    this.x = width
  } else if (this.x > width) {
    this.x = 0
  }
  if (this.y < 0) {
    this.y = height
  } else if (this.y > height) {
    this.y = 0
  }
}

//Create method draw
Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true)
}

//Create method SETDIRECTION
Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0
    this.ySpeed = -5
  } else if (direction === 'down') {
    this.xSpeed = 0
    this.ySpeed = 5
  } else if (direction === 'left') {
    this.xSpeed = -5
    this.ySpeed = 0
  } else if (direction === 'right') {
    this.xSpeed = 5
    this.ySpeed = 0
  } else if (direction === 'stop') {
    this.xSpeed = 0
    this.ySpeed = 0
  }
}

//React to keyboard
const ball = new Ball()

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}
$('body').keydown((event) => {
  let direction = keyActions[event.keyCode]
  ball.setDirection(direction)
})

//Animate the ball
setInterval(() => {
  ctx.clearRect(0, 0, width, height)

  ball.draw()
  ball.move()

  ctx.strokeRect(0, 0, width, height)
}, 30) */


/* Task 1. Bounce off the walls */
// setup the canvas
/* const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

// Circle function
const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

// Create ball constructor
const Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 0;
}

// Create method move
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0) {
    this.x = 0;
    this.xSpeed = -this.xSpeed;
  } else if (this.x > width) {
    this.x = width;
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0) {
    this.y = 0;
    this.ySpeed = -this.ySpeed;
  } else if (this.y > height) {
    this.y = height;
    this.ySpeed = -this.ySpeed;
  }
}

// Create method draw
Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true);
}

// Create method setDirection
Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0;
    this.ySpeed = -5;
  } else if (direction === 'down') {
    this.xSpeed = 0;
    this.ySpeed = 5;
  } else if (direction === 'left') {
    this.xSpeed = -5;
    this.ySpeed = 0;
  } else if (direction === 'right') {
    this.xSpeed = 5;
    this.ySpeed = 0;
  } else if (direction === 'stop') {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
}

// React to keyboard
const ball = new Ball();

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

// Add event listener
document.body.addEventListener('keydown', (event) => {
  let direction = keyActions[event.keyCode];
  ball.setDirection(direction);
});

// Animate the ball
setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30); */


//#2 Control speed
/* const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

// Circle function
const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

// Create ball constructor
const Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 0;
  this.speed = 5; // New property speed
}

// Create method move
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0) {
    this.x = 0;
    this.xSpeed = -this.xSpeed;
  } else if (this.x > width) {
    this.x = width;
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0) {
    this.y = 0;
    this.ySpeed = -this.ySpeed;
  } else if (this.y > height) {
    this.y = height;
    this.ySpeed = -this.ySpeed;
  }
}

// Create method draw
Ball.prototype.draw = function () {
  circle(this.x, this.y, 10, true);
}

// Create method setDirection
Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0;
    this.ySpeed = -this.speed;
  } else if (direction === 'down') {
    this.xSpeed = 0;
    this.ySpeed = this.speed;
  } else if (direction === 'left') {
    this.xSpeed = -this.speed;
    this.ySpeed = 0;
  } else if (direction === 'right') {
    this.xSpeed = this.speed;
    this.ySpeed = 0;
  } else if (direction === 'stop') {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
}

// React to keyboard
const ball = new Ball();

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

// Object to map number keys to speeds
const speeds = {
  49: 1, // Key '1'
  50: 2, // Key '2'
  51: 3, // Key '3'
  52: 4, // Key '4'
  53: 5, // Key '5'
  54: 6, // Key '6'
  55: 7, // Key '7'
  56: 8, // Key '8'
  57: 9  // Key '9'
}

// Add event listener
document.body.addEventListener('keydown', (event) => {
  let direction = keyActions[event.keyCode];
  if (direction) {
    ball.setDirection(direction);
  }
  if (speeds[event.keyCode]) {
    ball.speed = speeds[event.keyCode];
    ball.setDirection('stop'); // Ensure the ball stops when changing speed
  }
});

// Animate the ball
setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30); */


//#3 Flexible control
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

// Circle function
const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

// Create ball constructor
const Ball = function () {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 0;
  this.speed = 5; // New property speed
  this.radius = 10; // New property radius
}

// Create method move
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0) {
    this.x = 0;
    this.xSpeed = -this.xSpeed;
  } else if (this.x > width) {
    this.x = width;
    this.xSpeed = -this.xSpeed;
  }

  if (this.y < 0) {
    this.y = 0;
    this.ySpeed = -this.ySpeed;
  } else if (this.y > height) {
    this.y = height;
    this.ySpeed = -this.ySpeed;
  }
}

// Create method draw
Ball.prototype.draw = function () {
  circle(this.x, this.y, this.radius, true);
}

// Create method setDirection
Ball.prototype.setDirection = function (direction) {
  if (direction === 'up') {
    this.xSpeed = 0;
    this.ySpeed = -this.speed;
  } else if (direction === 'down') {
    this.xSpeed = 0;
    this.ySpeed = this.speed;
  } else if (direction === 'left') {
    this.xSpeed = -this.speed;
    this.ySpeed = 0;
  } else if (direction === 'right') {
    this.xSpeed = this.speed;
    this.ySpeed = 0;
  } else if (direction === 'stop') {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
}

// React to keyboard
const ball = new Ball();

const keyActions = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

// Object to map number keys to speeds
const speeds = {
  49: 1, // Key '1'
  50: 2, // Key '2'
  51: 3, // Key '3'
  52: 4, // Key '4'
  53: 5, // Key '5'
  54: 6, // Key '6'
  55: 7, // Key '7'
  56: 8, // Key '8'
  57: 9  // Key '9'
}

// Add event listener
document.body.addEventListener('keydown', (event) => {
  let direction = keyActions[event.keyCode];
  if (direction) {
    ball.setDirection(direction);
  }
  if (speeds[event.keyCode]) {
    ball.speed = speeds[event.keyCode];
    ball.setDirection('stop'); // Ensure the ball stops when changing speed
  }
  if (event.key === 'z' || event.key === 'Z') {
    ball.speed = Math.max(1, ball.speed - 1); // Slow down, minimum speed 1
    ball.setDirection('stop'); // Ensure the ball stops when changing speed
  }
  if (event.key === 'x' || event.key === 'X') {
    ball.speed = Math.min(9, ball.speed + 1); // Speed up, maximum speed 9
    ball.setDirection('stop'); // Ensure the ball stops when changing speed
  }
  if (event.key === 'c' || event.key === 'C') {
    ball.radius = Math.max(1, ball.radius - 1); // Make ball smaller, minimum radius 1
  }
  if (event.key === 'v' || event.key === 'V') {
    ball.radius = Math.min(width / 2, ball.radius + 1); // Make ball bigger, maximum radius half the canvas width
  }
});

// Animate the ball
setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30);