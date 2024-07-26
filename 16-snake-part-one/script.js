//Set up the canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

//Get width and height of canvas element
let width = canvas.width
let height = canvas.height

//Handle widht and height blocks
let blockSize = 10
let widthInBlocks = width / blockSize
let heightInBlocks = height / blockSize

//Set score to zero
let score = 0

//Draw border
const drawBorder = () => {
  ctx.fillStyle = 'Gray';
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height); // Corrected from (height - blockSize, width, blockSize)
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
}

//Show the score on the screen
const drawScore = () => {
  ctx.font = '20px Courier'
  ctx.fillStyle = 'Black'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText('Score: ' + score, blockSize, blockSize)
}

//Clear interval and indicate text Game Over
const gameOver = function () {
  clearInterval(intervalId)
  ctx.font = '60px Courier'
  ctx.fillStyle = 'Black'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('Game Over', width / 2, height / 2)
}

//Draw circle (using function from 14th chapter)
const circle = (x, y, radius, fillCircle) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  if (fillCircle) {
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

//Conctructor Block
const Block = function (col, row) {
  this.col = col
  this.row = row
}

//Draw square inside block location
Block.prototype.drawSquare = function (color) {
  let x = this.col * blockSize
  let y = this.row * blockSize
  ctx.fillStyle = color
  ctx.fillRect(x, y, blockSize, blockSize)
}

//Draw square inside block location
Block.prototype.drawCircle = function (color) {
  let centerX = this.col * blockSize + blockSize / 2
  let centerY = this.row * blockSize + blockSize / 2
  ctx.fillStyle = color
  circle(centerX, centerY, blockSize / 2, true)
}

//Check if this block is not situated in one location with another block
Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row
}

//Constructor Snake
const Snake = function () {
  this.segments = [
    new Block(7, 5),
    new Block(6, 5),
    new Block(5, 5)
  ]

  this.direction = 'right'
  this.nextDirection = 'right'
}

//Draw square for each segment of snake body
Snake.prototype.draw = function () {
  for (var i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare('Blue');
  }
}

//Create new head and add it to the begin of the snake to not to move snake in current direction
Snake.prototype.move = function () {
  let head = this.segments[0]
  let newHead

  this.direction = this.nextDirection

  if (this.direction === 'right') {
    newHead = new Block(head.col + 1, head.row)
  } else if (this.direction === 'down') {
    newHead = new Block(head.col, head.row + 1)
  } else if (this.direction === 'left') {
    newHead = new Block(head.col - 1, head.row)
  } else if (this.direction === 'up') {
    newHead = new Block(head.col, head.row - 1)
  }

  if (this.checkCollision(newHead)) {
    gameOver()
    return
  }

  this.segments.unshift(newHead)

  if (newHead.equal(apple.position)) {
    score++
    apple.move()
  } else {
    this.segments.pop()
  }
}

//Check if new head of snake collide with wall or its body
Snake.prototype.checkCollision = function (head) {
  let leftCollision = (head.col === 0)
  let topCollision = (head.col === 0)
  let rightCollision = (head.col === widthInBlocks - 1)
  let bottomCollision = (head.row === heightInBlocks - 1)

  let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision

  let selfCollision = false

  for (var i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true
    }
  }

  return wallCollision || selfCollision
}

//Set next direction of snake moving on keyboard basis
Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === 'up' && newDirection === 'down') {
    return
  } else if (this.direction === 'right' && newDirection === 'left') {
    return
  } else if (this.direction === 'down' && newDirection === 'up') {
    return
  } else if ( this.direction === 'left' && newDirection === 'right') {
    return
  }

  this.nextDirection = newDirection
}

//Constructor apple
const Apple = function () {
  this.position = new Block(10, 10)
}

//Draw circle on location of apple
Apple.prototype.draw = function () {
  this.position.drawCircle('LimeGreen')
}

//Move apple to new random location
Apple.prototype.move = function () {
  let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1
  let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1
  this.position = new Block(randomCol, randomRow)
}

//Create objects of snake and apple
let snake = new Snake()
let apple = new Apple()


//Pass function of animation to setInterval
const intervalId = setInterval(function () {
  ctx.clearRect(0, 0, width, height)
  drawScore()
  snake.move()
  snake.draw()
  apple.draw()
  drawBorder()
}, 100)

//Convert key-codes to directions
let directions = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

//Processor keydown for directions manipulations set keys presses
$('body').keydown(function (event) {
  let newDirection = directions[event.keyCode];
  if (newDirection !== undefined) {
    snake.setDirection(newDirection);
  }
})