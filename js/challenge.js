
// functions

function addCounter(){
    const counter = document.querySelector('#counter')
    let count = parseInt(counter.innerText)
    counter.innerText = count + 1
    
    
}

function minusCounter(){
    const counter = document.querySelector('#counter')
    let count = parseInt(counter.innerText)
    counter.innerText = count - 1
}


// for the like counter
const eachLikeCount = {

}


function likeCounter() {
    const counter = document.querySelector('#counter')
    const likes = document.querySelector('.likes')

    if (eachLikeCount[counter.innerText] === undefined) {
        eachLikeCount[counter.innerText] = 1
        let p = document.createElement('p')
        p.setAttribute('id', `timeOf${counter.innerText}`)
        p.textContent = `${counter.innerText} has been liked ${eachLikeCount[counter.innerText]} times`
        likes.appendChild(p)
    }
    else if (eachLikeCount[counter.innerText] !== undefined){
        eachLikeCount[counter.innerText] ++
        let p = document.querySelector(`#timeOf${counter.innerText}`)
        p.textContent = `${counter.innerText} has been liked ${eachLikeCount[counter.innerText]} times`
    }
    
}


let pauseSwitch = 0

function pauseButton() {

    if (pauseSwitch === 0) {
        clearInterval(intervalID)
        pause.innerText = 'resume'
        pauseSwitch = 1

        // disables all other buttions
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled = true
    }
    else if (pauseSwitch === 1) {
        pause.innerText = 'pause'
        updateCounter()
        pauseSwitch = 0
        // enable all other buttions
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false
        document.getElementById('heart').disabled = false

    }
}


function leaveComment(event) {
    event.preventDefault()

    let p = document.createElement('p')
    const list = document.getElementById('list')

    console.log(event.target.commentInput.value)
    p.textContent = `${event.target.commentInput.value}`
    list.appendChild(p)

    form.reset()
}


// starts the timer


let intervalID = 0

function updateCounter() {
    intervalID = setInterval(addCounter, 1000)
}


document.addEventListener('DOMContentLoaded', updateCounter)

// manually increment and decrement the counter

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

plus.addEventListener('click', addCounter)
minus.addEventListener('click', minusCounter)

// like the counter

const heart = document.querySelector('#heart')
heart.addEventListener('click', likeCounter)

// pause the counter
const pause = document.querySelector('#pause')
pause.addEventListener('click', pauseButton)

// leave comments
let form = document.querySelector('form')
form.addEventListener('submit', leaveComment)