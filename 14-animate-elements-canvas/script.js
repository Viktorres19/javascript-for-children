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


//A Bouncing Ball (including Task 1 & 2)
//Constructor of the ball

/* const Ball = function () {
  this.x = width / 2
  this.y = height / 2
  this.xSpeed = (Math.random() * 4 - 2)
  this.ySpeed = (Math.random() * 4 - 2)
}
//Draw the ball
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
//Move the ball
Ball.prototype.move = function () {
  this.x += this.xSpeed
  this.y += this.ySpeed
}
//Bouncing the ball
Ball.prototype.checkCollision = function () {
  if (this.x < 0 || this.x > width) {
    this.xSpeed = -this.xSpeed
  }
  if (this.y < 0 || this.y > height) {
    this.ySpeed = -this.ySpeed
  }
}
//Animate the ball
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
let width = prompt("Enter the width for the canvas:");
let height = prompt("Enter the height for the canvas:");
canvas.width = width
canvas.height = height

const ball = new Ball()

setInterval(() => {
  ctx.clearRect(0, 0, width, height)

  ball.draw()
  ball.move()
  ball.checkCollision()
  ctx.strokeRect(0, 0, width, height)
}, 30) */

//#3 Animate more balls
/* const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let width = parseInt(prompt("Enter the width for the canvas:"), 10);
let height = parseInt(prompt("Enter the height for the canvas:"), 10);

if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    width = 400; // Default width
    height = 400; // Default height
    alert('Invalid input. Using default size 400x400.');
}

canvas.width = width;
canvas.height = height;

const Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = (Math.random() * 4 - 2); // Random speed between -2 and 2
    this.ySpeed = (Math.random() * 4 - 2); // Random speed between -2 and 2
};

// Draw the ball
const circle = (x, y, radius, fillCircle) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
};

// Move the ball
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

// Bouncing the ball
Ball.prototype.checkCollision = function () {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

// Create an array of 10 balls
const balls = [];
for (let i = 0; i < 10; i++) {
    balls.push(new Ball());
}

setInterval(() => {
    ctx.clearRect(0, 0, width, height);

    // Draw, move, and check collision for each ball
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0, 0, width, height);
}, 30); */

//#4 Paint balls
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let width = parseInt(prompt("Enter the width for the canvas:"), 10);
let height = parseInt(prompt("Enter the height for the canvas:"), 10);

if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    width = 400; // Default width
    height = 400; // Default height
    alert('Invalid input. Using default size 400x400.');
}

canvas.width = width;
canvas.height = height;

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];

const pickRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = (Math.random() * 4 - 2); // Random speed between -2 and 2
    this.ySpeed = (Math.random() * 4 - 2); // Random speed between -2 and 2
    this.color = pickRandomColor();
};

// Draw the ball
const circle = (x, y, radius, fillCircle, color) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true, this.color);
};

// Move the ball
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

// Bouncing the ball
Ball.prototype.checkCollision = function () {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

// Create an array of 10 balls
const balls = [];
for (let i = 0; i < 10; i++) {
    balls.push(new Ball());
}

setInterval(() => {
    ctx.clearRect(0, 0, width, height);

    // Draw, move, and check collision for each ball
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0, 0, width, height);
}, 30);