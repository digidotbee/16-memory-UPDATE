// Display a new game screen

// make a grid of cards

const arrFront = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const arrBack = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

// randomize the cards during shuffle

function shuffle(array) {
    let currentIndex = array.length, tempValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }
let randomCards = shuffle(arrFront)

console.log(randomCards)

// map the randomized array to the card divs

const cardsHTML = randomCards.map (card => `
    <div class="flip-card" data-target "${card}">
        <div class= "flip-card-icon>${card}
            <div class= "flip-card-front">front</div>
            <div class= "flip-card-back">back</div>
        </div>
    </div>
`).join('')

console.log(cardsHTML)

let cards = document.querySelector('.container')
cards.innerHTML= cardsHTML

// user clicks on the card they choose to reveal

const cardClicked = document.querySelector('')   

// function handleUserChoice ()


// let firstClick = false

// track the user guesses to reduce the amount of life totaling 10


// function handleUserGuess(e) {
//     if (state.lives == 0) {
//         messageToUser ('You LOSE')
//         return 
//     }

//     const firstGuess = e.target
//     const nextGuess = currCard.innerHTML


// }




// show one icon when clicked by user
// would you use display none toggle?




// leave that card displayed
// show a second card chosen by users
// if the cards match => they remain showing. 
//     else if they do not match => return them to hidden.

// if the user matches two cards- 
// they should remain showing through the whole Gamepad.
