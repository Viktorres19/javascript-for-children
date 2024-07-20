/* console.log('Hello!')
const headingElement = document.querySelector('#main-heading')
if (headingElement) {
  console.log(headingElement.innerHTML)
}
let newHeadingText = prompt('Please provide a new heading')
headingElement.innerHTML = newHeadingText */

//added jquery
/* $(document).ready(function() {
  let newHeadingText = prompt('Please provide a new heading')
  $('#main-heading').text(newHeadingText)
  $('body').append('<p>This is a new paragraph</p>')
}) */

//hobbies jquery
$(document).ready(function() {
  /* for (let i = 0; i < 3; i++) {
    let hobby = prompt('Tell me your 3 hobbies in order from 1 to 3')
    $('body').append('<p>' + hobby + '</p>')
  } */
  /*$('h1').fadeOut(3000)*/

  /* $('h1').text('This will fade out').fadeOut(3000).fadeIn(2000)
  $('h2').slideUp(1000).slideDown(1000)
  $('h3').fadeOut(1000)
  $('h3').fadeIn(1000) */

  for (let i = 0; i < 3; i++) {
    $('h3').fadeOut(1000)
    $('h3').fadeIn(1000)
  }
})