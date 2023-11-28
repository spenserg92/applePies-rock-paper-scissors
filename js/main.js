/*------plan of action------*/
// identify and initialize our state variables
//(these are our constants and our lets pertaining to the state of our game)
//(usually, they are the intitial starting point of our elements)
//(our starting values)

//code the main render() function and our renderResults()
//(these are controllers that update the view based on user input)

// code the click event listener
// code the win logic
// update our renderResults() after we have win logic (to add a border to the winner)

//code a countdown timer
// want to add some audio to the countdown to improve user experience
/*------constants------*/

//list of choices
const RPS_LOOKUP = {
    r: {img: 'imgs/rock.png', beats: 's'},
    p: {img: 'imgs/paper.png', beats: 'r'},
    s: {img: 'imgs/scissors.png', beats: 'p'},
}

/*------cached element references------*/

const pResultEl = document.getElementById('p-result')
const cResultEl = document.getElementById('c-result')

const countdownEl = document.getElementById('countdown')

/*------functions------*/

/*------event listeners------*/