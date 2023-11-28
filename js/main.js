/*------ plan of action ------*/
//  Identify and initialize our state variables
// (these are our constants and our lets pertaining to the state of our game)
// (usually, they are the initial starting point of our elements)
// (our starting values)

// code the main render() function & our renderResults()
// (these are controllers that update the view based on user input)

// code the click event listener
// code the win logic
// update our renderResults after we have win logic(to add a border to the winner)

// Code a countdown timer
// want to add some Audio to the countdown to improve user experience

/*------ constants ------*/

// list of choices
const RPS_LOOKUP = {
    r: {img: 'imgs/rock.png', beats: 's'},
    p: {img: 'imgs/paper.png', beats: 'r'},
    s: {img: 'imgs/scissors.png', beats: 'p'}
}

/*------ cached element references ------*/
const pResultEl = document.getElementById('p-result')
const cResultEl = document.getElementById('c-result')

const countdownEl = document.getElementById('countdown')

/*------ App's initial state variables ------*/
// some things will change as the game proceeds
let scores
// scores will be object keys (p = player score, c = computer score, t=tie)
let results

let winner

/*------ functions ------*/

/*------ event listeners ------*/
