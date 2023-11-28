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
// our audo file to play during countdown
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
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
// initializer functin -> set up our intial state and call render
function init(){
    scores = {
        p: 0,
        c: 0,
        t: 0,
    }
    results = {
        p: 'r',
        c: 'r',
    }

    winner = 't'
    
    render()
    // eventually call render() when render has been built
}

init()
// renderScores -> show how many wins/ losses/ ties
function renderScores(){

    for (let key in scores){
        const scoreEl = document.getElementById(`${key}-score`)
        scoreEl.innerText = scores[key]
    }
}
// renderResults -> show the results of player and computer choices
function renderResults(){
    pResultEl.src = RPS_LOOKUP[results.p].img
    cResultEl.src = RPS_LOOKUP[results.c].img

    pResultEl.style.borderColor = winner === 'p' ? 'purple' : 'white'
    cResultEl.style.borderColor = winner === 'c' ? 'purple' : 'white'
}

// render countdown

function renderCountdown(cbFunc){
    //start count at 3
    let count = 3
    // display countdown div and set the text
    countdownEl.style.visibility = 'visible'
    countdownEl.innerText = count
    //timer will update dom every second
    //once timer is up, display results

    AUDIO.currentTime = 0
    AUDIO.play()

    // set up timer
    // set interval
    const timerId = setInterval(() => {
        // every second decrease count
        count--
        //if count is truthy do something
        if(count) {
            console.log('interval running. count : ', count)
            countdownEl.innerText = count
        } else {
            clearInterval(timerId)
            // once
            countdownEl.style.visibility = 'hidden'

            //when timer is done call callbackfunction
            cbFunc()
        }
    }, 1000)
}

// render -> transfer/visualize all changes to the dom
function render(){
    renderCountdown(() => {
        renderScores()
        renderResults()
    })

}

// we'll do this by calling a couple other render functions through a countdown

// getRandom function for our computer player to select a move
function getRandomRPS (){
    const rps = Object.keys(RPS_LOOKUP)
    console.log('this is rps inside getRandomRPS', rps)


    const randomIndex = Math.floor(Math.random() * rps.lenght)
    console.log('random index inside getRandomRPS', randomIndex)

    return rps[randomIndex]
    // need a getWinner function -> determine who wins

}

function getWinner (){
    // compare our results object keys and base the output of this function
    // on what
    if (results.p === results.c){ return 't'}

    return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c'
}

// handleChoice -> for the player to select a move (event Listener)
// we'll use the innerText of our event target to determine what move is
function handleChoice(evt){
    // handle when the user clicks something that is not a button
    if (evt.target.tagName !== 'BUTTON'){return}
    // change results.p to whatever is selected using innerText
    results.p = evt.target.innerText.toLowerCase()
    // call the randome selector for our computer player
    results.c = getRandomRPS()
    // check for a winner
    winner = getWinner()
    console.log('this is the winner', winner)
    // update scores
    scores[winner] += 1

    render()
}

/*------ event listeners ------*/
