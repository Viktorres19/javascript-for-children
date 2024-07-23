// 1. Створити сторінку, яка містить зображення (мапу скарбів) та місце для виведення повідомлень
// 2. Обрати випадкове місце на зображенні мапи де буде заховано скарб

// 3. Створити обробник кліків. Кожного разу, коли гравець клікатиме по мапі, обробник кліків виконуватиме наступні дії
// 3.1. Додаватиме 1 до лічильника кліків
// 3.2. Вираховуватиме, як далеко від скарбу знаходиться те місце, де клікнув гравець
// 3.3. Показуватиме повідомлення на веб-сторінці, аби інформувати гравця "гаряче" чи "холодно", тобто близько чи далеко він чи вона від скарбу.
// 3.4. Вітатиме гравця, якщо він чи вона клікне по локації скарбу або дуже близько до нього, і сповіщатиме, скільки кліків знадобилося гравцю, щоб знайти скарб.

// get random number from 0 to 'size'
const getRandomNumber = function (size) {
  return Math.floor(Math.random() * size)
}
// Calculate the length between the event and the target
const getDistance = function (event, target) {
  let diffX = event.offsetX - target.x
  let diffY = event.offsetY - target.y
  return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

const getDistanceHint = function (distance) {
  if (distance < 10) {
    return 'Boiling hot!'
  } else if (distance < 20) {
    return 'Really hot'
  } else if (distance < 40) {
    return 'Hot'
  } else if (distance < 80) {
    return 'Warm'
  } else if (distance < 160) {
    return 'Cold'
  } else if (distance < 320) {
    return 'Really cold'
  } else {
    return 'Freezing!'
  }
}

//Setup our variable parameters
let width = 400
let height = 400
let clicks = 0

//Create random location
const target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}

//Add clicks manipulator to img element
$('#map').click(function (event) {
  clicks++

  // receive the distance between event and target
  let distance = getDistance(event, target)

  // Convert distance to hint
  let distanceHint = getDistanceHint(distance)

  //Update #distance-element by new hint
  $('#distance').text(distanceHint)

  //if click was done near enough
  //tell player, that he won
  if (distance < 8) {
    alert('Found the treasure in ' + clicks + ' clicks!')
  }

})
