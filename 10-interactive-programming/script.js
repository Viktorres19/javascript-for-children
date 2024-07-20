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
/* $('html').mousemove(function (event) {
  $('#heading').offset({
    left: event.pageX,
    top: event.pageY
  })
}) */
//#1 Event mouse click
/* $('html').click(function (event) {
  $('#heading').offset({
    left: event.pageX,
    top: event.pageY
  })
}) */

//#2 Create our own animation
/* let leftOffset = 0;
let topOffset = 0;
let direction = 'right';

const moveHeading = () => {
  $('#heading').offset({ left: leftOffset, top: topOffset });

  switch (direction) {
    case 'right':
      leftOffset++;
      if (leftOffset > 200) {
        leftOffset = 200;
        direction = 'down';
      }
      break;
    case 'down':
      topOffset++;
      if (topOffset > 200) {
        topOffset = 200;
        direction = 'left';
      }
      break;
    case 'left':
      leftOffset--;
      if (leftOffset < 0) {
        leftOffset = 0;
        direction = 'up';
      }
      break;
    case 'up':
      topOffset--;
      if (topOffset < 0) {
        topOffset = 0;
        direction = 'right';
      }
      break;
  }
}

setInterval(moveHeading, 30); */

//#3.1 Stop Animation
/* let leftOffset = 0;
let topOffset = 0;
let direction = 'right';

const moveHeading = () => {
  $('#heading').offset({ left: leftOffset, top: topOffset });

  switch (direction) {
    case 'right':
      leftOffset++;
      if (leftOffset > 200) {
        leftOffset = 200;
        direction = 'down';
      }
      break;
    case 'down':
      topOffset++;
      if (topOffset > 200) {
        topOffset = 200;
        direction = 'left';
      }
      break;
    case 'left':
      leftOffset--;
      if (leftOffset < 0) {
        leftOffset = 0;
        direction = 'up';
      }
      break;
    case 'up':
      topOffset--;
      if (topOffset < 0) {
        topOffset = 0;
        direction = 'right';
      }
      break;
  }
}

const intervalID = setInterval(moveHeading, 30);

$('#heading').click(() => {
  clearInterval(intervalID);
}); */

//#3.3 Stop/Start Animation
/* let leftOffset = 0;
let topOffset = 0;
let direction = 'right';
let intervalID;
let isMoving = true;

const moveHeading = () => {
  $('#heading').offset({ left: leftOffset, top: topOffset });

  switch (direction) {
    case 'right':
      leftOffset++;
      if (leftOffset > 200) {
        leftOffset = 200;
        direction = 'down';
      }
      break;
    case 'down':
      topOffset++;
      if (topOffset > 200) {
        topOffset = 200;
        direction = 'left';
      }
      break;
    case 'left':
      leftOffset--;
      if (leftOffset < 0) {
        leftOffset = 0;
        direction = 'up';
      }
      break;
    case 'up':
      topOffset--;
      if (topOffset < 0) {
        topOffset = 0;
        direction = 'right';
      }
      break;
  }
}

const startMovement = () => {
  intervalID = setInterval(moveHeading, 30);
  isMoving = true;
}

const stopMovement = () => {
  clearInterval(intervalID);
  isMoving = false;
}

$('#heading').click(() => {
  if (isMoving) {
    stopMovement();
  } else {
    startMovement();
  }
});

// Start movement initially
startMovement(); */


//#4 Game "Click on heading"
let leftOffset = 0;
let topOffset = 0;
let direction = 'right';
let headingSpeed = 30;
let intervalID;
let headingText = 'Runaway heading'
let amountClicks = 0

const moveHeading = () => {
  $('#heading').offset({ left: leftOffset, top: topOffset });

  switch (direction) {
    case 'right':
      leftOffset++;
      if (leftOffset > 200) {
        leftOffset = 200;
        direction = 'down';
      }
      break;
    case 'down':
      topOffset++;
      if (topOffset > 200) {
        topOffset = 200;
        direction = 'left';
      }
      break;
    case 'left':
      leftOffset--;
      if (leftOffset < 0) {
        leftOffset = 0;
        direction = 'up';
      }
      break;
    case 'up':
      topOffset--;
      if (topOffset < 0) {
        topOffset = 0;
        direction = 'right';
      }
      break;
  }
}

const startMovement = () => {
  intervalID = setInterval(moveHeading, headingSpeed);
}

const stopMovement = () => {
  clearInterval(intervalID);
}

const changeHeadingText = () => {
  return `${headingText}. Speed: ${headingSpeed}. Clicks: ${amountClicks}`
}

$('#heading').click(() => {
  stopMovement();
  --headingSpeed
  ++amountClicks
  $('#heading').html(changeHeadingText()) //what's wrong with this code?
  startMovement();
});

startMovement();