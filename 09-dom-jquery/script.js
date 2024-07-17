// console.log('Hello!')
/* const timeUp = () => {
  alert('Time up!')
}
setTimeout(timeUp, 3000) */

/* const doHomeworkAlarm = () => {
  alert('Hey! You need to do your homework!')
}
const timeoutId = setTimeout(doHomeworkAlarm, 60000)
clearTimeout(timeoutId) */

/* let counter = 1
const printMessage = () => {
  console.log(`You have been starting at your console for ${counter} seconds`)
  if (counter > 6) {
    alert('Counter')
    clearInterval(intervalId)
  }
  counter++
}
const intervalId = setInterval(printMessage, 1000) */

//Animate elements using setinterval
/* let leftOffset = 0
const moveHeading = () => {
  $('#heading').offset({ left: leftOffset })

  leftOffset++

  if (leftOffset > 200) {
    leftOffset = 0
  }
}
setInterval(moveHeading, 30) */

//React mouse click
/* const clickHandler = (event) => {
  console.log('Click! ' + event.pageX + ' ' + event.pageY)
}
$('h1').click(clickHandler) */

//Event mouse moving
$('html').mousemove(function (event) {
  $('#heading').offset({
    left: event.pageX,
    top: event.pageY
  })
})