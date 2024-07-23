/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d') */
//Draw a rectangle
// ctx.fillRect(0, 0, 10, 10)

//Draw few rectangles
/* for (let i = 0; i < 8; i++) {
  ctx.fillRect(i * 10, i * 10, 10, 10)
} */

//Task. Draw A Boogie Man
/* ctx.fillRect(40, 0, 50, 50)
ctx.fillRect(60, 50, 10, 20)
ctx.fillRect(0, 70, 130, 10)
ctx.fillRect(30, 80, 70, 70)
ctx.fillRect(30, 150, 10, 50)
ctx.fillRect(90, 150, 10, 50) */


//Change color of the paint
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d') */
/* ctx.fillStyle = 'Red'
ctx.fillRect(0, 0, 100, 100) */

//Task. Draw three rectangles with different colors
/* ctx.fillStyle = 'Red'
ctx.fillRect(0, 0, 50, 100)
ctx.fillStyle = 'Green'
ctx.fillRect(50, 0, 50, 100)
ctx.fillStyle = 'Blue'
ctx.fillRect(100, 0, 50, 100) */


//Draw the outline of a rectangle
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d') */
// ctx.strokeRect(10, 10, 100, 20)

//change settings
/* ctx.strokeStyle = 'DeepPink'
ctx.lineWidth = 4
ctx.strokeRect(10, 10, 100, 20) */


//Draw lines or outlines
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = 'Turquoise'
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(60, 60)
ctx.moveTo(60, 10)
ctx.lineTo(10, 60)
ctx.stroke() */


//Task. Draw another one Boogie Man
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(40, 10)
ctx.lineTo(60, 10)
ctx.moveTo(62, 8)
ctx.lineTo(62, 32)
ctx.moveTo(40, 30)
ctx.lineTo(60, 30)
ctx.moveTo(42, 12)
ctx.lineTo(42, 28)
ctx.moveTo(52, 32)
ctx.lineTo(52, 72)
ctx.moveTo(52, 50)
ctx.lineTo(72, 40)
ctx.moveTo(52, 50)
ctx.lineTo(32, 40)

ctx.moveTo(52, 72)
ctx.lineTo(70, 112)
ctx.moveTo(52, 72)
ctx.lineTo(37, 112)

ctx.stroke() */


//Fill shapes
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'SkyBlue'
ctx.beginPath()
ctx.moveTo(100, 100)
ctx.lineTo(100, 60)
ctx.lineTo(130, 30)
ctx.lineTo(160, 60)
ctx.lineTo(160, 100)
ctx.lineTo(100, 100)
ctx.fill() */

//Arcs and circles
/* ctx.lineWidth = 2
ctx.strokeStyle = 'Green'

ctx.beginPath()
ctx.arc(50, 50, 20, 0, Math.PI / 2, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(100, 50, 20, 0, Math.PI, false)
ctx.stroke()

ctx.beginPath()
ctx.arc(150, 50, 20, 0, Math.PI * 2, false)
ctx.stroke() */


//Draw a lot of circles using functions
/* const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const circle = (x, y, radius) => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.stroke()
}

ctx.lineWidth = 4
ctx.strokeStyle = 'Red'
circle(100, 100, 10)

ctx.strokeStyle = 'Orange'
circle(100, 100, 20)

ctx.strokeStyle = 'Yellow'
circle(100, 100, 30)

ctx.strokeStyle = 'Green'
circle(100, 100, 40)

ctx.strokeStyle = 'Blue'
circle(100, 100, 50)

ctx.strokeStyle = 'Purple'
circle(100, 100, 60) */


//SnowMan
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const circle = (x, y, radius, fill, fillColor = 'black') => {
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)

  if (fill) {
    ctx.fillStyle = fillColor
    ctx.fill()
  } else {
    ctx.stroke()
  }
}
ctx.lineWidth = 4

circle(100, 80, 30, false)
circle(100, 80, 5, true, 'orange')
circle(90, 70, 5, true)
circle(110, 70, 5, true)

circle(100, 150, 40, false)
circle(100, 130, 5, true)
circle(100, 150, 5, true)
circle(100, 170, 5, true)