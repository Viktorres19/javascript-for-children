/* const likesCats = confirm('Do you like cats?')
if (likesCats) {
  console.log('You\'re a cool cat!')
} else {
  console.log('Yeah, that\'s fine. You\'re still cool!')
} */

/*---- The scheme of the game ----*/
// 1. Обере випадкове слово
// 2. Прийматиме варіанти відповіді гравця
// 3. Виходитиме з гри при бажанні гравця
// 4. Перевірятиме, чи буква, названа гравцем, є у слові
// 5. Стежитиме за літерами, що вже відгадані гравцем
// 6. Показиватиме гравцю його прогрес
// 7. Закінчуватиме ігровий сеанс, коли гравець відгатуватиме слово

/*---- Pseudocode ----*/
/*
Pick a random word
While the word has not been guessed {
  Show the player their current progress
  Get a guess from the player

  If the player wants to quit the game {
    Quit the game
  }
  Else if the guess is not a single letter {
    Tell the player to pick a single letter
  }
  Else {
    If the guess is in the word {
      Update the player's progress with the guess
    }
  }
}

Congratulate the player on guessing the word
*/

/*---- The Game ----*/
alert('The player should close its eyes!')
let mysteriousWord = prompt("Referee, please input the mysterious word:")

if (mysteriousWord === null || mysteriousWord.length == 0) {
  alert('The referee din\'t choose the word')
} else {
  alert(`The referee chose '${mysteriousWord}' word and its length = ${mysteriousWord.length}`)
  alert('The player can open its eyes)')

  const mysteriousWordArray = []
  for (let i = 0; i < mysteriousWord.length; i++) {
    mysteriousWordArray.push(mysteriousWord[i])
  }
  console.log(mysteriousWordArray)
  
  let answerWord = []
  for (let i = 0; i < mysteriousWordArray.length; i++) {
    answerWord[i] = '_'
  }
  console.log(answerWord)
  
  let remainingLetters = mysteriousWordArray.length
  while (remainingLetters > 0) {
    let guess = prompt('Guess a letter, or click Cancel to stop playing')
    if (guess === null) {
      break
    } else if (guess.length !== 1) {
      alert('Please enter a single letter.')
    } else {
      // Update the game state with the guess
      for (let j = 0; j < mysteriousWordArray.length; j++) {
        if (mysteriousWordArray[j] === guess) {
          answerWord[j] = guess
          remainingLetters--
        }
      }
      if (remainingLetters > 0) {
        alert(`You guessed ${answerWord.join('')}`)
      }
    }
  }
  if (answerWord.join('') === mysteriousWordArray.join('')) {
    alert(`Good job! The answer was '${answerWord.join('')}'`)
  } else {
    alert('It\'s a pity that you don\'t want to play any more.')
  }
}